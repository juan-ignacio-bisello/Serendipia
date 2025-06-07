
// Controlador para manejar las operaciones relacionadas con la ropa
// Este controlador se encarga de las operaciones CRUD para la ropaconst { response } = require("express");

const { response } = require('express');
const fs = require('fs');
const path = require('path');
const Clothes = require('../models/ClothesModel');



const getClothes = async (req, res = response) => {
    try {
        const clothes = await Clothes.find();
        res.status(200).json({
            ok: true,
            clothes
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener la ropa',
            error: error.message || 'Error inesperado'
        });
    }
}

const createClothes = async (req, res = response) => {
    
    try {
 
        const { name, description, price, stock, category, size } = req.body;
        const image = req.file ? req.file.filename : null;

        const newClothes = new Clothes({ name, description, price, stock, category, image, size });
        await newClothes.save();

        res.status(201).json({
            ok: true,
            clothes: newClothes
        });
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error al crear la ropa',
            error: error.message || 'Error inesperado'
        });
    }
}


const updateClothes = async (req, res = response) => {
    const { id } = req.params;
    const { name, description, price, stock, category, size } = req.body;

    try {
        const clothes = await Clothes.findById(id);
        if (!clothes) {
            return res.status(404).json({
                ok: false,
                msg: 'Ropa no encontrada'
            });
        }

        // Guardar el nombre de la imagen anterior antes de actualizar
        const previousImage = clothes.image;

        // Actualizar campos
        clothes.name = name || clothes.name;
        clothes.description = description || clothes.description;
        clothes.price = price ?? clothes.price;
        clothes.stock = stock ?? clothes.stock;
        clothes.category = category || clothes.category;
        clothes.size = size || clothes.size;

        // Actualizar imagen si viene nueva
        if (req.file) {
            clothes.image = req.file.filename;
        }

        await clothes.save();

        // Eliminar imagen anterior si se subió una nueva
        if (req.file && previousImage && previousImage !== clothes.image) {
            const imagePath = path.join(__dirname, '../uploads/clothes/', previousImage);
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }
        }

        return res.status(200).json({
            ok: true,
            clothes
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Error al actualizar la prenda',
            error: error.message
        });
    }
};


const deleteClothes = async (req, res = response) => {

    const { id } = req.params;

    try {
        const clothes = await Clothes.findByIdAndDelete(id);
        if (!clothes) {
            return res.status(404).json({
                ok: false,
                msg: 'Ropa no encontrada'
            });
        }
        res.status(200).json({
            ok: true,
            msg: 'Ropa eliminada correctamente'
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error al eliminar la ropa',
            error: error.message || 'Error inesperado'
        });
    }
}



module.exports = {
    getClothes,
    createClothes,
    updateClothes,
    deleteClothes 
};