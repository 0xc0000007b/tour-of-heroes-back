import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class HeroEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  name: string;
  @Column()
  superPower: string;
}
