const express = require("express");
const booksRoutes = require("./routes/booksRoutes")

const app = express();

app.use(express.json());//linea de código que me permite acceder al body 


app.use("/books", booksRoutes)

app.get("/", (_req, res) => {
  res.send("has solicitado informacion a la ruta raiz");
});

app.post("/", (_req, res) => {
  res.send("estas enviando informacion");
});

app.put("/", (_req, res) => {
  res.send("estas modificando informacion");
});

app.delete("/", (_req, res) => {
  res.send("estas eliminando informacion");
});

//---------------------------------------------------
//---------------------------------------------------

app
  .route("/clients")
  .get((_req, res) => {
    res.send("Estos son todos los clientes");
  })
  .post((_req, res) => {
    res.send("estas agregando un nuevo cliente");
  })
  .put((_req, res) => {
    res.send("estas modificando un cliente");
  })
  .delete((_req, res) => {
    res.send("estas eliminando un cliente");
  });

//---------------------------------------------------
//---------------------------------------------------


// app.get("/books",(req,res)=>{
//     res.send(books)
// })


// path params


// app.get("/books/:id",(req,res)=>{
// const id = req.params.id
//     const book = books.find((e)=>e.id==id)
//     res.send(book)
// })


// app.post("/books",(req,res)=>{
//     const newBook = req.body
//     books.push(newBook)
//     res.send(books)
// })

module.exports = app;
