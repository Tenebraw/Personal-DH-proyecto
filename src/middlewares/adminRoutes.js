module.exports = (req, res, next) => {
    if (req.session.user == null || req.session.user && req.session.user.category !== 1) { //Ejemplo suponiendo que la categoria 1 sea el administrador.
        return res.redirect('/');
    }
    next();
}