import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Event } from '@modules/events/event/entities/Event';

@Entity()
export class Participant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @ManyToOne(() => Event, (event) => event.participants, {
    onDelete: 'SET NULL',
    nullable: true,
  })
  @JoinColumn({ name: 'event_id' })
  event: Event;
}
