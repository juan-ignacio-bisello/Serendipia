const { Schema, model } = require('mongoose');
// Este modelo define la estructura de los documentos de ropa en la base de datos MongoDB
// utilizando Mongoose. Incluye campos para nombre, descripción, precio, categoría, tamaño,
// URL de imagen y stock, con validaciones adecuadas para cada campo.

const ClothesSchema = Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price must be a positive number']
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
        enum: ['Remeras', 'Pantalones', 'Buzos', 'Camperas'], // categorías predefinidas
        trim: true
    },
    size: {
        type: String,
        required: [true, 'Size is required'],
        enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], // tamaños predefinidos
        trim: true
    },
    images: [{
        url: String,
        public_id: String,
    }],
    stock: {
        type: Number,
        required: [true, 'Stock is required'],
        min: [0, 'Stock must be a non-negative number']
    },

});

module.exports = model('Clothes', ClothesSchema);