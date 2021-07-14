const { response ,request} = require("express");

const userGET = (req= request, res = response) => {

  const {q, nombre, apikey} = req.query;

  res.json({
    ok: true,
    msg: "get API - Controlador",
    q,
    nombre,
    apikey
  });
};

const userPOST = (req, res= response) => {

  const {name,edad} = req.body;

    res.json({
      ok: true,
      msg: "POST API - controlador",
      name,
      edad
    });
  }

const userPUT= (req, res= response) => {

  const id = req.params.id;

    res.json({
      ok: true,
      msg: "PUT API - controlador",
      id,
    });
  }
  
const userPATCH = (req, res= response) => {
    res.json({
      ok: true,
      msg: "PATCH API - controlador",
    });
  }

  const userDELETE = (req, res= response) => {
    res.json({
      ok: true,
      msg: "DELETE API - controlador",
    });
  }
module.exports = {
  userGET,
  userPOST,
  userPUT,
  userPATCH,
  userDELETE
};
