import "reflect-metadata";
import { DataSource } from "typeorm";
import { Aluno } from "./Aluno";
import { Materia } from "./Materia";
import { Professor } from "./Professor";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "seu_usuario",
  password: "sua_senha",
  database: "nome_do_banco_de_dados",
  synchronize: true,
  logging: true,
  entities: [Aluno, Materia, Professor],
  migrations: [],
  subscribers: [],
});
