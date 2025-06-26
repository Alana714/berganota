//get notas
function getNotas(req, res){
    Notas.findAll().then((nota)=>{
        res.render('inicio.html', {nota});
    });
}

//post create notas
function postNotas(req, res){
    let dados_notas = req.body;
    let campos_invalidos = validarRequisicao(dados_notas);

    if(campos_invalidos.length == 0){
        Notas.create(dados_consulta).then(()=>{
            res.redirect('/inicio');
        });
    }
    else{
        res.render('inicio.html', {campos_invalidos, dados_consulta});
    }  
}

//get notas para editar
function getEditarNotas(req, res){
    let id_notas = req.params.id;
    Notas.findOne({
        where:{
            id: id_notas
        }
    }).then((dados_notas)=>{
        res.render('inicio.html', {dados_notas});
    }); 
    
}

function postEditarNota(req, res){
    let dados_notas = req.body;
    let campos_invalidos = validarRequisicao(dados_consulta);

    if(campos_invalidos.length == 0){
        Notas.findOne({
            where:{
                id: dados_notas.id
            }
        }).then((dados_notas2)=>{
            dados_notas2.update(dados_notas).then(()=>{
                res.redirect('/inicio');
            });
            
        }); 
    }
    else{
        res.render('inicio.html', {campos_invalidos, dados_notas});
    }
}

function getExcluirNota(req, res){
    let id_notas = req.params.id;
    Notas.findOne({
        where:{
            id: id_notas
        }
    }).then((dados_notas)=>{
        dados_notas.destroy().then(()=>{
            res.redirect('/inicio');
        });
    }); 
}

function validarRequisicao(dados_consulta){
    let campos_invalidos = [];

    if(dados_consulta.nome.length == 0){
        form_invalido = true;
        campos_invalidos.push("Nome");
    }
    if(dados_consulta.sobrenome.length == 0){
        form_invalido = true;
        campos_invalidos.push("Sobrenome");
    }
    if(dados_consulta.cpf.length == 0){
        form_invalido = true;
        campos_invalidos.push("CPF");
    }

    return campos_invalidos;
}

module.exports = {
    getNotas,
    postNotas,
    getEditarNotas,
    postEditarNota,
    getExcluirNota
}