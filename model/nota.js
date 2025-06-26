const Sequelize = require('sequelize');
const database = require('../db');

const Nota = database.define('nota', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    idAutor: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    body: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

module.exports = Nota;