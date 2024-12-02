import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateTableTicket1733162882778 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'ticket',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'type_ticket',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'price',
            type: 'double precision',
            isNullable: false,
          },
          {
            name: 'event_id',
            type: 'int',
            isNullable: false,
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      'ticket',
      new TableForeignKey({
        columnNames: ['event_id'],
        referencedTableName: 'event',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('ticket', 'FK_ticket_event');
    await queryRunner.dropTable('ticket');
  }
}
