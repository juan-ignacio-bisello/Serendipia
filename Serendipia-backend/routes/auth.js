/*
    Rutas de usuarios /api/auth
    host + /api/auth
*/
const { Router } = require('express');
const router = Router();

const { createUser, loginUser, renewToken } = require('../controllers/auth');

router.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'get auth',
    });
});

router.get('/renew', renewToken);

router.post('/', loginUser );

router.post('/new', createUser );


module.exports = router;