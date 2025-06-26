const getLogin = (req, res) => {
    res.render('index.html');
}

const getRegister = (req, res) => {
    res.render('cadastro.html');
}

const getIndex = (req, res) => {
    res.render('home.html');
    console.log(req.session.usuario);
}

const getProfile = (req, res) => {
    res.render('profile.html');
}

const getTest = (req, res) => {
    res.render('teste.html');
}

module.exports = {
    getLogin,
    getRegister,
    getIndex,
    getProfile,
    getTest
}