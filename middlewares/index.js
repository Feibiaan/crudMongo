const { fLerDatos } = require("./lerDatos.js");
const { fBorrarDatos } = require("./borrarDatos.js");
const { fActualizarDatos } = require("./actualizarDatos.js");
const { registroUsuario } = require("./registroUsuarios.js");
const { fLeerUsuarios } = require("./leerUsuarios.js");









module.exports = { 
    fLerDatos,
    fBorrarDatos,
    fActualizarDatos,
    registroUsuario,
    fLeerUsuarios
 };