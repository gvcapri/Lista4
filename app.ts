// src/index.ts
import "reflect-metadata";
import express from "express";
import { Banco } from "./banco";
import { AlunoController } from "./CONTROLLER/AlunoController";
import { ProfessorController } from "./CONTROLLER/ProfessorController";
import { MateriaController } from "./CONTROLLER/MateriaController";

const app = express();
app.use(express.json());

// Instâncias dos controladores
const alunoController = new AlunoController();
const professorController = new ProfessorController();
const materiaController = new MateriaController();

// Rotas para Aluno
app.get("/alunos", (req, res) => alunoController.listar(req, res));
app.post("/aluno", (req, res) => alunoController.criar(req, res));
app.put("/aluno/:id", (req, res) => alunoController.atualizar(req, res));
app.delete("/aluno/:id", (req, res) => alunoController.remover(req, res));

// Rotas para Professor
app.get("/professores", (req, res) => professorController.listar(req, res));
app.post("/professor", (req, res) => professorController.criar(req, res));
app.put("/professor/:id", (req, res) => professorController.atualizar(req, res));
app.delete("/professor/:id", (req, res) => professorController.remover(req, res));
app.post("/professor/atribuirMateria", (req, res) => professorController.atribuirMateria(req, res));

// Rotas para Materia
app.get("/materias", (req, res) => materiaController.listar(req, res));
app.post("/materia", (req, res) => materiaController.criar(req, res));
app.put("/materia/:id", (req, res) => materiaController.atualizar(req, res));
app.delete("/materia/:id", (req, res) => materiaController.remover(req, res));

// Conexão com o banco e inicialização do servidor
Banco.initialize().then(() => {
    app.listen(3000, () => {
        console.log("Servidor rodando na porta 3000");
    });
}).catch(error => console.log("Erro ao conectar ao banco de dados:", error));
