const Usuario = require('../model/usuario');

const cadastrarUsuario = (req, res) => {
    let usuario = {
        nome: req.body.nome,
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

const editUsuario = (req, res) => {
    const usuario = req.session.usuario;
    const currentPass = req.body.oldPassword;
    const newPass = req.body.newPassword == "" ? currentPass : req.body.newPassword;

    if(currentPass != req.session.usuario.senha){
        let erro = true;
        res.render('profile.html', {erro, usuario});
        return
    }

    let userUpdated = {
        nome: req.body.nome,
        email: req.body.email,
        senha: newPass
    }
   
    Usuario.findOne({
        where: {
            id: req.params.id,
        }
    }).then((usuario) => {
        req.session.usuario.senha = newPass;
        usuario.update(userUpdated);
    }).then(()=>{
        res.redirect('/home');
    })
}

module.exports = {
    cadastrarUsuario,
    editUsuario
}