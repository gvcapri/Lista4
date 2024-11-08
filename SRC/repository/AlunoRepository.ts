import { Aluno } from '../entity/Aluno';
import { Banco } from '../../banco';
import { Repository } from 'typeorm';

export class AlunoRepositorio{
    private repositorio: Repository<Aluno>;

    constructor(){
        this.repositorio = Banco.getRepository(Aluno);
    }

    async criar(aluno: Aluno): Promise<Aluno> {

        return this.repositorio.save(aluno);
    }
    
    async listar(): Promise<Aluno[]>{
        return await this.repositorio.find();
    }
    
    async obter(id: number): Promise<Aluno | null> {
        return await this.repositorio.findOneBy({ id } );
    }

    async pesquisar(aluno: Partial<Aluno>): Promise<Aluno | null>{
        return await this.repositorio.findOne({where : aluno});
    }

    async remover(aluno: Aluno): Promise<Aluno | null>{
        return await this.repositorio.remove(aluno);
    }

    async atualizar(id: number, aluno: Partial<Aluno>): Promise<void>{
        await this.repositorio.update(id, aluno);
    }
}