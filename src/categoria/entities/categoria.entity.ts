import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { IsNotEmpty } from 'class-validator';


@Entity({ name: 'tb_categoria' })
export class Categoria {

  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty({ message: 'O nome da categoria não pode estar vazio.' })
  @Column({ nullable: false, unique: true })
  nome: string;

  @IsNotEmpty({ message: 'A descrição não pode estar vazia.' })
  @Column({ nullable: false })
  descricao: string;

}
