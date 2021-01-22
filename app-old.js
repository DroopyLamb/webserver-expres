// Creación de un servidor sin librerías

const http = require('http');


//Creamos el servidor
http.createServer((req, res) => {
        res.writeHead(200, { 'Content-type': 'application/json' });
        let salida = {
            nombre: 'Saul',
            edad: 21,
            url: req.url
        }
        res.write(JSON.stringify(salida)); //Salida json
        res.end();
    })
    .listen(8080);

console.log('Escuchando en el puerto 8080');