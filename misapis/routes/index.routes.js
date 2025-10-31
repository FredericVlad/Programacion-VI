import ejemplo from './ejemplo.routes.js';
import umas from './uma.routes.js';
import Uma from '../models/uma.model.js';
import { Router } from 'express';

const indexRoutes = Router();

indexRoutes.use('/ejemplo', ejemplo);

indexRoutes.use('/uma', umas);

indexRoutes.get('/uma', async (req, res) => {
  try {
    const umas = await Uma.find();

    // Mapeamos las UMAs agregando la URL completa de la imagen
    const umasConImagen = umas.map(uma => ({
      _id: uma._id,
      nombre: uma.nombre,
      apodo: uma.apodo,
      genero: uma.genero,
      fecha_nacimiento: uma.fecha_nacimiento,
      numero_de_carreras: uma.numero_de_carreras,
      carreras_ganadas: uma.carreras_ganadas,
      carreras_perdidas: uma.carreras_perdidas,
      // 🔥 Asegúrate de que la imagen esté en /public/uploads/
      imagen: uma.imagen
        ? `http://localhost:3000/${uma.imagen}`
        : 'http://localhost:3000/uploads/default.jpg'
    }));

    res.json(umasConImagen);
  } catch (error) {
    console.error('Error al obtener las UMAs:', error);
    res.status(500).json({ msg: 'Error al obtener las UMAs' });
  }
});

export default indexRoutes;