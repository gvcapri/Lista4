import { Router } from 'express';
import { ProfessorController } from '../CONTROLLER/ProfessorController';

const router = Router();
const professorController = new ProfessorController();

router.post('/', professorController.criar);            // Criar um novo professor
router.get('/', professorController.listar);             // Listar todos os professores
router.get('/:id', professorController.obter);           // Obter um professor específico por ID
router.put('/:id', professorController.atualizar);       // Atualizar um professor específico
router.delete('/:id', professorController.remover);      // Remover um professor específico

export default router;
