import {MigrationInterface, QueryRunner} from "typeorm";

export class myInit1612167680430 implements MigrationInterface {
    name = 'myInit1612167680430'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "StudentTable" ("id" SERIAL NOT NULL, "StudentName" character varying NOT NULL, "StudentEmail" character varying NOT NULL, CONSTRAINT "PK_c8cfedd18f5dbf652c59aa410b8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "UserTable" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "PK_93d143ab5c551704d75223c4fcd" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "UserTable"`);
        await queryRunner.query(`DROP TABLE "StudentTable"`);
    }

}
