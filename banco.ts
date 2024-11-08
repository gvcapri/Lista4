import "reflect-metadata"
import { DataSource } from "typeorm";

export const Banco = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Facoro2018.",
    database: "api",
    entities: ["./SRC/entity/**.ts"],
    synchronize: true,
    dropSchema: false,
    logging: false
});
