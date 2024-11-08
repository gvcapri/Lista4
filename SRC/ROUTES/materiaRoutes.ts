import  express  from 'express';
import { MateriaController } from '../CONTROLLER/MateriaController';

const router = express.Router();
const materiaController = new MateriaController();

router.post('/', (req, res) => { materiaController.criar(req, res) });             
router.get('/', (req, res) => { materiaController.listar(req, res) });           
router.get('/:id', (req, res) => { materiaController.obter(req, res) });             
router.put('/:id', (req, res) => { materiaController.atualizar(req, res) });             
router.delete('/:id', (req, res) => { materiaController.remover(req, res) });             

export default router;
