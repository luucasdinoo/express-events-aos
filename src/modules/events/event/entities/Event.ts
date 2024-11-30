import { Local } from '@modules/events/local/entities/Local';
import { Organizer } from '@modules/events/organizer/entities/Organizer';
import { Participant } from '@modules/events/participant/entities/Participant';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ type: 'timestamp' })
  time: Date;

  @ManyToOne(() => Organizer, (organizer) => organizer.events, {
    onDelete: 'SET NULL',
  })
  organizer: Organizer;

  @ManyToOne(() => Local, (local) => local.events, {
    onDelete: 'SET NULL',
  })
  local: Local;

  @OneToMany(() => Participant, (participant) => participant.event)
  participants: Participant[];
}
