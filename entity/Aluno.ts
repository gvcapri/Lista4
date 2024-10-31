import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Materia } from "./Materia";

@Entity()
export class Aluno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 100 })
  nome: string;

  @Column({ type: "int" })
  idade: number;

  @Column({ type: "varchar", length: 20, unique: true })
  matricula: string;

  @Column({ type: "varchar", length: 50 })
  curso: string;

  @Column({ type: "varchar", length: 100, unique: true })
  email: string;

  @OneToMany(() => Materia, (materia) => materia.aluno)
  materias: Materia[];

}
