import { f_registrarUser, f_logueoUser } from "./helpers_usuarios.js";


const registrarUsuario = ()=>{
    registrarUser.addEventListener("click", f_registrarUser)
}

const logueoUsuario = () => {
    envioForm.addEventListener("click", f_logueoUser)
}

export { registrarUsuario, logueoUsuario }