const express = require("express");
const books = require("../utils/library");

const router = express.Router();

router.get("/", (req, res) => {
  res.send(books);
});
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const book = books.find((e) => e.id == id);
  res.send(book);
});

router.post("/", (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.send(books);
});



router.put("/:id", (req, res) => {
    const id = req.params.id
    const modifyBook = req.body;
    const indexBook = books.findIndex((e)=>e.id==id)
    books[indexBook] = modifyBook
    res.send(books[indexBook]);
  });


router.delete("/:idBook", (req, res) => {
    const id = req.params.idBook
    const indexBook = books.findIndex((e)=>e.id==id)
    const deleteBook = books.splice(indexBook,1)
    res.send({deleteBook})
});

module.exports = router;
