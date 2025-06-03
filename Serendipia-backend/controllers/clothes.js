
// Controlador para manejar las operaciones relacionadas con la ropa
// Este controlador se encarga de las operaciones CRUD para la ropaconst { response } = require("express");

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
    const { name, price, stock, category, image } = req.body;

    try {
        const newClothes = new Clothes({ name, price, stock, category, image });
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

const updateStockClothes = async (req, res = response) => {
    const { id } = req.params;
    const { stock } = req.body;

    try {
        const clothes = await Clothes.findById(id);
        if (!clothes) {
            return res.status(404).json({
                ok: false,
                msg: 'Ropa no encontrada'
            });
        }
        clothes.stock = stock;
        await clothes.save();
        res.status(200).json({
            ok: true,
            clothes
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error al actualizar el stock de la ropa',
            error: error.message || 'Error inesperado'
        });
    }
}

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
    updateStockClothes,
    deleteClothes 
};