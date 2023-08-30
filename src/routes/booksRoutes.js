const books = require("../utils/library");
//------------------------------------------
const express = require("express");

const router = express.Router();//instancia de express router


//definimos los metodos y en que endpoints puede atender 
//asi como con la constante app, solo que aquí cuando hablamos de ruta raiz
//no nos referimos "http:localhost:3000/" sino a "http:localhost:3000/books"
//esto debido a que lo definimos en el archivo app.js

//-------------------------------
router.get("/", (req, res) => {
  res.status(200).send(books);
});


//-------------------------------
//path params ==> ruta dinamica, es decir que podemos definir una ruta
//con datos que pueden variar, esto nos ayuda a acceder a recursos de forma a precisa

router.get("/:bookId", (req, res) => {
  //aceddemos a ese id que llega por params a traves del objeto "res"
  const id = req.params.bookId;//si definimos que el path param se llama bookId, accedemos a el por ese nombre
  const book = books.find((e) => e.id == id);
  res.status(200).send(book);
});

//-------------------------------
router.post("/", (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.send(books);
});


//-------------------------------
router.put("/:bookId", (req, res) => {
    const id = req.params.bookId
    const modifyBook = req.body;
    const indexBook = books.findIndex((e)=>e.id==id)
    books[indexBook] = modifyBook
    res.send(books[indexBook]);
  });

//-------------------------------
router.delete("/:bookId", (req, res) => {
    const id = req.params.bookId
    const indexBook = books.findIndex((e)=>e.id==id)
    const deleteBook = books.splice(indexBook,1)
    res.send({deleteBook})
});

module.exports = router;
