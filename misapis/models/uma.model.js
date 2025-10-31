import mongoose from "mongoose";

const umaSchema = new mongoose.Schema({

    nombre: {

        type: String,
        required: true

    },

    apodo: {

        type: String,
        required: false
    },

    genero: {

        type: String,
        required: true

    },

    fecha_nacimiento: {

        type: Number,
        required: false

    },

    numero_de_carreras: {

        type: Number,
        required: false

    },

    carreras_ganadas: {

        type: Number,
        required: false

    },

    carreras_perdidas: {

        type: Number,
        required: false

    },

    imagen: {

        type: String,
        required: false
    }

});

const Uma = mongoose.model('Uma', umaSchema);

export default Uma;