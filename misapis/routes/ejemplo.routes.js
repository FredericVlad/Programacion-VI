import {Router} from 'express';
import { getAllEjemplos } from '../controllers/ejemplo.controller.js';

const ejemplo = Router();

ejemplo.get('/',getAllEjemplos);

ejemplo.get('/:id', (req, res) => {

    const id = req.params.id;

    res.json({

        msg: 'get one API',
        id

    });

});

ejemplo.put('/', (req, res) => {

    const body = req.body;

    res.json({

        msg: 'put API',
        body

    });

});

ejemplo.post('/', (req, res) => {

    const body = req.body;

    res.json({

        msg: 'post API',
        body

    });

});

ejemplo.delete('/:id', (req, res) => {

    const id = req.params.id;

    res.json({

        msg: 'delete API'

    });

});

export default ejemplo;