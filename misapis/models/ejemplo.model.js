import mongoose from "mongoose";

const ejemploSchema = new mongoose.Schema({

    nombre: {

        type: String,
        required: true

    },

    desarrolladora: {

        type: String,
        required: true

    },

    año_de_salida: {

        type: Number,
        required: true

    },

    numero_de_jugadores: {

        type: Number,
        required: false

    },

    genero: {

        type: String,
        required: false

    },

    consolas: {

        type: [String],
        required: true

    }

});

const Ejemplo = mongoose.model('Ejemplo', ejemploSchema);

export default Ejemplo;