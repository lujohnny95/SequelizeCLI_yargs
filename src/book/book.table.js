const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Book = sequelize.define("Book", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
    },
});

module.exports = Book;