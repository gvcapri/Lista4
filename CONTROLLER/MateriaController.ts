import { Request, Response } from "express";
import { MateriaService } from "../SERVICE/MateriaService";
import { Materia } from "../entity/Materia";

export class MateriaController {
    private materiaService: MateriaService;

    constructor() {
        this.materiaService = new MateriaService();
    }

    async criar(req: Request, res: Response): Promise<Response> {
        try {
            const materia: Materia = req.body;
            const novaMateria = await this.materiaService.adicionarMateria(materia);
            return res.status(201).json(novaMateria);
        } catch (error) {
            return res.status(400).json({ message: "Erro ao criar matéria.", error: error.message });
        }
    }

    async listar(req: Request, res: Response): Promise<Response> {
        try {
            const materias = await this.materiaService.listarMaterias();
            return res.status(200).json(materias);
        } catch (error) {
            return res.status(500).json({ message: "Erro ao listar matérias.", error: error.message });
        }
    }

    async atualizar(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            const materia: Partial<Materia> = req.body;
            await this.materiaService.atualizarMateria(id, materia);
            return res.status(200).json({ message: `Matéria com ID ${id} atualizada com sucesso.` });
        } catch (error) {
            return res.status(400).json({ message: "Erro ao atualizar matéria.", error: error.message });
        }
    }

    async obter(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            const materia = await this.materiaService.obterMateria(id);
            if (materia) {
                return res.status(200).json(materia);
            }
            return res.status(404).json({ message: "Matéria não encontrada." });
        } catch (error) {
            return res.status(500).json({ message: "Erro ao buscar matéria.", error: error.message });
        }
    }

    async remover(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            await this.materiaService.excluirMateria(id);
            return res.status(200).json({ message: `Matéria com ID ${id} removida com sucesso.` });
        } catch (error) {
            return res.status(400).json({ message: "Erro ao remover matéria.", error: error.message });
        }
    }
}