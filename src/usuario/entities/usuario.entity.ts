import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'tb_usuario' })
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, nullable: false })
  nome: string;

  @Column({ length: 100, nullable: false, unique: true })
  email: string;

  @Column({ length: 255, nullable: false })
  endereco: string;

  @Column({ length: 20, nullable: false })
  telefone: string;

  @Column({ length: 50, nullable: false })
  senha: string;
}
