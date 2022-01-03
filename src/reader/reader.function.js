const Reader = require("./reader.table");

//creates Reader table and adds readers to table:
exports.addReader = async (readerObj) => {
    try {
        await Reader.sync();
        await Reader.create(readerObj);
        console.log(`Successfully added ${readerObj.name} to the Reader records.`)
    } catch (error) {
        console.log(error);
    }
};
//find all readers in the table:
exports.listReaders = async () => {
    try {
        await Reader.findAll()
        console.log(`All Readers have been listed`)
    } catch (error) {
        console.log(error);
    }
};
//find a reader by name:
exports.findReader = async () => {
    try {
        await Reader.findOne()
        console.log(`${reader.title} has been found Reader records.`)
    } catch (error) {
        console.log(error);
    }
};
//update a book by [key: value]:
exports.updateReader = async(updateObj, filter) => {
    try {
        await Reader.update(
            { updateObj },
            { where: filter })
        console.log("This reader has been updated in Reader records.") 
    } catch (error) {
        console.log(error);
    }
};
//delete a reader from DB
exports.deleteBook = async(deleteObj) => {
    try {
        await Reader.destroy({where: deleteObj});
        console.log(`${deleteObj.id} has been removed from Reader records.`)
    } catch (error) {
        console.log(error);
    }
};
