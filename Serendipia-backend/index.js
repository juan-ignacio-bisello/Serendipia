const express = require('express');
require('dotenv').config(); 
const cors = require('cors');
const fileUpload = require('express-fileupload');
const path = require('path');
const Clothes = require('./models/Clothes');


// BD
const { dbConnection } = require('./DB/config');

// Crear servidor express
const app = express();


// Conectar a la base de datos
dbConnection();

// CORS
app.use(cors());

// Servir archivos estáticos del frontend
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// middleware global
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/',
  createParentPath: true,
}));

// Frontend estatico
app.use(express.static( 'public' ) );

// Resto de rutas (API)
app.use('/api/auth', require('./routes/auth'));
app.use('/api/clothes', require('./routes/clothes'));

// SITEMAP DINÁMICO
app.get('/sitemap.xml', async (req, res) => {
  try {
    res.header('Content-Type', 'application/xml');

    const products = await Clothes.find().select('_id updatedAt category');

    const categories = ['remeras', 'pantalones', 'buzos', 'camperas'];

    const categoryUrls = categories.map(cat => `
      <url>
        <loc>https://serendipia.onrender.com/categoria/${cat}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `).join('');

    const productUrls = products.map(prod => {
      const lastmod = prod.updatedAt.toISOString();
      return `
        <url>
          <loc>https://serendipia.onrender.com/producto/${prod._id}</loc>
          <lastmod>${lastmod}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.7</priority>
        </url>
      `;
    }).join('');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

        <url>
          <loc>https://serendipia.onrender.com/</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>daily</changefreq>
          <priority>1.0</priority>
        </url>

        <url>
          <loc>https://serendipia.onrender.com/productos</loc>
          <changefreq>daily</changefreq>
          <priority>0.9</priority>
        </url>

        ${categoryUrls}
        ${productUrls}

      </urlset>
    `;

    res.send(xml);

  } catch (error) {
    console.error("Error al generar sitemap:", error);
    res.status(500).send("Error generating sitemap");
  }
});



// Fallback a React (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// Escuchar peticiones
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Servidor backend escuchando en http://localhost:${port}`);
});