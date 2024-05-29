import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ApiKey {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  key!: string;

  @Column()
  clientName!: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;

  @Column({ type: 'timestamp', nullable: true })
  revokedAt?: Date | null;
}
