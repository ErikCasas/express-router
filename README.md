# express-router

##### ¡Bienvenido@s a _express router_!

Express es una poderosa librería que simplifica enormemente la creación de servidores web. Pero eso no es todo, Express también nos brinda una serie de herramientas que hacen que el enrutamiento, un aspecto esencial de cualquier aplicación web, sea mucho más sencillo y estructurado.

En este documento, exploraremos cómo Express puede hacer que el enrutamiento en tu aplicación sea más eficiente y comprensible. También abordaremos conceptos fundamentales como los path params (parámetros de ruta), que son una parte fundamental de cómo Express maneja las solicitudes a traves de rutas dinamicas.

#### rutas en express

El enrutamiento en Express es una parte esencial de la construcción de aplicaciones web. Nos permite manejar peticiones dirigidas a diferentes URLs, respondiendo de manera adecuada según los distintos métodos HTTP, como GET, POST, PUT y DELETE.

```javascript
app.get("/ruta",(req,res)=>{
    res.status(201).send("respuesta de tu ruta")
})
```

- **app.get**: Utilizamos este método para manejar las solicitudes HTTP de tipo GET. Pero Express también admite métodos como **app.post, app.put y app.delete** para manejar otros tipos de solicitudes.

- **"/ruta"**: Esta es la parte de la URL que estamos atendiendo. En este caso, estamos respondiendo a solicitudes dirigidas a **/ruta**.

- **(req, res) => {...}**: Esta es una función de controlador que se ejecutará cuando se reciba una solicitud a la ruta especificada. req es el objeto de solicitud que contiene información sobre la solicitud entrante, mientras que res es el objeto de respuesta que utilizamos para enviar datos de vuelta al cliente.


De este modo tenemos la creacion de una ruta en express, que atendera solicitudes de tipo GET, en donde el string "/ruta" es el prefijo de la ruta de nuestro servidor, es decir que para acceder al recurso que nos da la ruta definida, seria con la url => _http://localhost:3000/ruta_

**IMPORTANTE:** al momento de crear y definir nuestros endpoints, estos deben ser descriptivos con respecto a recurso web que sirve al cliente 


