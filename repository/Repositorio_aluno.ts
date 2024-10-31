import { Aluno } from '../entity/Aluno';
import { Banco } from '../banco';
import { Repository } from 'typeorm';

export class AlunoRepositorio{
    private repositorio: Repository<Aluno>;

    constructor(){
        this.repositorio = Banco.getRepository(Aluno);
    }

    async criar(c: Aluno): Promise<Aluno>{
        return await this.repositorio.save(c);
    }

    async listar(): Promise<Aluno[]>{
        return await this.repositorio.find();
    }
    
    async obter(id: number): Promise<Aluno>{
        return await this.repositorio.findOneBy({id: id});
    }

    async pesquisar(musica: Partial<Aluno>): Promise<Aluno | null>{
        return await this.repositorio.findOne({where : musica});
    }

    async remover(c: Aluno): Promise<Aluno>{
        return await this.repositorio.remove(c);
    }

    async atualizar(id: number, c: Partial<Aluno>): Promise<void>{
        await this.repositorio.update(id, c);
    }
}