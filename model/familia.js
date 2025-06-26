const Sequelize = require('sequelize');
const database = require('../db');

const NotaFamiila = database.define('notaFamiila', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    idFamilia: {
        type: Sequelize.STRING,
        allowNull:false
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
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
    },
})

module.exports = NotaFamiila;