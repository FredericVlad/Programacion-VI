import Uma from '../models/uma.model.js';
import mongoose from 'mongoose';
import express from 'express';

export const getAllUmas = async (req, res) => {

    console.log('Obtiene todas las umas'.green);

    try {

        const umas = await Uma.find({}, {__v: 0});

        if(umas.length === 0){

            return res.status(404).json({

                msg: 'No se encontaron datos sobre la uma'

            });

        }

        return res.status(200).json({

            umas

        });

    }

    catch (error) {

        res.status(500).json({

            msg: 'Error al obtener objetos'

        });

    }

};


export const getUmaById = async (req, res) => {

    console.log('Uma por ID')

    const id = req.params.id;

    try {

        if(!mongoose.Types.ObjectId.isValid(id)){

            return res.status(400).json({

                msg: 'ID no válido'

            });

        }

        const uma = await Uma.findById(id);

        if(!uma){

            return res.status(404).json({

                msg: 'Uma no encontrada'

            });

        }

        return res.status(200).json({

            uma

        });

    }

    catch (error) {

        return res.status(500).json({

            msg: 'Error al obtener el ejemplo'

        });

    }

};


export const postUma = async (req, res) => {

    console.log('POST UMA');

    const body = req.body;

    const uma = new Uma(body);

    try {

        const validationError = uma.validateSync();

        if(validationError){

            const errorMessages = Object.values(validationError.errors).map(error => error.message);

            return res.status(400).json({

                error: errorMessages

            });

        }

        await uma.save();

        return res.status(201).json({

            uma

        });

    }

    catch (error) {

        return res.status(500).json({

                msg: 'Error al guardar la uma'

        });

    }

};


export const putUma = async (req, res) => {

    const id = req.params.id;

    const body = req.body;

    try {

        if(!mongoose.Types.ObjectId.isValid(id)){

            return res.status(400).json({

                msg: 'ID no válido'

            });

        }

        const uma = await Uma.findByIdAndUpdate(id, body, {new: true, runValidators: true});

        if(!uma){

            return res.status(404).json({

                msg: 'Ejemplo no encontrado'

            });

        }

        return res.status(200).json({

            uma

        });

    }

    catch (error) {

        return res.status(500).json({

            msg: 'Error al actualizar información sobre la uma'

        });

    }

};


export const deleteUma = async (req, res) => {

    console.log('DELETE EJEMPLO');

    const id = req.params.id;

    try {

        if(!mongoose.Types.ObjectId.isValid(id)){

            return res.status(400).json({

                msg: 'ID no válido'

            });

        }

        const uma = await Uma.findByIdAndDelete(id);

        if(!uma){

            return res.status(404).json({

                msg: 'Uma no encontrada'

            });

        }

        return res.status(200).json({

            msg: 'Uma eliminada correctamente',
            uma

        })

    }

    catch (error) {

        return res.status(500).json({

            msg: 'Error al eliminar la uma'

        });

    }

};