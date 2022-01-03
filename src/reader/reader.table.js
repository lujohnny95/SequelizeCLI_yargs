const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Reader = sequelize.define("Reader", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    faveBook: {
        type: DataTypes.STRING,
    
    },
    nowReading: {
        type: DataTypes.STRING,
    },
});

module.exports = Reader;