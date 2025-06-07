const { Schema, model } = require('mongoose');
// Este modelo define la estructura de los documentos de usuario en la base de datos MongoDB
// utilizando Mongoose. Incluye campos para nombre, correo electrónico, contraseña, imagen (opcional)
// y validaciones adecuadas para cada campo, como requisitos de formato y longitud.

const UserSchema = Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        match: [/\S+@\S+\.\S+/, 'Email format is invalid'] // expresión regular básica para validar email
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must be at least 8 characters long'],
        validate: [
            {
                validator: function (value) {
                    return /[A-Z]/.test(value); // al menos una mayúscula
                },
                message: 'Password must contain at least one uppercase letter'
            },
            {
                validator: function (value) {
                    return /[a-z]/.test(value); // al menos una minúscula
                },
                message: 'Password must contain at least one lowercase letter'
            },
            {
                validator: function (value) {
                    return /[0-9]/.test(value); // al menos un número
                },
                message: 'Password must contain at least one number'
            },
            {
                validator: function (value) {
                    return /[\W_]/.test(value); // al menos un carácter especial
                },
                message: 'Password must contain at least one special character'
            }
        ]
    },
    role: {
        type: String,
        enum: ['USER', 'authenticated-ADMIN'], // roles permitidos
        default: 'USER' // rol
    },
    img: {
        // opcional 
        type: String
        //TODO: validar que sea una URL, si se usa
    }
});

module.exports = model('User', UserSchema);
