import * as express from 'express';
import contact from './contact';

const router = express.Router();

router.use('/contact', contact);

export default router;