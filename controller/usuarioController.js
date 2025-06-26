const Usuario = require('../models/usuarioModel');

const getLogin = (req, res) => {
    res.render('index.html');
}

const getRegister = (req, res) => {
    res.render('cadastro.html');
}

//post create usuario
function postCadastrarUsuario(req, res){
    const dados_usuario = req.body;
    Usuario.create(dados_usuario).then(()=>{
        res.redirect('/inicio');
    });
}

//get info do profile - TODO: fazer um post para poder editar
const getProfile = (req, res) => {
    res.render('profile.html');
}

//deslogar
function sair(req, res){
    req.session.destroy();
    res.redirect('/');
}

//funcao pra autenticação do usuario
async function postAutenticarUsuario(req, res){

    const usuario = await Usuario.findOne({
        where: {
            email: req.body.email,
            senha: req.body.senha
        }
    });

    if(usuario !== null){
        console.log('USUÁRIO AUTENTICADO');
        req.session.autorizado = true;
        req.session.usuario = usuario;
        res.redirect('/inicio');
    }
    else{
        res.redirect('/?erro_login=1');
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