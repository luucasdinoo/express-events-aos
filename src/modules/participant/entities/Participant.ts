import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Event } from '@modules/event/entities/Event';

@Entity()
export class Participant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @ManyToOne(() => Event, (event) => event.participants, {
    onDelete: 'CASCADE',
  })
  event: Event;
}
