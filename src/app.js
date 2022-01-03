require("./db/connection");
const yargs = require("yargs");
const { addBook, findAllBooks, findBook, updateBook, deleteBook } = require("./book/book.function");
const sequelize = require("sequelize");
const { addReader } = require("./reader/reader.function");

const app = async (args) => { 
    try {
        //adds a book to "Book" table:
        if (args.addBook) {
            const bookObj = {
                title: args.title,
                author: args.author
            };
            await addBook(bookObj);
        }
        //adds a reader to "Reader" table:
        else if (args.addReader) {
            const readerObj = {
                name: args.name,
                faveBook: args.faveBook,
                nowReading: args.nowReading
            };
            await addReader(readerObj);
        }


        else if (args.listBooks) {
            await listBooks();
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