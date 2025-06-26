const express = require('express');
const mustacheExpress = require('mustache-express');
const session = require('express-session');
const db = require('./db');
const berganotaRouters = require('./routes/berganotaRoutes');

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

app.use('/', berganotaRouters);

db.sync(()=> {console.log('Banco de dados conectado!')});

app.listen(PORT, () => console.log(`Conectado na porta ${PORT}`))