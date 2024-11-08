import "reflect-metadata";
import express from 'express';
import professorRoutes from './SRC/ROUTES/professorRoutes';
import materiaRoutes from './SRC/ROUTES/materiaRoutes';
import alunoRoutes from './SRC/ROUTES/alunoRoutes'; 


import { Banco } from "./banco"

const minhaAPI = express();
minhaAPI.use(express.json());
minhaAPI.use('/professores', professorRoutes);
minhaAPI.use('/materias', materiaRoutes);
minhaAPI.use('/alunos', alunoRoutes);
const porta = 3000;

minhaAPI.listen(porta, async() => {
    
    Banco.initialize().then(() => {
        console.log("Conexão com o banco de dados efetuada com sucesso.")
    }).catch((erro) => console.log(erro));

    console.log('Servidor web rodando na porta 3000');
});

