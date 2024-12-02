import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateEventTable1732989810775 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'event',
        columns: [
          {
            name: 'id',
            type: 'int',
            isGenerated: true,
            isPrimary: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'description',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'localDateTime',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'organizer_id',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'local_id',
            type: 'int',
            isNullable: false,
          },
        ],
      })
    );
    await queryRunner.createForeignKeys('event', [
      new TableForeignKey({
        columnNames: ['organizer_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'organizer',
        onDelete: 'SET NULL',
      }),
      new TableForeignKey({
        columnNames: ['local_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'local',
        onDelete: 'SET NULL',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('event');
  }
}
