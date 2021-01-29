const jsonTable = require('../database/jsonTable');
const userModel = jsonTable('usersDataBase');
const userTokensModel = jsonTable('usersTokens');

module.exports = (req, res, next) => {

    //Si hay usuario en sesion
    if (req.session.user) { // Si existe un suario en sesion, asi como esta pasaselo a la vista.
        //Se lo paso a la vista
        res.locals.user = req.session.user;
        // O si tienen la cookie recordar
    } else if (req.cookies.userToken) {
        let userToken = userTokensModel.findByField('token', req.cookies.userToken);
        if (userToken) {
            let user = userModel.find(userToken.userId);
            if (user) {
                delete user.password;
                //Se lo paso a la session y a la vista
                req.session.user = user;
                res.locals.user = user;

            }

        }



    }
    next();
};