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
        req.session.user = user;
        req.session.remember = remember;
        req.session.authorization = true;
        res.redirect('/home');
    }
    else{
        let erro = true;
        res.render('index.html', {erro})
    }
}

const sair = (req, res) => {
    if(req.session.remember == false){
        req.session.destroy();
    }
    
    res.redirect('/');
}

const verificarAutenticacao = (req, res, next) => {
    if(req.session.authorization){
        console.log('usuário autorizado');
        next();
    }
    else{
        console.log('usuário NÃO autorizado');
        res.redirect('/');
    }
}

module.exports = {
    auth,
    sair,
    verificarAutenticacao
}