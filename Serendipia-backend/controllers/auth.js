const { response } = require("express");
const User = require('../models/UserModel');
// Controlador de autenticación para manejar el registro, inicio de sesión y renovación de token
// Este controlador se encarga de las operaciones relacionadas con la autenticación de usuarios
// como el registro, inicio de sesión y renovación de token JWT.


const createUser = async(req, res = response ) => {

    const { name, email, password } = req.body;

    try {

        const user = new User({ name, email, password });
        await user.save();

        return res.status(201).json({
            ok: true,
            msg: 'register',
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error al crear el usuario',
            error: error.message || 'Error inesperado'
        });
    }
    
};

const loginUser = (req, res = response) => {

    const { email, password } = req.body;

    res.status(200).json({
        ok: true,
        msg: 'login',
        email,
        password,
    });
};

const renewToken = (req, res) => {
    res.status(200).json({
        ok: true,
        msg: 'renew',
    });
};

module.exports = {
    createUser,
    loginUser,
    renewToken,
}