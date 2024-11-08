import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Materia } from "./Materia";

@Entity()
export class Professor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 100 })
  nome: string;

  @Column({ type: "varchar", length: 100, unique: true })
  email: string;

  @Column({ type: "varchar", length: 20, unique: true })
  registro: string; 

  @Column({ type: "varchar", length: 100, nullable: true })
  departamento: string;

  @OneToMany(() => Materia, (materia) => materia.professor)
  materias: Materia[];
}
