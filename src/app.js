//Ejecutando express. Requiriendo modulos necesarios.
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const auth = require('./middlewares/auth');

/*Configuracion*/
//Importante. Respetar siempre el orden de las siguientes lineas!!
app.use(express.static(path.join(__dirname, "../public")));
//
app.use(session({
    secret: 'Admin de grupos',
    resave: false, // no vuelve a guardar si no hay cambios
    saveUninitialized: true, // guarda sessiones aunque todavía no haya datos
}));
app.use(cookieParser());
app.use(auth);
//
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method')); // Para poder pisar el method Post


//Template Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); //Defino la ubicacion de la carpeta vistas.


//Rutas
const indexRoutes = require('./routes/index');
const productRoutes = require('./routes/products');
const usersRoutes = require('./routes/users');

app.use('/', indexRoutes);
app.use('/products', productRoutes);
app.use('/users', usersRoutes);


////Este comodin del asterisco va al ultimo. Siempre!. Las rutas van en orden.
app.get('*', (req, res) => {
    res.status(404).send('Esa pagina no existe');
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});

module.exports = app;