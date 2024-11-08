import { ProfessorRepository } from "../repository/ProfessorRepository";
import { MateriaRepository } from "../repository/MateriaRepository";
import { Professor } from "../entity/Professor";
import { Materia } from "../entity/Materia";

export class ProfessorService {
    private professorRepository = new ProfessorRepository();
    private materiaRepository = new MateriaRepository();

    async listarProfessores(): Promise<Professor[]> {
        return await this.professorRepository.listar();
    }

    async adicionarProfessor(professor: Professor): Promise<Professor> {
        return await this.professorRepository.criar(professor);
    }

    async obterProfessor(id: number): Promise<Professor | null> {
        return await this.professorRepository.obter(id);
    }

    async atribuirMateria(professorId: number, materiaId: number): Promise<void> {
        const professor = await this.professorRepository.obter(professorId);
        const materia = await this.materiaRepository.obter(materiaId);

        if (!professor) throw new Error("Professor não encontrado");
        if (!materia) throw new Error("Matéria não encontrada");

        // Regra de negócio: professor só pode lecionar até 3 matérias
        if (professor.materias.length >= 3) {
            throw new Error("O professor já está lecionando em três matérias.");
        }

        materia.professor = professor;
        await this.materiaRepository.atualizar(materiaId, { professor });
    }

    async atualizarProfessor(id: number, dadosAtualizados: Partial<Professor>): Promise<void> {
        await this.professorRepository.atualizar(id, dadosAtualizados);
    }

    async excluirProfessor(id: number): Promise<void> {
        const professor = await this.professorRepository.obter(id);
        if (professor) {
            await this.professorRepository.remover(professor);
        }
    }
}