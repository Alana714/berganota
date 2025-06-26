const Usuario = require('../model/usuario');

const auth = async (req, res) => {
    const remember = req.body.remember !== undefined;

    const user = await Usuario.findOne({
        where: {
            email: req.body.email,
            senha: req.body.senha,
        }
    });

    if(user != null){
        if(remember){
            req.session.user = user;
        }
        
        req.session.authorization = true;
        res.redirect('/home');
    }
    else{
        let erro = true;
        res.render('index.html', {erro})
    }
}

const sair = (req, res) => {
    req.session.destroy();
    res.redirect('/');
}

module.exports = {
    auth,
    sair,
}