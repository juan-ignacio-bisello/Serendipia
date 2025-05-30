const { response } = require("express");
const { validationResult } = require('express-validator');


const createUser = (req, res = response ) => {

    const { name, email, password } = req.body;
    const errors = validationResult(req);

    // Check for validation errors
    if ( !errors.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped(),
        });
    }

    return res.json({
        ok: true,
        msg: 'register',
        name,
        email,
        password,
    });
};

const loginUser = (req, res = response) => {

    const { email, password } = req.body;

    res.json({
        ok: true,
        msg: 'login',
        email,
        password,
    });
};

const renewToken = (req, res) => {
    res.json({
        ok: true,
        msg: 'renew',
    });
};

module.exports = {
    createUser,
    loginUser,
    renewToken,
}