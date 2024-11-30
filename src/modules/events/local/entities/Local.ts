import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Event } from '@modules/events/event/entities/Event';

@Entity()
export class Local {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address_street: string;

  @Column()
  address_city: string;

  @Column()
  address_state: string;

  @Column()
  address_country: string;

  @Column()
  address_zip: string;

  @Column()
  capcity: number;

  @OneToMany(() => Event, (event) => event.local)
  events: Event[];
}
