// function comprobarInputsRegistrar() {
//     let inputNombre = document.querySelector
// }

function noCamposVacios(form) {

    console.log(form.children[3])
    if (form.children[3] === undefined) {

        let mensaje = document.createElement("p");
        mensaje.innerHTML = "Los campos no pueden estar vacios";
        form.append(mensaje);
        // formRegistro.children[3]
    } else {
        let padre = form;
        let hijo = form.children[3];
        padre.removeChild(hijo);
    }
}


const f_registrarUser = async (e)=>{
    e.preventDefault();
    console.log('clico registro de usuario')
    // comprobarInputsRegistrar();
    let datosEnvio = {
        method:'POST',
        body: new FormData(formRegistro)
    }
    console.log(formRegistro.children[0].value != "")
    // console.log(datosEnvio.body);
    if (formRegistro.children[0].value != "" && formRegistro.children[1].value != ""){
    let envio = await fetch('/registrar',datosEnvio)
    let respuesta = await envio.json() // recibo a páxina que quero pintar
    
    console.log('resposta: ',respuesta)
    formRegistro.children[0].value = "";
    formRegistro.children[1].value = "";
    location.replace("./usuario");
} else {
    noCamposVacios(formRegistro);
}
    
}

const f_logueoUser = async (e) => {
    e.preventDefault();
    // new FormData(datosForm)
    

    console.log("clico logueo de usuario")
    noCamposVacios(datosForm)
    // let envio = await fetch("/lecturausuarios");
    // let respuesta = await envio.json();
    // console.log("desde f_logueo", respuesta);
    // location.replace("./usuario")
        
}

export {
    f_registrarUser, f_logueoUser
}