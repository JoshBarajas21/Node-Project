//1. Importanto el modulo de Node
//http
import http from 'http';
import path from 'path';

//usando commonjs en package
//let http = require('http');

/* Usando el scope global */
global["__dirname"] = path.dirname(new URL(import.meta.url).pathname);
global["__filename"] = path.join(path.basename(new URL(import.meta.url).pathname));

//path.join, es para que sea multiplataforma

//2. Crear el servidor
//la siguiente constante es el carro listo
const server = http.createServer( ( req, res )=> {
    //Toda la lógica del server
    // 1. Respondiendo al cliente (res)
    /* res.write("Hello from the Joshua's server ...  \n"); */
    /* Funcionan con commonjs, si usamos module, tendremos que usar el scope global */
/*     res.write(`__dirname: ${__dirname} \n`);
    res.write(`__filename: ${__filename} \n`); */

    res.setHeader('Content-Type', 'text/html');
    res.write("<html>");
    res.write("<head>");
    res.write("<title> My App </title>");   
    res.write("</head>");
    res.write("<body>")
    res.write("<h1> Hello from my server ... </h1>")
    res.write("</body>")
    res.write("</html>");
    console.log("---------------------------------")
    /* console.log(req) */

    /* console.log(`📣 CLIENT - REQUEST: ${req.method} ${req.url}`) */
    console.log(`📣 Contestando recurso: ${req.method} ${req.url}`)
    
    //2. Cerrar la conexión
    console.log(`📣 Cerrando la conexión...`)
    res.end();
} ); //const porque no va a cambiar el valor

//3. Arrancando el servidor
/* server.listen( <puerto>, <IP>, <callback>) */
server.listen( 3000, "0.0.0.0", ()=>{
    console.log(" 💘 Servidor Escuchando en http://localhost:3000")
});