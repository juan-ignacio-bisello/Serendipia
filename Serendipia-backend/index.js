const express = require('express');
require('dotenv').config(); 
const cors = require('cors');
// BD
const { dbConnection } = require('./DB/config');

// Crear servidor express
const app = express();


// Conectar a la base de datos
dbConnection();

// CORS
app.use(cors());

// Directorio publico
app.use( express.static('public') );

app.use( express.json() );
// Rutas
// todo: crear rutas
app.use( '/api/auth', require('./routes/auth') );

app.use( '/api/clothes', require('./routes/clothes') );


// Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor en ${ process.env.PORT }`);
})