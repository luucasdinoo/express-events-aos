import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateLocalTable1732987912743 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'local',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'address_street',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'address_city',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'address_state',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'address_country',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'address_zip',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'capcity',
            type: 'int',
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('local');
  }
}
