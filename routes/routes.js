import express from 'express'
import { queryParamsController } from '../controllers/queryParamsController.js';
import { pathParamsController } from '../controllers/pathParamsController.js';

const router = express.Router();

router.get('/', queryParamsController);
router.get('/:key/:value', pathParamsController)

export default router;