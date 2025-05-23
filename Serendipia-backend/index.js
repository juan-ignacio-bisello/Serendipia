
const express = require('express');
require('dotenv').config(); 

// Crear servidor express
const app = express();


// Directorio publico
app.use( express.static('public') );

// Rutas
// todo: crear rutas
app.use( '/api/auth', require('./routes/auth') );


// Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor en ${ process.env.PORT }`);
})