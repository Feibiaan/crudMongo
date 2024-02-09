import { borrarDatos, crearContenidoEnSection, seleccionElementos, imxsGuardarOEditar } from "./helpers.js";

function preparandoDatos(datos) {

  crearContenidoEnSection(datos, "admin"); 
  borrarDatos(seleccionElementos('.borrar'));
  imxsGuardarOEditar('guardar');
  imxsGuardarOEditar('editar');
  // console.log(datos.documentos)
}//preparandoDatos(datos)


function pintandoDatosUsuario(datos) {
  crearContenidoEnSection(datos, "usuario");
}



async function preguntarDatos() {
  //let datosLeidos = await fetch("/lecturadatos");
  let datosLeidos = await fetch("/lecturadatos");
  let datosJson = await datosLeidos.json();
  // console.log('datos Json: ',datosJson)
  preparandoDatos(datosJson);
}

async function preguntarUsuarios() {
  //let datosLeidos = await fetch("/lecturadatos");
  let usuariosLeidos = await fetch("/lecturausuarios");
  let usuariosJson = await usuariosLeidos.json();
  // console.log('datos Json: ',usuariosJson);
  preparandoDatos(usuariosJson);
}

async function preguntarDatosUsuario() {
  //let datosLeidos = await fetch("/lecturadatos");
  let datosLeidos = await fetch("/lecturadatos");
  let datosJson = await datosLeidos.json();
  // console.log('datos Json: ',datosJson)
  pintandoDatosUsuario(datosJson);

}

export { preguntarDatos, preguntarUsuarios, preguntarDatosUsuario };
