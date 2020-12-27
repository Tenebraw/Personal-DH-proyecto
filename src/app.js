//Ejecutando express.
const express = require('express');
const app = express();
const path = require('path');

/*Configuracion*/
//Importante. Respetar siempre el orden de las siguientes lineas!!
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "../public")));
//app.use(express.static('public'));


//Rutas
const indexRoutes = require('./routes/index');
const productRoutes = require('./routes/products');
const usersRoutes = require('./routes/users');
app.use('/product/', productRoutes);
app.use('/', indexRoutes);
app.use('/', usersRoutes);


////Este comodin del asterisco va al ultimo. Siempre!. Las rutas van en orden.
app.get('*', (req, res) => {
    res.status(404).send('Esa pagina no existe');
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});