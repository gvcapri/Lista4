import "reflect-metadata"
import { DataSource } from "typeorm";

export const Banco = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "capriata",
    password: "tTyk59@F",
    database: "typeorm",
    entities: ["./entity/**.ts"],
    synchronize: true,
    dropSchema: false,
    logging: false
});