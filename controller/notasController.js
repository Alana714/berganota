const Nota = require('../model/nota');

//get notas para editar
function getEditarNotas(req, res){
    let id_notas = req.params.id;
    Nota.findOne({
        where:{
            id: id_notas
        }
    }).then((dados_notas)=>{
        res.render('home.html', {dados_notas});
    }); 
    
}

function postEditarNota(req, res){
    let dados_notas = req.body;
    let campos_invalidos = validarNota(dados_consulta);

    if(campos_invalidos.length == 0){
        Nota.findOne({
            where:{
                id: dados_notas.id
            }
        }).then((dados_notas2)=>{
            dados_notas2.update(dados_notas).then(()=>{
                res.redirect('/home');
            });
            
        }); 
    }
    else{
        res.render('home.html', {campos_invalidos, dados_notas});
    }
}

function getExcluirNota(req, res){
    let id_notas = req.params.id;
    Nota.findOne({
        where:{
            id: id_notas
        }
    }).then((dados_notas)=>{
        dados_notas.destroy().then(()=>{
            res.redirect('/home');
        });
    }); 
}

module.exports = {
    getEditarNotas,
    postEditarNota,
    getExcluirNota
}