const express = require('express');
const mustacheExpress = require('mustache-express');
const session = require('express-session');
const db = require('./db');
const berganotaRoutes = require('./routes/berganotaRoutes');
const usuarioRoutes = require ('./routes/usuarioRoutes');
const authRoutes = require('./routes/authRoutes');
const noteRoutes = require('./routes/noteRoutes');

const app = express();
PORT=8080

app.engine('html', mustacheExpress());
app.set('view-engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.use(session({
    secret: 'secret-token',
    name: 'sessionId',
    resave: false,
    saveUninitialized: false
}))

app.use('/', berganotaRoutes);
app.use('/', usuarioRoutes);
app.use('/', authRoutes);
app.use('/', noteRoutes);

db.sync(()=> {console.log('Banco de dados conectado!')});

app.listen(PORT, () => console.log(`Conectado na porta ${PORT}`))