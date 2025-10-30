import ejemplo from './ejemplo.routes.js';
import umas from './uma.routes.js';
import { Router } from 'express';

const indexRoutes = Router();

indexRoutes.use('/ejemplo', ejemplo);

indexRoutes.use('/uma', umas);

export default indexRoutes;