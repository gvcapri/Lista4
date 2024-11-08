import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Aluno } from "./Aluno";
import { Professor } from "./Professor";

@Entity()
export class Materia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 100 })
  nome: string;

  @Column({ type: "text", nullable: true })
  descricao: string;

  @Column({ type: "int" })
  cargaHoraria: number;


  @ManyToOne(() => Aluno, (aluno) => aluno.materias)
  alunos: Aluno;

  @Column({type: "varchar", length: 100, nullable: true})
  preReq: string

  @ManyToOne(() => Professor, (professor) => professor.materias)
  professor: Professor;
}