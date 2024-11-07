import express from 'express';
import professorRoutes from './ROUTES/professorRoutes';
import materiaRoutes from './ROUTES/materiaRoutes';
import alunoRoutes from './ROUTES/alunoRoutes'; // Importe as rotas dos alunos, caso tenha criado

const app = express();
const PORT = 3000;

// Middleware para interpretar o corpo das requisições como JSON
app.use(express.json());

// Registro das rotas principais
app.use('/professores', professorRoutes);  // Rotas para Professor
app.use('/materias', materiaRoutes);        // Rotas para Materia
app.use('/alunos', alunoRoutes);            // Rotas para Aluno

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

export default app;
