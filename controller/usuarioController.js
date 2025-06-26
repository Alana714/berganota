const Usuario = require('../model/usuario');

const cadastrarUsuario = (req, res) => {
    let usuario = {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        email: req.body.email,
        senha: req.body.senha,
        confSenha: req.body.confsenha
    }

    if(usuario.senha != usuario.confSenha){
        let erroSenha = true;
        res.render('cadastro.html', {erroSenha, usuario})
    }
    else{
        Usuario.create(usuario).then(()=>{
            req.session.authorization = true;
            req.session.usuario = usuario;
            res.redirect('/home');
        }).catch((err)=>{
            console.log(err);
            let erroEmail = true;
            res.render('cadastro.html', {erroEmail, usuario});
        })
    }
}

function verificarAutenticacao(req, res, next){
    if(req.session.autorizado){
        console.log('usuário autorizado');
        next();
    }
    else{
        console.log('usuário NÃO autorizado');
        res.redirect('/');
    }
}

module.exports = {
    cadastrarUsuario,

}