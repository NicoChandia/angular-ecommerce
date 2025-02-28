const express = require('express');
const path = require('path');
const app = express();

// Sirve los archivos estáticos de la carpeta dist
app.use(express.static(path.join(__dirname, 'dist/angular-ecomm/browser')));

// Maneja todas las rutas para SPAs
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/angular-ecomm/browser/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});