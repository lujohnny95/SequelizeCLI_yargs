const Book = require("./book.table");

//creates a book entry into DB:
exports.addBook = async (bookObj) => {
    try {
        await Book.sync();
        await Book.create(bookObj);
        console.log(`Successfully added ${bookObj.title} to the database.`)
    } catch (error) {
        console.log(error);
    }
};
//find all books in DB:
exports.findAllBooks = async () => {
    try {
        await Book.findAll()
        console.log(`Successfully accessed records.`)
    } catch (error) {
        console.log(error);
    }
};
//find a book by title:
exports.findBook = async(findObj) => {
    try {
        await Book.findOne(findObj)
        console.log(`${findObj.title} has been found in Book records.`)
    } catch (error) {
        console.log(error);
    }
};
//update a book by [key: value]:
exports.updateBook = async(updateObj, filter) => {
    try {
        await Book.update(
            { updateObj }, 
            { where: filter })
        console.log("This book has been update in Book records.")
    } catch (error) {
        console.log(error);
    }
};
//delete a book from DB
exports.deleteBook = async(deleteObj) => {
    try {
        await Book.destroy({where: deleteObj});
        console.log(`${deleteObj.id} has been removed from Book records.`)
    } catch (error) {
        console.log(error);
    }
};