import { DataSource } from 'typeorm';
import { Aluno } from './SRC/entity/Aluno';
import { Materia } from './SRC/entity/Materia';
import { Professor } from './SRC/entity/Professor';
import { Banco } from './banco';
import { MateriaService } from './SRC/SERVICE/MateriaService'; 
import { AlunoService } from './SRC/SERVICE/AlunoService';
import { ProfessorService } from './SRC/SERVICE/ProfessorService'; 
async function seedDatabase() {
    try {
        await Banco.initialize();
        console.log('Conectado ao banco de dados!');
        const materiaService = new MateriaService;
        const alunoService = new AlunoService;
        const professorService = new ProfessorService;

        const profCarlos = new Professor();
        profCarlos.nome = 'Prof. Carlos';
        profCarlos.email = 'carlos@example.com';
        profCarlos.registro = 'PR12345';

        const profRafael = new Professor();
        profRafael.nome = 'Prof. Rafael';
        profRafael.email = 'rafael@example.com';
        profRafael.registro = 'PR12346';

        const profAna = new Professor();
        profAna.nome = 'Prof. Ana';
        profAna.email = 'ana@example.com';
        profAna.registro = 'PR12347';

        await professorService.adicionarProfessor(profCarlos)
        await professorService.adicionarProfessor(profRafael)
        await professorService.adicionarProfessor(profAna)

        const fme = new Materia();
        fme.nome = 'Matemática Básica';
        fme.descricao = 'Conceitos fundamentais de matemática';
        fme.cargaHoraria = 60;
        fme.professor = profCarlos;
        await materiaService.adicionarMateria(fme)

        const c1 = new Materia();
        c1.nome = 'Calculo 1';
        c1.descricao = 'calculo diferencial e integral';
        c1.cargaHoraria = 90;
        c1.professor = profAna;
        await materiaService.adicionarMateria(c1)

        const poo = new Materia();
        poo.nome = 'Programação orientada a objetos';
        poo.descricao = 'conceitos de orientação a objetos';
        poo.cargaHoraria = 60;
        poo.professor = profRafael;
        await materiaService.adicionarMateria(poo)
        const alunoJoao = new Aluno();
        alunoJoao.nome = 'João Silva';
        alunoJoao.email = 'joao@example.com';
        alunoJoao.matricula = '202301';
        alunoJoao.curso = 'Engenharia';
        alunoJoao.materias = [fme]; 

        await alunoService.adicionarAluno(alunoJoao);
        await alunoService.matricularAluno(alunoJoao.id, c1.id);

        const alunoTeo = new Aluno();
        alunoTeo.nome = 'Téo Silva';
        alunoTeo.email = 'teo@example.com';
        alunoTeo.matricula = '292301';
        alunoTeo.curso = 'Engenharia';
        alunoTeo.materias = [poo]; 

        await alunoService.adicionarAluno(alunoTeo);


        console.log('Dados inseridos com sucesso!');
    } catch (error) {
        console.error('Erro ao inserir dados:', error);
    } finally {
        await Banco.destroy();
    }
}

seedDatabase();
