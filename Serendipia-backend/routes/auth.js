/*
    Rutas de usuarios /api/auth
    host + /api/auth
*/
const { Router } = require('express');
const { check } = require('express-validator');

const router = Router();

const { createUser, loginUser, renewToken } = require('../controllers/auth');
const { validationfields } = require('../middlewares/field-validator');
const { validateJWT } = require('../middlewares/validate-jwt');

router.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'get auth',
    });
});

router.post('/',
    [
        check('email', 'Valid email is required').not().isEmpty(),
        check('email', 'Invalid email format').isEmail(),
        check('password', 'Password is required').not().isEmpty(),
        validationfields
    ], 
    loginUser 
);

router.post(
    '/new', 
    [
        check('name', 'Name is required').not().isEmpty(),

        check('email', 'Invalid email format').isEmail(),
        check('email', 'Valid email is required').not().isEmpty(),

        check('password', 'Password is required').not().isEmpty(),
        check('password')
            .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
            .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter')
            .matches(/[a-z]/).withMessage('Password must contain at least one lowercase letter')
            .matches(/[0-9]/).withMessage('Password must contain at least one number')
            .matches(/[\W_]/).withMessage('Password must contain at least one special character'),
            
        validationfields
    ],
    createUser 
);


router.get(
    '/renew', validateJWT, renewToken
);


module.exports = router;