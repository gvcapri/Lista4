import { Materia } from "./Materia";

export class Professor {
  constructor(
    public id: number,
    public nome: string,
    public materias: Materia[] = [] 
  ) {}
}