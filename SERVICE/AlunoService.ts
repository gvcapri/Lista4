import { AlunoRepositorio } from "../repository/AlunoRepository";
import { Aluno } from "../entity/Aluno";

export class AlunoService {
    private alunoRepository = new AlunoRepositorio();

    async listarAlunos(): Promise<Aluno[]> {
        return await this.alunoRepository.listar();
    }

    async adicionarAluno(aluno: Aluno): Promise<Aluno> {
        return await this.alunoRepository.criar(aluno);
    }

    async obterAluno(id: number): Promise<Aluno | null> {
        return await this.alunoRepository.obter(id);
    }

    async atualizarAluno(id: number, dadosAtualizados: Partial<Aluno>): Promise<void> {
        await this.alunoRepository.atualizar(id, dadosAtualizados);
    }

    async excluirAluno(id: number): Promise<void> {
        const aluno = await this.alunoRepository.obter(id);
        if (aluno) {
            await this.alunoRepository.remover(aluno);
        }
    }
}