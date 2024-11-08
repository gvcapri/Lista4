import { Materia } from "../entity/Materia";
import { Banco } from "../../banco";
import { Repository } from "typeorm";

export class MateriaRepository {
    private repositorio: Repository<Materia>;

    constructor() {
        this.repositorio = Banco.getRepository(Materia);
    }

    async criar(materia: Materia): Promise<Materia> {
        return await this.repositorio.save(materia);
    }

    async listar(): Promise<Materia[]> {
        return await this.repositorio.find();
    }

    async obter(id: number): Promise<Materia | null> {
        return await this.repositorio.findOneBy({ id });
    }

    async pesquisar(materia: Partial<Materia>): Promise<Materia | null> {
        return await this.repositorio.findOne({ where: materia});
    }

    async remover(materia: Materia): Promise<Materia> {
        return await this.repositorio.remove(materia);
    }

    async atualizar(id: number, materia: Partial<Materia>): Promise<void> {
        await this.repositorio.update(id, materia);
    }
}