import  express  from 'express';
import { ProfessorController } from '../CONTROLLER/ProfessorController';

const router = express.Router();
const professorController = new ProfessorController();


router.post('/', (req, res) => { professorController.criar(req, res) });             
router.get('/', (req, res) => { professorController.listar(req, res) });           
router.get('/:id', (req, res) => { professorController.obter(req, res) });             
router.put('/:id', (req, res) => { professorController.atualizar(req, res) });             
router.delete('/:id', (req, res) => { professorController.remover(req, res) });             

export default router;