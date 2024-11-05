import { Professor } from "../entity/Professor";
import { Banco } from "../banco";
import { Repository } from "typeorm";

export class ProfessorRepository {
    private repositorio: Repository<Professor>;

    constructor() {
        this.repositorio = Banco.getRepository(Professor);
    }

    async criar(professor: Professor): Promise<Professor> {
        return await this.repositorio.save(professor);
    }

    async listar(): Promise<Professor[]> {
        return await this.repositorio.find();
    }

    async obter(id: number): Promise<Professor | null> {
        return await this.repositorio.findOneBy({ id });
    }

    async pesquisar(professor: Partial<Professor>): Promise<Professor | null> {
        return await this.repositorio.findOne({ where: professor });
    }

    async remover(professor: Professor): Promise<Professor> {
        return await this.repositorio.remove(professor);
    }

    async atualizar(id: number, professor: Partial<Professor>): Promise<void> {
        await this.repositorio.update(id, professor);
    }
}
