import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1645906689576 implements MigrationInterface {
    name = 'migration1645906689576'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "ticket_type" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                "type" character varying NOT NULL,
                CONSTRAINT "PK_757d4830df239a662399edf9f24" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "ticket_type"
        `);
    }

}
