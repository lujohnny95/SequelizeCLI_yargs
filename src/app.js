require("./db/connection");
const yargs = require("yargs");
const { addBook, findAllBooks, findBook, deleteBook } = require("./book/book.function");
const sequelize = require("sequelize");

const app = async (args) => {
    try {
        if (args.addBook) {
            const bookObj = {
                title: args.title,
                author: args.author
            };
            await addBook(bookObj);
        }
        else if (args.findAll) {
            await findAllBooks();
        }
        else if (args.findOne) {
            const findObj = {title: args.title}
            await findBook();
        }
        else if (args.updateBook) {
            const updateObj = {updateKey: args.key, updateValue: args.value}
            await updateBook();
        }
        else if (args.deleteBook) {
            const deleteObj = {title: args.title}
            await deleteBook();
        }
        else {
            console.log("Incorrect command")
        }
    } catch (error) {
        console.log(error)
    }
}

app(yargs.argv);