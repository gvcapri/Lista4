import express from 'express';
import { AlunoController } from '../CONTROLLER/AlunoController';

const router = express.Router();
const alunoController = new AlunoController();

router.get('/', (req, res) => { alunoController.listar(req,res) });
router.post('/', (req, res) => { alunoController.criar(req,res) });
router.put('/:id', (req, res) => { alunoController.atualizar(req,res) });
router.delete('/:id', (req, res) => { alunoController.remover(req,res) });

export default router;
