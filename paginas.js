const path = require("path");
const carpetaStatic2 = path.join(__dirname, "public/views/");

const paginaAdmin = (req,res) => {
    res.sendFile("admin.html", { root: carpetaStatic2 });
}

const paginaUsuario = (req,res) => {
    res.sendFile("usuario.html", { root: carpetaStatic2 });
}

module.exports = {
    paginaAdmin,
    paginaUsuario
}