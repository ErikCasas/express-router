const express = require("express");
const booksRoutes = require("./routes/booksRoutes");
const users = require("./utils/users");

const app = express();

//-----------------------------------------

app.use(express.json()); //linea de código que me permite acceder al body

//inidicamos que en todas las rutas con prefijo de "/books" use las rutas
//que difinimos en booksRoutes.js

app.use("/books", booksRoutes);






//-----------------------------------------
//ejemplo de ruta con metodos encadenados
//-----------------------------------------
//esto es a traves de la propiedad "route", de este modo solo debemos definir la ruta
//y decir que metodos atendera

//BUENA PRACTICA: en caso de no tener que usar algo pero si debe estar ahi, poner al inicio de este "_"
//como con "_req"
app
  .route("/clients")
  .get((_req, res) => {
    res.send("peticion de tipo GET a la ruta clients");
  })
  .post((_req, res) => {
    res.send("peticion de tipo POST a la ruta clients");
  })
  .put((_req, res) => {
    res.send("peticion de tipo PUT a la ruta clients");
  })
  .delete((_req, res) => {
    res.send("peticion de tipo DELETE a la ruta clients");
  });

//CUIDADO: si bien este metodo de enrutamiento optimiza nuestr código
//en caso de que en cada metodo necesitamos de una cantidad considerable de
//lineas de codigo, esto puedo hacer que nuestro código sea sucio y dificil de entender

//-----------------------------------------

//ejemplos de rutas que cumplen con el CRUD que nos ayudaran en ejemplos futuros
//la explicacion de las rutas dinamicas esta en el archivo booksRoutes.js
//-----------------------------------------

//todos los usuarios en general
app.get("/users",(_req,res)=>{
    res.status(200).send(users)
})

//un usuario en especifico
app.get("/users/:userId",(req,res)=>{
    const id = req.params.userId
    const index = users.findIndex((user)=>user.id==id)
    res.status(200).send({user:users[index]})
})


app.post("/users",(req,res)=>{
   const newUser = req.body
   users.push(newUser)
   res.status(201).send("usuario creado")
})

app.put("/users/:userId",(req,res)=>{
   const id = req.params.userId
   const newInfo = req.body
   const index = users.findIndex((user)=>user.id==id)
   users[index]=newInfo
   res.status(200).send({modificado: users[index]})
})


app.delete("/users/:userId",(req,res)=>{
    const id = req.params.userId
    const index = users.findIndex((user)=>user.id==id)
    const deleteUser = users.splice(index, 1)
    res.status(200).send({deleteUser})
})



module.exports = app;
