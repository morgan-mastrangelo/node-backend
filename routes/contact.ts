import * as express from 'express';
import ContactController from '../controllers/ContactController';

const router = express.Router();

router.get('/', ContactController.get);
router.post('/', ContactController.create);
router.put('/:id', ContactController.update);
router.delete('/:id', ContactController.delete);

export default router;