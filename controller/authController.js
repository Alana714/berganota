const Usuario = require('../model/usuario');

const auth = async (req, res) => {
    const user = await Usuario.findOne({
        where: {
            email: req.body.email,
            senha: req.body.senha,
        }
    });

    if(user != null){
        req.session.authorization = true;
        req.session.user = user;
        res.redirect('/home');
    }
    else{
        let erro = true;
        res.render('index.html', {erro})
    }
}

module.exports = {
    auth,
}