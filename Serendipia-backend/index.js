
const express = require('express');
require('dotenv').config(); 
// BD
const { dbConnection } = require('./DB/config');

// Crear servidor express
const app = express();


// Conectar a la base de datos
dbConnection();

// Directorio publico
app.use( express.static('public') );

app.use( express.json() );
// Rutas
// todo: crear rutas
app.use( '/api/auth', require('./routes/auth') );


// Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor en ${ process.env.PORT }`);
})