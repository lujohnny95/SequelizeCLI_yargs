const Book = require("../book/book.table");
const Reader = require ("../reader/reader.table");
const sequelize = require("./connection");

const associations = () => {
    Book.belongsToMany(Reader, { through: "BookReaders" });
    Reader.belongsToMany(Book, { through: "BookReaders" });

    await sequelize.sync();
};

associations();