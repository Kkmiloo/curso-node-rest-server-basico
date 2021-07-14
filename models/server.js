const express = require("express");
const cors = require('cors')

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.userPath = '/api/users'

    //middlewares: funciones que siempre se ejecutaran
    this.middelwares();
    //Rutas de mi aplicacion
    this.routes();
  }

  middelwares() {
    // CORS
    this.app.use(cors())

    // Lectura y parseo del body
    this.app.use(express.json());

    // Directorio publico
    this.app.use(express.static("public"));
  }

  routes() {

    this.app.use(this.userPath, require('../routes/user.route'));

  }

  listen() {
    this.app.listen(this.port);
  }
}

module.exports = Server;
