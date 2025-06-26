const Nota = require('../model/nota');

const getHome = (req, res) => {
    Nota.findAll = ({
        where: {
            idAutor: req.session.usuario.id,
        }
    }).then((notas)=>{
        res.render('home.html', {notas});
    }).catch((err)=>{
        res.render('home.html', {err});
    })
}

const getRegister = (req, res) => {
    res.render('cadastro.html');
}

const getIndex = (req, res) => {
    res.render('index.html');
}

const getProfile = (req, res) => {
    res.render('profile.html');
}

const getTest = (req, res) => {
    res.render('teste.html');
}

const postNotas = (req, res) => {
    let nota = {
        idAutor: req.session.usuario.id,
        title: req.body.titulo,
        body: req.body.conteudo,
    }

    Nota.create(nota).then(()=>{
        res.redirect('/home');
    })
}

module.exports = {
    getHome,
    getRegister,
    getIndex,
    getProfile,
    getTest,
    postNotas
}