import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class BaleStock {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  millname!: string;

  @Column()
  entity!: string;

  @Column({ type: 'timestamptz' }) // Recommended
  stockdate!: Date;

  @Column()
  stockqty!: number;
}

@Entity()
export class BaleTransactions {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  millname!: string;

  @Column()
  entity!: string;

  @Column({ type: 'timestamptz' })
  dateassigned!: Date;

  @Column()
  qtyassigned!: number;
  
  @CreateDateColumn()
  created_at!: Date; // Creation date

  @UpdateDateColumn()
  updated_at!: Date; // Last updated date
}
