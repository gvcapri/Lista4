import { MateriaRepository } from "../repository/MateriaRepository";
import { Materia } from "../entity/Materia";

export class MateriaService {
    private materiaRepository = new MateriaRepository();

    async listarMaterias(): Promise<Materia[]> {
        return await this.materiaRepository.listar();
    }

    async adicionarMateria(materia: Materia): Promise<Materia> {
        return await this.materiaRepository.criar(materia);
    }

    async obterMateria(id: number): Promise<Materia | null> {
        return await this.materiaRepository.obter(id);
    }

    async atualizarMateria(id: number, dadosAtualizados: Partial<Materia>): Promise<void> {
        await this.materiaRepository.atualizar(id, dadosAtualizados);
    }

    async excluirMateria(id: number): Promise<void> {
        const materia = await this.materiaRepository.obter(id);
        if (materia) {
            await this.materiaRepository.remover(materia);
        }
    }
}