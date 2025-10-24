import mongoose from 'mongoose';

let isConnected = false;

const conectarAMongoDB = async () => {

    if(isConnected){

        console.log('Ya estamos conectados a MongoDB'.green);
        return;

    }

    try {

        await mongoose.connect(process.env.MONGO_URI);
        isConnected = true;
        console.log('Conectados a MongoDB'.blue);

    }

    catch (error) {

        console.log('Error conectando a MongoDB: '.red, error);

    }

}

const db = mongoose.connection;

db.on('error', (error) => {

    isConnected = false;
    console.log('Error en la conexión a MongoDB: '.red, error);

});

db.once('open', () => {

    isConnected = true;

});

db.on('disconnected', () => {

    isConnected = false;
    console.log('Desconectado de MongoDB'.yellow);

});

process.on('SIGINT', async () => {

    await mongoose.connection.close();
    console.log('MongoDB desconectado'.yellow);
    process.exit(0);

});

export { conectarAMongoDB, isConnected };