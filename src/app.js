require("./db/connection");
const yargs = require("yargs");
const { addBook, findAllBooks, findBook, updateBook, deleteBook } = require("./book/book.function");
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
        else if (args.findBook) {
            const findObj = {title: args.title}
            await findBook(findObj);
        }
        else if (args.update) {
            const filter = {id: args.id}
            const updateObj = {updateKey: args.key, updateValue: args.value}
            await updateBook(updateObj, filter);
        }
        else if (args.delete) {
            const deleteObj = {id: args.id}
            await deleteBook(deleteObj);
        }
        else {
            console.log("Incorrect command")
        }
    } catch (error) {
        console.log(error)
    }
}

app(yargs.argv);