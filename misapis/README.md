# Uma Musume API - Gestión de Personajes

Aplicación web para gestionar información de Uma Musume con interfaz moderna y operaciones CRUD completas.

## Características

-  Interfaz moderna con tema oscuro personalizado
-  **Bootstrap 5** para componentes responsivos y accesibles
-  Diseño responsive (grid de cards)
-  CRUD completo: Crear, Leer, Actualizar y Eliminar Uma Musume
-  Visualización de estadísticas de carreras
-  Edición inline mediante modal prellenado
-  Animaciones suaves y efectos hover
-  Modal de detalles con información completa
-  Navbar Bootstrap con estilo personalizado

## Últimos cambios

- Integración completa con **Bootstrap 5** (CDN) y adaptación del CSS personalizado.
- Título principal actualizado usando una fuente elegante (Playfair Display) y efecto de brillo similar al logo.
- El formulario de creación se movió a un **modal** que se abre desde un botón "✨ Agregar Nueva Uma Musume".
- Edición por-uma: cada card tiene ahora un botón **Editar** que abre un modal prellenado para esa Uma (se eliminó el formulario global de actualización).
- Mejoras en accesibilidad y uso de componentes estándar de Bootstrap (modales, botones, formularios y grid).

## Requisitos

- Node.js 16+ instalado
- MongoDB (local o en la nube)
- npm (incluido con Node.js)

## Instalación

1. **Clonar o descargar el proyecto**
   ```powershell
   cd "d:\Practica 2 Fred Haas Pacheco\misapis"
   ```

2. **Instalar dependencias**
   ```powershell
   npm install
   ```

3. **Configurar variables de entorno**
   
   Crea un archivo `.env` en la raíz del proyecto:
   ```
   PORT=3000
   MONGO_URI=mongodb://usuario:contraseña@host:puerto/nombredb
   ```
   
   Ejemplos:
   - **MongoDB local**: `MONGO_URI=mongodb://localhost:27017/uma_musume`
   - **MongoDB Atlas (nube)**: `MONGO_URI=mongodb+srv://usuario:contraseña@cluster.mongodb.net/uma_musume`

## Ejecución

1. **Iniciar el servidor**
   ```powershell
   npm start
   ```
   
   Deberías ver en consola:
   ```
   Servidor corriendo en puerto 3000
   Conectados a MongoDB
   ```

2. **Abrir en el navegador**
   ```
   http://localhost:3000/
   ```

## Uso de la Aplicación

### Crear Uma Musume
1. Haz clic en el botón grande "✨ Agregar Nueva Uma Musume" arriba del catálogo. Esto abrirá un modal con el formulario.
2. Completa los campos requeridos en el modal (nombre, apodo, género, año de nacimiento, estadísticas, URL de imagen).
3. Haz clic en "✨ Crear Uma" dentro del modal.
4. Si la creación es exitosa el modal se cerrará automáticamente y la nueva Uma aparecerá en el grid de cards.

### Ver Detalles
1. Haz clic en " Ver detalles" en cualquier card
2. Se abrirá un modal con toda la información
3. Cierra con la X, Escape o haciendo clic fuera

### Editar Uma Musume
1. Haz clic en " Editar" en la card correspondiente
2. El modal se abrirá con el formulario prellenado
3. Modifica los campos que desees
4. Haz clic en " Guardar cambios"
5. El modal se cerrará y la lista se actualizará automáticamente

### Eliminar Uma Musume
1. Haz clic en " Eliminar" en la card
2. Confirma la acción en el diálogo
3. La Uma será eliminada y la lista se actualizará

## Estructura del Proyecto

```
misapis/
├── index.js                 # Punto de entrada
├── package.json            # Dependencias
├── .env                    # Variables de entorno (crear)
├── controllers/
│   └── uma.controller.js   # Lógica de negocio
├── models/
│   └── uma.model.js        # Schema de MongoDB
├── routes/
│   ├── index.routes.js     # Rutas principales
│   └── uma.routes.js       # Rutas de Uma Musume
├── db/
│   └── cnn_mongodb.js      # Conexión a MongoDB
├── server/
│   └── server.js           # Configuración del servidor Express
└── public/
    └── index.html          # Frontend (interfaz)
```

## Campos de Uma Musume

- **Nombre**: Nombre del personaje (requerido)
- **Apodo**: Apodo o nombre alternativo
- **Género**: Género del personaje (requerido)
- **Año de Nacimiento**: Año de nacimiento (número)
- **Número de Carreras**: Total de carreras disputadas
- **Carreras Ganadas**: Total de carreras ganadas
- **Carreras Perdidas**: Total de carreras perdidas
- **URL Imagen**: URL de la imagen del personaje

## Endpoints de API

Todos los endpoints están prefijados con `/api/uma`

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/` | Obtener todas las Uma Musume |
| GET | `/:id` | Obtener Uma Musume por ID |
| POST | `/` | Crear nueva Uma Musume |
| PUT | `/:id` | Actualizar Uma Musume |
| DELETE | `/:id` | Eliminar Uma Musume |

## Troubleshooting

### Error: "No se puede conectar a MongoDB"
- Verifica que MongoDB esté corriendo
- Comprueba la variable `MONGO_URI` en `.env`
- Asegúrate de que tienes conexión a internet (si usas MongoDB Atlas)

### Error: "Puerto 3000 ya está en uso"
- Cambia el puerto en `.env`: `PORT=3001`
- O termina el proceso que está usando el puerto 3000

### El modal no se abre
- Abre las DevTools (F12) y revisa la consola por errores
- Asegúrate de que la API está respondiendo correctamente

### La edición no guarda cambios
- Revisa la pestaña Network en DevTools
- Verifica que la respuesta del PUT sea 200
- Revisa la consola por mensajes de error

## Desarrollo

Para hacer cambios en el código:

1. Modifica los archivos en `controllers/`, `routes/` o `public/index.html`
2. Guarda los cambios
3. El servidor seguirá corriendo (recarga la página si cambias el frontend)
4. Para cambios en el backend, reinicia con `npm start`

## Dependencias Principales

- **Express**: Framework web
- **Mongoose**: ODM para MongoDB
- **CORS**: Soporte para requests desde otros orígenes
- **dotenv**: Manejo de variables de entorno
- **Bootstrap 5**: Framework CSS (CDN incluido en el HTML)

## Tecnología de Frontend

La interfaz utiliza **Bootstrap 5** integrado vía CDN con un tema oscuro personalizado:

- **Navbar Bootstrap**: Barra de navegación responsiva
- **Cards Bootstrap**: Componentes para mostrar Uma Musume
- **Modales Bootstrap**: Para ver detalles y editar información
- **Formularios Bootstrap**: Campos estilizados y accesibles
- **Grid System**: Diseño responsive con `.row` y `.col-*`
- **Botones Bootstrap**: Estilizados con colores personalizados (rosa y rojo)

### Personalización CSS

Todos los componentes de Bootstrap están personalizados con:
- Colores oscuros (#1a1a1a de fondo, #2a2a2a para cards)
- Acentos en rosa (#ff69b4)
- Transiciones suaves (0.3s)
- Efectos hover mejorados (elevación y escalado)
- Sombras sutiles para profundidad
- Tema consistente en todos los elementos

## Licencia

ISC

## Autor

Fred Haas Pacheco

---

¿Preguntas o problemas? Revisa la consola del navegador (F12) o del servidor para mensajes de error detallados.
