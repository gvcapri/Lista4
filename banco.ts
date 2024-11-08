import "reflect-metadata"
import { DataSource } from "typeorm";
// import { Aluno } from './entity/Aluno';
// import { Materia } from './entity/Materia'; 

export const Banco = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Facoro2018.",
    database: "api",
    entities: ["./SRC/entity/**.ts"],
    // entities: [Aluno, Materia],
    synchronize: true,
    dropSchema: false,
    logging: false
});



// -----------
// import { Aluno } from './entity/Aluno';
// import { Materia } from './entity/Materia'; // Importe outras entidades conforme necessário

// export const Banco = new DataSource({
//     type: "mysql",
//     host: "localhost",
//     port: 3306,
//     username: "root",
//     password: "Facoro2018.",
//     database: "api",
//     entities: [Aluno, Materia], // Adicione outras entidades aqui
//     synchronize: true,
//     dropSchema: false,
//     logging: false
// });
