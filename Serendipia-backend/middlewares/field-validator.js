const { response } = require("express");
const { validationResult } = require("express-validator");


const validationfields = (req, res = response, next) => {
    
    const errors = validationResult(req);

    // Check for validation errors
    if ( !errors.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped(),
        });
    }

    next();
}

module.exports = {
    validationfields,
};