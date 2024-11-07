import { Request, Response } from "express";
import { AlunoService } from "../SERVICE/AlunoService";
import { Aluno } from "../entity/Aluno";

export class AlunoController {
    private alunoService: AlunoService;

    constructor() {
        this.alunoService = new AlunoService();
    }

    async criar(req: Request, res: Response): Promise<Response> {
        try {
            const aluno: Aluno = req.body;
            const novoAluno = await this.alunoService.adicionarAluno(aluno);
            return res.status(201).json(novoAluno);
        } catch (error) {
            return res.status(400).json({ message: "Erro ao criar aluno.", error: error.message });
        }
    }

    async listar(req: Request, res: Response): Promise<Response> {
        try {
            const alunos = await this.alunoService.listarAlunos();
            return res.status(200).json(alunos);
        } catch (error) {
            return res.status(500).json({ message: "Erro ao listar alunos.", error: error.message });
        }
    }

    async atualizar(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            const aluno: Partial<Aluno> = req.body;
            await this.alunoService.atualizarAluno(id, aluno);
            return res.status(200).json({ message: `Aluno com ID ${id} atualizado com sucesso.` });
        } catch (error) {
            return res.status(400).json({ message: "Erro ao atualizar aluno.", error: error.message });
        }
    }

    async obter(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            const aluno = await this.alunoService.obterAluno(id);
            if (aluno) {
                return res.status(200).json(aluno);
            }
            return res.status(404).json({ message: "Aluno não encontrado." });
        } catch (error) {
            return res.status(500).json({ message: "Erro ao buscar aluno.", error: error.message });
        }
    }

    async remover(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            await this.alunoService.excluirAluno(id);
            return res.status(200).json({ message: `Aluno com ID ${id} removido com sucesso.` });
        } catch (error) {
            return res.status(400).json({ message: "Erro ao remover aluno.", error: error.message });
        }
    }
}