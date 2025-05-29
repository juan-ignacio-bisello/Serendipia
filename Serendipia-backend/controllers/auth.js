const { response } = require("express");


const createUser = (req, res = response ) => {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            ok: false,
            msg: 'All fields are required',
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

    const { name, email, password } = req.body;

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