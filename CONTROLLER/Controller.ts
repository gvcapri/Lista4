import { Request, Response } from 'express';
import { MusicaService } from '../service/MusicaService';
import { Musica } from '../entity/Musica';

export class MusicaController {
    private musicaService: MusicaService;

    constructor() {
        this.musicaService = new MusicaService();
    }

    async criar(req: Request, res: Response): Promise<Response> {
        try {
            const musica: Musica = req.body;
            const novaMusica = await this.musicaService.criar(musica);
            return res.status(201).json(novaMusica);
        } catch (error) {
            return res.status(400).json({ message: 'Erro ao criar musica.', error: error.message });
        }
    }

    async listar(req: Request, res: Response): Promise<Response> {
        try {
            const musicas = await this.musicaService.listar();
            return res.status(200).json(musicas);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao listar musicas.', error: error.message });
        }
    }

    async atualizar(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            const musica: Partial<Musica> = req.body;
            await this.musicaService.atualizar(id, musica);
            return res.status(200).json({ message: `Musica com ID ${id} atualizado com sucesso.` });
        } catch (error) {
            return res.status(400).json({ message: 'Erro ao atualizar musica.', error: error.message });
        }
    }

    async remover(req: Request, res: Response): Promise<Response> {
        try {
            const id:number = parseInt(req.params.id);
            const musica = await this.musicaService.remover(id);
            return res.status(200).json({ message: `Musica com ID ${id} removido com sucesso.`, musica });
        } catch (error) {
            return res.status(400).json({ message: 'Erro ao remover musica.', error: error.message });
        }
    }
}
