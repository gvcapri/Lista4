import { DataSource } from 'typeorm';
import { Aluno } from './entity/Aluno';
import { Materia } from './entity/Materia';
import { Professor } from './entity/Professor';

// Configuração do DataSource (ajuste com os detalhes do seu banco)
const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '12345678',
    database: 'api',
    entities: [Aluno, Materia, Professor],
    synchronize: true, // cuidado: isso recria as tabelas a cada execução se houver alterações
    logging: true,
});

async function seedDatabase() {
    try {
        await AppDataSource.initialize();
        console.log('Conectado ao banco de dados!');

        // Criando um professor de exemplo
        const professor = new Professor();
        professor.nome = 'Prof. Carlos';
        professor.email = 'carlos@example.com';
        professor.registro = 'PR12345';

        await AppDataSource.manager.save(professor);
        console.log('Professor salvo:', professor);

        // Criando uma matéria de exemplo associada ao professor
        const materia = new Materia();
        materia.nome = 'Matemática Básica';
        materia.descricao = 'Conceitos fundamentais de matemática';
        materia.cargaHoraria = 60;
        materia.professor = professor; // associando o professor

        await AppDataSource.manager.save(materia);
        console.log('Matéria salva:', materia);

        // Criando um aluno de exemplo
        const aluno = new Aluno();
        aluno.nome = 'João Silva';
        aluno.email = 'joao@example.com';
        aluno.matricula = '202301';
        aluno.curso = 'Engenharia';

        await AppDataSource.manager.save(aluno);
        console.log('Aluno salvo:', aluno);

        // Opcionalmente, você pode associar uma matéria ao aluno se houver relacionamento
        aluno.materias = [materia];
        await AppDataSource.manager.save(aluno);

        console.log('Dados inseridos com sucesso!');
    } catch (error) {
        console.error('Erro ao inserir dados:', error);
    } finally {
        await AppDataSource.destroy();
    }
}

seedDatabase();
