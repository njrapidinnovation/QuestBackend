async migrateUsers({ pageNum, pageSize, authKey }: MigrateUsersDto) {
    try {
      if (authKey != process.env.MIGRATION_USERS_AUTH_KEY) throw new BadRequestException('Invalid AuthKey')
      else {
        const config = {
          method: 'get',
          url: `https://www.moonlightingapi.com/users?pageNum=${pageNum}&pageSize=${pageSize}`,
          headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'CareerGig',
            'ml-ticket': 'ff2f15def4dda1ff93533de3dc5d1d91',
          },
        }
        return new Promise((resolve, reject) => {
          axios(config).then(async response => {
            const { data } = response

            await Promise.all(
              data.map(async res => {
                const email = res.email ? res.email.toLocaleLowerCase() : undefined
                const location = res.location
                const user = await getUserBy({ email })
                if (res.firstName && res.lastName && email && !user && location.countryCode == 'US') {
                  const obj: User = {
                    id: uuid(),
                    firstName: res.firstName.toLocaleLowerCase(),
                    lastName: res.lastName.toLocaleLowerCase(),
                    email,
                    emailVerified: res.isEmailVerified ? res.isEmailVerified : email ? true : false,
                    phoneNo: res.mobileNumber && res.mobileNumber.length > 0 ? '1' + res.mobileNumber : undefined,
                    phoneVerified: res.isPhoneVerified ? res.isPhoneVerified : false,
                    password: await bcrypt.hash('CareerGig2021', 10),
                    defaultUser: DefaultUser.Employee,
                  }
                  await this.userRepository.insert(obj)
                  const migrationUser = await getMigrationUserBy({ email })
                  if (!migrationUser) await this.migrationUserRepository.insert({ id: uuid(), email, userId: res.userId })
                  const employee = await this.employeeService.addEmployees(obj.id)
                  if (res.biotext) await this.employeeRepository.update(employee.id, { about: res.biotext })
                  const socialLinks = res.socialLinks

                  if (socialLinks && socialLinks.length > 0) {
                    for (const value of socialLinks) {
                      if (value.socialSite == 'FACEBOOK')
                        await this.employeeRepository.update(employee.id, { facebookUrl: value.socialUrl })
                      else if (value.socialSite == 'LINKEDIN')
                        await this.employeeRepository.update(employee.id, { linkedInUrl: value.socialUrl })
                      else if (value.socialSite == 'TWITTER')
                        await this.employeeRepository.update(employee.id, { twitterUrl: value.socialUrl })
                    }
                  }

                  if (
                    location &&
                    location.city &&
                    location.stateName &&
                    location.zipCode &&
                    ((location.countryName && location.countryName == 'United States') || location.countryCode == 'US')
                  ) {
                    await this.commonService.newAddress(undefined, employee.id, {
                      street1: '',
                      street2: undefined,
                      city: location.city,
                      state: location.stateName,
                      zip: location.zipCode,
                      country: 'United States of America',
                    })
                    await this.employeeRepository.update(employee.id, { completeProfile: true })
                  }
                  // await this.forgotPassword({ email })
                } else {
                  const failedMigrationUser = await getFailedMigrationUserBy({ email })
                  if (!failedMigrationUser) await this.failedMigrationUserRepository.insert({ id: uuid(), email, userId: res.userId })
                }
              })
            )
            resolve({ status: 200, msg: 'Successful' })
          })
        })
      }
    } catch (err) {
      throw new BadRequestException(err.message)
    }
  }