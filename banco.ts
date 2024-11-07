import "reflect-metadata"
import { DataSource } from "typeorm";

export const Banco = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "12345678",
    database: "api",
    entities: ["./entity/**.ts"],
    synchronize: true,
    dropSchema: false,
    logging: false
});