const hbs = require('hbs');
require('./hbs/helpers/helpers');
const express = require('express');

// Declara una variable que es el 
// producto de la librería express
const app = express();
const port = process.env.PORT || 3000;
//Middlewares

//Middleware para archivos estáticos
app.use(express.static(__dirname + '/public'));
// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

// Solicitud get cuando el path sea
// una barra diagonal
app.get('/', (req, res) => {
    res.render('home.hbs', {
        nombre: 'sAul',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        anio: new Date().getFullYear()
    });
});



// Puerto
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});