import { Materia } from '../entity/Materia';
import { AlunoRepositorio } from '../repository/Repositorio_aluno';

export class AlunoService {
    
    private alunoRepositorio: AlunoRepositorio;

    constructor() {
        this.alunoRepositorio = new AlunoRepositorio();
    }

    async criar(materia: Materia): Promise<Materia> {
        return await this.alunoRepositorio.criar(materia);
    }

    async listar(): Promise<Materia[]> {
        return await this.alunoRepositorio.listar();
    }

    async atualizar(id: number, materia: Partial<Materia>): Promise<void> {
        await this.alunoRepositorio.atualizar(id, materia);
    }

    async remover(id: number): Promise<boolean> {
        const materia = await this.alunoRepositorio.pesquisar({ id: id });
        if (!materia) { return false; }
        await this.alunoRepositorio.remover(materia);
        return true;
    }
}
