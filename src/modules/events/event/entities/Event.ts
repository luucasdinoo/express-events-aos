import { Local } from '@modules/events/local/entities/Local';
import { Organizer } from '@modules/events/organizer/entities/Organizer';
import { Participant } from '@modules/events/participant/entities/Participant';
import {
  Column,
  Entity,
  JoinColumn,
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
  localDateTime: Date;

  @ManyToOne(() => Organizer, (organizer) => organizer.events, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'organizer_id' })
  organizer: Organizer;

  @ManyToOne(() => Local, (local) => local.events, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'local_id' })
  local: Local;

  @OneToMany(() => Participant, (participant) => participant.event)
  participants: Participant[];
}
