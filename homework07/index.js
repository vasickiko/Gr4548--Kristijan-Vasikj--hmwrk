const express = require("express");

const { displayBooks, addBook } = require ("./handler/handler.js");

const app = express();
app.use(express.json());

const booksMiddleware = (req, res, next) => {
    const pageCount = req.body.pageCount; 
    const publicationDate = Number(req.body.publicationDate);
    
    if(pageCount >= 300 && publicationDate <= 2000){
        console.log("Book has more than 300 pages and it's older than year 2000")
    };
    next();
};

app.get("/books", displayBooks);
app.post("/books", booksMiddleware, addBook);


port = 3000;
app.listen(port, ()=>{console.log(`Server started at port ${port}!`)});