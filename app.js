//Ejecutando express.
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});
app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
})

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html');
})


app.get('/productos', (req, res) => {
    res.senFile('Página productos');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
});

app.get('/contacto', (req, res) => {
    res.sendFile(__dirname + '/views/contacto.html');
});

////Este comodin del asterisco va al ultimo. Siempre!. Las rutas van en orden.
app.get('*', (req, res) => {
    res.status(404).send('Esa pagina no existe');
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});