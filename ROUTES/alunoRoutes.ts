import { Router } from 'express';
import { AlunoController } from '../CONTROLLER/AlunoController';

const router = Router();
const alunoController = new AlunoController();

router.post('/', alunoController.criar);
router.get('/', alunoController.listar);
router.get('/:id', alunoController.obter);
router.put('/:id', alunoController.atualizar);
router.delete('/:id', alunoController.remover);

export default router;

