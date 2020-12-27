//const path = require('path');

module.exports = {
    index: (req, res) => {
        //Una vez que empezamos a usar ejs, la siguente linea no va, se reemplaza por render.
        // res.sendFile(path.join(__dirname, '/../views/index.html'));
        res.render('index/index.ejs');
    }
}