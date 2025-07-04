// Controlador para manejar las operaciones relacionadas con la ropa
// Este controlador se encarga de las operaciones CRUD para la ropaconst { response } = require("express");

const { response } = require('express');
const Clothes = require('../models/ClothesModel');
const { cloudinariUploadImage } = require('../helpers/cloudinariUploadImage');



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

const getClotheById = async (req, res) => {
  const { id } = req.params;

  try {
    if (!id || id.length !== 24) {
      return res.status(400).json({ msg: 'ID inválido' });
    }

    const clothes = await Clothes.findById(id);

    if (!clothes) {
      return res.status(404).json({ msg: 'Producto no encontrado' });
    }

    res.status(200).json(clothes);

  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Error al obtener la ropa',
      error: error.message || 'Error inesperado'
    });
  }
};

const getClothesByCategory = async (req, res = response) => {

  const { category } = req.params;

  try {
    
    const clothes = await Clothes.find({ category });

    if (clothes.length === 0) {
      return res.status(404).json({
        ok: false,
        msg: `No se encontraron productos en categoria: ${ category }`
      });
    }
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

    const images = [];
    const files = req.files?.images;

    if ( files ) {

      const filesArray = Array.isArray( files ) ? files : [ files ];
      
      for ( const file of filesArray ) {
        const imageData = await cloudinariUploadImage( file );
        images.push( imageData );
      }
    }

    if ( images.length === 0 ) {
      return res.status(400).json({
        ok: false,
        msg: 'Debe subir al menos una imagen'
      });
    }


    const newClothes = new Clothes({
      name,
      description,
      price,
      stock,
      category,
      size,
      images 
    });

    await newClothes.save();

    res.status(201).json({
      ok: true,
      clothes: newClothes
    });
  } catch (error) {

    console.log('Error en createClothes: ', error.message );

    return res.status(500).json({
      ok: false,
      msg: 'Error al crear la ropa',
      error: error.message || 'Error inesperado'
    });
  }
};



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

    // Actualizar campos
    clothes.name = name || clothes.name;
    clothes.description = description || clothes.description;
    clothes.price = price ?? clothes.price;
    clothes.stock = stock ?? clothes.stock;
    clothes.category = category || clothes.category;
    clothes.size = size || clothes.size;

    // Actualizar imágenes si se suben nuevas
    if (req.files && req.files.length > 0) {
      // Borrar las anteriores en Cloudinary
      for (const image of clothes.images) {
        await cloudinary.uploader.destroy(image.public_id);
      }

      // Subir nuevas
      const newImages = [];
      for (const file of req.files) {
        const result = await cloudinary.uploader.upload(file.tempFilePath, {
          folder: 'serendipia'
        });
        newImages.push({ url: result.secure_url, public_id: result.public_id });
        fs.unlinkSync(file.tempFilePath);
      }

      clothes.images = newImages;
    }

    await clothes.save();

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
    getClotheById,
    getClothesByCategory,
    updateClothes,
    deleteClothes 
};