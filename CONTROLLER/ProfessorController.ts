import { Request, Response } from "express";
import { ProfessorService } from "../SERVICE/ProfessorService";
import { Professor } from "../entity/Professor";

export class ProfessorController {
    private professorService: ProfessorService;

    constructor() {
        this.professorService = new ProfessorService();
    }

    async criar(req: Request, res: Response): Promise<Response> {
        try {
            const professor: Professor = req.body;
            const novoProfessor = await this.professorService.adicionarProfessor(professor);
            return res.status(201).json(novoProfessor);
        } catch (error) {
            return res.status(400).json({ message: "Erro ao criar professor.", error: error.message });
        }
    }

    async listar(req: Request, res: Response): Promise<Response> {
        try {
            const professores = await this.professorService.listarProfessores();
            return res.status(200).json(professores);
        } catch (error) {
            return res.status(500).json({ message: "Erro ao listar professores.", error: error.message });
        }
    }

    async atualizar(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            const professor: Partial<Professor> = req.body;
            await this.professorService.atualizarProfessor(id, professor);
            return res.status(200).json({ message: `Professor com ID ${id} atualizado com sucesso.` });
        } catch (error) {
            return res.status(400).json({ message: "Erro ao atualizar professor.", error: error.message });
        }
    }

    async remover(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            await this.professorService.excluirProfessor(id);
            return res.status(200).json({ message: `Professor com ID ${id} removido com sucesso.` });
        } catch (error) {
            return res.status(400).json({ message: "Erro ao remover professor.", error: error.message });
        }
    }

    async obter(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            const professor = await this.professorService.obterProfessor(id);
            if (professor) {
                return res.status(200).json(professor);
            }
            return res.status(404).json({ message: "Professor não encontrado." });
        } catch (error) {
            return res.status(500).json({ message: "Erro ao buscar professor.", error: error.message });
        }
    }

    async atribuirMateria(req: Request, res: Response): Promise<Response> {
        try {
            const { professorId, materiaId } = req.body;
            await this.professorService.atribuirMateria(professorId, materiaId);
            return res.status(200).json({ message: `Matéria com ID ${materiaId} atribuída ao professor com ID ${professorId}.` });
        } catch (error) {
            return res.status(400).json({ message: "Erro ao atribuir matéria ao professor.", error: error.message });
        }
    }
}