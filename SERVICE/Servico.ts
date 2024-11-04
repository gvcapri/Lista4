import { Materia } from './Lista4/entity/Materia';
import { AlunoRepositorio } from './entity/repository/Repositorio_aluno';

export class AlunoService{

    private : AlunoRepositorio;

    constructor(){
        this.AlunoRepositorio = new AlunoRepositorio();
    }

    async criar(musica: Musica): Promise<Musica>{
        return await this.musicaRepository.criar(musica);
    }   
    
    async listar(): Promise<Musica[]>{
        return await this.musicaRepository.listar();
    }   

    async atualizar(id: number, musica: Partial<Musica>): Promise<void>{
        await this.musicaRepository.atualizar(id, musica);
    }   

    async remover(id: number): Promise<boolean> {
        const musica = await this.musicaRepository.pesquisar({ id: id });
        if (!musica) { return false; }
        await this.musicaRepository.remover(musica);
        return true;
    }
}