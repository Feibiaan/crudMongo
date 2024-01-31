import { _servindoOServer } from "./comunicacion/with_server.js";
import { metodos, objetoDatos } from "./datos.js";

function seleccionTarefaARealizar(id,tarefaArealizar,datos){
    let metodo = "";
    let endpoint = "";
    
    if(tarefaArealizar === 'borrar'){
        
        metodo = metodos.delete.metodo;
        endpoint = metodos.delete.endpoint;
    }
    if(tarefaArealizar === 'actualizar'){
        metodo = metodos.put.metodo;
        endpoint = metodos.put.endpoint;
    }
    _servindoOServer(id,metodo,endpoint,datos)
}


function borrarDatos(refLista){
    
    for(let refElemento of refLista){
        refElemento.addEventListener('click',(e) => {
        let id = e.target.parentElement.getAttribute('id');
        let tarefaArealizar = e.target.getAttribute('class');
                
        e.stopImmediatePropagation()
        seleccionTarefaARealizar(id,tarefaArealizar,null)
        })
    }
}

function crearContenidoEnSection(datos){
      //No map de datos.documentos.map ==> recorremos todos os datos que nos chegan da BBDD
      datos.documentos.map((documento) => {
  
      let _div = document.createElement("div");
      _div.setAttribute("id",`${documento._id}`);
      document.querySelector(".lista").append(_div);
      let _input = document.createElement("input");
      _input.setAttribute("readonly","true")
      _input.setAttribute("value",`${documento._id}`);
      let tamanhio = Object.keys(documento).length;
      let elementos = Object.values(documento);
      let claves = Object.keys(documento) // Claves para o introducir o atributo 'name'= valor
  
      //Este for realiza o recorrido dos valores da bbdd  
      for (let contador = 0; contador < tamanhio; contador++) {
        let _input2 = document.createElement("input");
        _input2.setAttribute("readonly","true")
        _input2.setAttribute("name",`${claves[contador]}`)
        _input2.setAttribute("value",`${elementos[contador]}`)
        if (Array.isArray(elementos[contador])) {

          // bucle sobre o array
          for (let contador2 = 0; contador2 < elementos[contador].length; contador2++) {
              let _input3 = document.createElement("input")
              _input3.setAttribute("readonly","true");
              _input3.innerHTML += elementos[contador][contador2];
              _input2.append(_input3);
          }
        }
        _input2.innerHTML += elementos[contador];
        _div.append(_input2);
      }
  
  
      let imax = ["borrar", "editar", "guardar"];
      for(let imaxenes of imax) {
  
        let imx = document.createElement("img");
        
        imx.setAttribute("src", `./assets/${imaxenes}.png`);
        imx.setAttribute("class", `${imaxenes}`);
        _div.append(imx);
      }
    });
}

const seleccionElementos = (etiqueta) => {
  const _etiqueta = document.querySelectorAll(etiqueta);
  // console.log(_etiqueta)
  return _etiqueta;
} 

function imxsGuardarOEditar(_imxs) {
  let nomes = []
  let _inputs = seleccionElementos('input');
      for(let _input of _inputs){
        _input.addEventListener("click",(e)=>{
         
          e.target.removeAttribute("readonly")
          nomes[0] = e.target.parentElement.getAttribute("id")
          nomes.push(e.target.getAttribute("name"))
          // console.log(e.target)
          e.target.style.backgroundColor = "blue";
          e.target.style.color = "white";
          // console.log(nomes, _input)
        })
      }

      // console.log(seleccionElementos('.guardar')[0].getAttribute('class'), _imxs)

      if(seleccionElementos('.guardar')[0].getAttribute('class') === _imxs) {
        let _imxsGuardar = seleccionElementos('.guardar');
      
      /**
       * for clave na preparación do dato para gardar o elemento de maneira individual
       * utiliza as variables dato e _imxGuardar.
       * 
       * No seu interior xenera o evento click, da imaxe 'guardar'
       */
      for(let contador = 0; contador < _imxsGuardar.length; contador ++){
        _imxsGuardar[contador].addEventListener("click",(e)=>{
          
          let idPulsado = e.target.parentElement.getAttribute('id')
          if(idPulsado == nomes[0]){
            
            let _inputArray = e.target.parentElement.querySelectorAll('input');//contén os campos dos elementos input do div clicado
            let tamanaioDiv = e.target.parentElement.querySelectorAll('input').length;
            let contador = 0;
            let tamanioNomes = nomes.length;
            
            for(contador;contador < tamanaioDiv; contador++){
              let contadorNomes = 1;

              for(contadorNomes; contadorNomes < tamanioNomes ;contadorNomes++){
               
                  let atributoName = _inputArray[contador].getAttribute(`name`);
                  let atributoModificado = nomes[contadorNomes];
                /*console.log('nomes[contadorNomes]: ',nomes[contadorNomes])  */
                if(atributoName == atributoModificado){
                   console.log('atributoName ',atributoName)
                  console.log('atributoModificado ',atributoModificado)
                  console.log('idPulsado: ',idPulsado)
                  console.log('_inputArray[contador].value ',_inputArray[contador].value) 
                  //dato[`${atributoName}`] = _inputArray[contador].value;
                  objetoDatos.campos[`${atributoName}`] = _inputArray[contador].value;
                  objetoDatos.id = idPulsado
                }
              }
             

            }
            

            console.log('dato: ', objetoDatos)
            //Agora enviamos o datos o back
            seleccionTarefaARealizar(objetoDatos.id,'actualizar',objetoDatos);
          }
        })
      }//for clave na preparación do dato para gardar o elemento de maneira individual

      }

      if(seleccionElementos('.editar')[0].getAttribute('class') === _imxs) {
        let _imxsEditar = seleccionElementos('.editar');
      for(let contador = 0; contador < _imxsEditar.length; contador ++){ 
        _imxsEditar[contador].addEventListener("click",(e)=>{ 

          nomes[0] = parseInt(e.target.parentElement.getAttribute("id"))
          nomes.push(e.target.getAttribute("name"))
          let elementosARecorrer = e.target.parentElement.childNodes;
          // console.log(elementosARecorrer)
          for (let elemento of elementosARecorrer) {
            
            if(elemento.getAttribute('readonly') === 'true'){
              elemento.style.backgroundColor = "green";
              elemento.style.color = "white";
              elemento.removeAttribute("readonly");
            }
          }

          // if()
          // console.log(e.target, nomes)
        })
      }
      }

      // e.stopImmediatePropagation()

}

// function 

export{
    borrarDatos,
    seleccionTarefaARealizar,
    crearContenidoEnSection,
    seleccionElementos,
    imxsGuardarOEditar,
}
