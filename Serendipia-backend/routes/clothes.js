//  Rutas de usuarios /api/clothes
//      host + /api/clothes

const { Router } = require('express');
const { check } = require('express-validator');
const { getClothes, createClothes, updateClothes, deleteClothes, getClothesByCategory, getClotheById } = require('../controllers/clothes');
const { validationfields } = require('../middlewares/field-validator');
const { validateJWT } = require('../middlewares/validate-jwt');
const { validateAdminRole } = require('../middlewares/validate-admin-role');

const router = Router();

router.get('/', getClothes);

router.get(
    '/category/:category',
    [
        check('category', 'Category is required').not().isEmpty(),
        validationfields
    ],
    getClothesByCategory
);

router.get(
    '/:id', 
    [
        check('id', 'Invalid ID format').isMongoId(),
        validationfields
    ],
    getClotheById
);

router.post(
    '/',
    validateJWT,
    validateAdminRole,
    [
        
        check('name', 'Name is required').not().isEmpty(),
        check('description', 'Description is required').not().isEmpty(),
        check('price', 'Price must be a number').isNumeric(),
        check('stock', 'Stock must be a number').isNumeric(),
        check('category', 'Category is required').not().isEmpty(),
        check('size', 'Size is required').not().isEmpty(),
        validationfields
    ],
    createClothes
);

router.put(
    '/:id',
    validateJWT,
    validateAdminRole,
    [
        check('id', 'Invalid ID format').isMongoId(),
        validationfields
    ],
    updateClothes
);

router.delete(
    '/:id',
    validateJWT,
    validateAdminRole,
    [
        
        check('id', 'Invalid ID format').isMongoId(),
        validationfields
    ],
    deleteClothes
);

module.exports = router;