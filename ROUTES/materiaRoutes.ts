import { Router } from 'express';
import { MateriaController } from '../CONTROLLER/MateriaController';

const router = Router();
const materiaController = new MateriaController();

router.post('/', materiaController.criar);             // Criar uma nova matéria
router.get('/', materiaController.listar);             // Listar todas as matérias
router.get('/:id', materiaController.obter);           // Obter uma matéria específica por ID
router.put('/:id', materiaController.atualizar);       // Atualizar uma matéria específica
router.delete('/:id', materiaController.remover);      // Remover uma matéria específica

export default router;
