const { read, write } = require ("../read-write.js");

const displayBooks = async (req, res) => {
    const data = await read("books.json");
    res.status(200).send(data);
}

const addBook = async (req, res) => {
    const newBook = await read("books.json");
    newBook.push(req.body);
    await write ("books.json", newBook);
    res.status(200).send("New book added!");
}

module.exports = {
    displayBooks,
    addBook,
}