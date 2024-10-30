import { Entity, PrimaryGeneratedColumn,Column,ManyToMany, JoinTable,} from "typeorm";
  import { Materia } from "./Materia";
  
  @Entity()
  export class Aluno {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nome: string;
  
    @Column()
    matricula: string;
  
    @ManyToMany(() => Materia, (materia) => materia.alunos)
    @JoinTable() 
    materias: Materia[];
  }
  