import {Router} from 'express';
import { getAllUmas, getUmaById, postUma, putUma, deleteUma } from '../controllers/uma.controller.js';

const umas = Router();

umas.get('/',getAllUmas);

umas.get('/:id', getUmaById);

umas.put('/:id', putUma);

umas.post('/', postUma);

umas.delete('/:id', deleteUma);

export default umas;