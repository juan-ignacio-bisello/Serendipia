const express = require('express');
require('dotenv').config(); 
const cors = require('cors');
const fileUpload = require('express-fileupload');

// BD
const { dbConnection } = require('./DB/config');

// Crear servidor express
const app = express();


// Conectar a la base de datos
dbConnection();

// CORS
app.use(cors());


// middleware global
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/',
  createParentPath: true,
}));


// Directorio publico
app.use( express.static('public') );

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// Rutas
app.use( '/api/auth', require('./routes/auth') );

app.use( '/api/clothes', require('./routes/clothes') );


// Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor en ${ process.env.PORT }`);
})