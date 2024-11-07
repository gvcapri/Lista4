import { AlunoRepositorio } from "../repository/AlunoRepository";
import { MateriaRepository } from "../repository/MateriaRepository";
import { Aluno } from "../entity/Aluno";

export class AlunoService {
    private alunoRepository = new AlunoRepositorio();
    private materiaRepository = new MateriaRepository();

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

    async matricularAluno(alunoId: number, materiaId: number) {
        const aluno = await this.alunoRepository.obter(alunoId);
        const materia = await this.materiaRepository.obter(materiaId);
    
        if (!aluno) {
            throw new Error("Aluno não encontrado");
        }
        if (!materia) {
            throw new Error("Matéria não encontrada");
        }
       
        await this.materiaRepository.atualizar(materia.id, {alunos: aluno});
    
        console.log(`O aluno ${aluno.nome} foi matriculado na matéria ${materia.nome} com sucesso!`);
    }
    
    

    async excluirAluno(id: number): Promise<void> {
        const aluno = await this.alunoRepository.obter(id);
        if (aluno) {
            await this.alunoRepository.remover(aluno);
            console.log("Aluno removido com sucesso!")
        }else{
            throw new Error("Aluno não encontrado!");
        }
    }
}