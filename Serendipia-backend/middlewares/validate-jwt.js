const { response, request } = require("express");
const jwt = require('jsonwebtoken');

const validateJWT = (req = request, res = response, next) => {
    
    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No token provided in the request'
        });
    }

    try {

        const { uid, name, role } = jwt.verify(token, process.env.JWT_SECRET);
        req.uid = uid;
        req.name = name;
        req.role = role;

        next();

    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Invalid token',
            error: error.message || 'Unexpected error'
        });
    }
}

module.exports = {
    validateJWT
};