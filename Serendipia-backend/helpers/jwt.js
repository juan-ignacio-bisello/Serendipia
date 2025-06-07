const jwt = require('jsonwebtoken');
// Helper para generar un token JWT
// Este helper se encarga de generar un token JWT para el usuario autenticado
// Recibe el uid y el nombre del usuario, y devuelve una promesa que resuelve con el token generado


const generateJWT = (uid, name, role = 'USER') => {

    return new Promise((resolve, reject) => {

        const payload = { uid, name, role };
        
        jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '24h'
        }, (err, token) => {
            if (err) {
                console.error(err);
                reject('Error generating token');
            }
            else {
                resolve(token);
            }
        }
        );
    });
}

module.exports = {
    generateJWT
};