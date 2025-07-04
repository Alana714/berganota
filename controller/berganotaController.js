const Nota = require('../model/nota');

const getIndex = (req, res) => {
    res.render('index.html');
}

const getRegister = (req, res) => {
    res.render('cadastro.html');
}

const getHome = (req, res) => {
    usuario = req.session.usuario

    Nota.findAll({
        where: {
            idAutor: req.session.usuario.id,
        }
    }).then((notas) => {
        const notasFormatadas = notas.map(nota => {
            const notaJson = nota.toJSON();
            if (notaJson.createdAt) {
                notaJson.dataFormatada = notaJson.createdAt.toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: '2-digit'
                });
            }
            return notaJson;
        });
        res.render('home.html', {notas: notasFormatadas, usuario});
    }).catch((err)=>{
        res.render('home.html', {err});
    })
}

const getProfile = (req, res) => {
    res.render('profile.html');
}

const getTest = (req, res) => {
    res.render('teste.html');
}

const postNota = (req, res) => {
    let nota = {
        idAutor: req.session.usuario.id,
        title: req.body.titulo,
        body: req.body.conteudo,
    }

    Nota.create(nota).then(()=>{
        res.redirect('/home');
    })
}

const deleteNota = (req, res) => {
    let id_nota = req.params.id;
    Nota.findOne({
        where:{
            id: id_nota,
        }
    }).then((dados_nota)=>{
        dados_nota.destroy().then(()=>{
            res.redirect('/home');
        });
    });
}

const editNota = (req, res) => {
    const nota = req.body;

    Nota.findOne({
        where:{
            id: req.params.id,
        }
    }).then((notaAntiga)=>{
        notaAntiga.update(nota).then(()=>{
            res.redirect('/home');
        });
    }); 
}

module.exports = {
    getHome,
    getRegister,
    getIndex,
    getProfile,
    getTest,
    postNota,
    deleteNota,
    editNota,
}