const { response } = require("express");
const bcrypt = require('bcryptjs');
const User = require('../models/UserModel');
const { generateJWT } = require("../helpers/jwt");
// Controlador de autenticación para manejar el registro, inicio de sesión y renovación de token
// Este controlador se encarga de las operaciones relacionadas con la autenticación de usuarios
// como el registro, inicio de sesión y renovación de token JWT.


const createUser = async(req, res = response ) => {

    const { name, email, password, role } = req.body;

    try {

        // Validar si el usuario ya existe
        let user  = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe con ese email'
            });
        }

        user = new User({ name, email, password });

        // Encriptar la contraseña
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);

        // Guardar el usuario en la base de datos
        await user.save();

        // Generar un token JWT
        const token = await generateJWT(user.id, user.name, user.role);
        
        return res.status(201).json({
            ok: true,
            uid: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
            token
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error al crear el usuario',
            error: error.message || 'Error inesperado'
        });
    }
    
};

const loginUser = async(req, res = response) => {

    const { email, password } = req.body;

    try {

        // Validar si el usuario existe
        let user  = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario o contraseña no son correctos'
            });
        }

        // Validar la contraseña
        const validPassword = bcrypt.compareSync(password, user.password);
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario o contraseña no son correctos'
            });
        }

        // Generar un token JWT
        const token = await generateJWT(user.id, user.name, user.role || 'USER');
        return res.status(200).json({
            ok: true,
            uid: user.id,
            name: user.name,
            role: user.role || 'USER',
            token
        });
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error al crear el usuario',
            error: error.message || 'Error inesperado'
        });
    }
    
};

const renewToken = async(req, res) => {
    const uid = req.uid;
    const name = req.name;
    const role = req.role || 'USER';

    const token = await generateJWT(uid, name, role);

    res.status(200).json({
        ok: true,
        uid,
        name,
        role,
        token
    });
};

module.exports = {
    createUser,
    loginUser,
    renewToken,
}