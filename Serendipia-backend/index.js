const express = require('express');
require('dotenv').config(); 
const cors = require('cors');
const fileUpload = require('express-fileupload');
const path = require('path');

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

// Servir archivos estáticos del frontend
app.use(express.static( 'public' ) );

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// Resto de rutas (API)
app.use('/api/auth', require('./routes/auth'));
app.use('/api/clothes', require('./routes/clothes'));

// Fallback a React (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join( __dirname, 'public/index.html'));
});



// Escuchar peticiones
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Servidor backend escuchando en http://localhost:${port}`);
});