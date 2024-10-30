export class Aluno {
    constructor(
      public id: number,
      public nome: string,
      public matricula: string,
      public materias: Materia[] = [] 
    ) {}
  }