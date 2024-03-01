
const textarea= document.querySelector(".text-area");
const mensaje= document.querySelector(".mensaje");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar() {
  const textoEncriptado=encriptar(textarea.value)
  mensaje.value=textoEncriptado
  textarea.value="";
  mensaje.style.backgroundImage="none";
}

function btnDesencriptar() {
  const textoEncriptado=desencriptar(textarea.value)
  mensaje.value=textoEncriptado
  textarea.value="";
  
}

function copiar() {
  let copyText = document.querySelector(".mensaje");
  copyText.select();
  document.execCommand("copy");
}



function encriptar(cadenaencriptada){
  let matrizcodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
 cadenaencriptada=cadenaencriptada.toLowerCase();

 for(let  i=0; i<matrizcodigo.length;i++ ){
  if(cadenaencriptada.includes(matrizcodigo[i][0])){
    cadenaencriptada = cadenaencriptada.replaceAll(matrizcodigo[i][0],matrizcodigo[i][1]);
   }

  }
  return cadenaencriptada;
 }

 function desencriptar(cadenaDesencriptada){
  let matrizcodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
 cadenaDesencriptada=cadenaDesencriptada.toLowerCase();

 for(let  i=0; i<matrizcodigo.length;i++ ){
  if(cadenaDesencriptada.includes(matrizcodigo[i][1])){
    cadenaDesencriptada = cadenaDesencriptada.replaceAll(matrizcodigo[i][1],matrizcodigo[i][0]);
   }

  }
  return cadenaDesencriptada;
 }

 navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
  if (result.state === "granted" || result.state === "prompt") {
    /* write to the clipboard now */
  }
});
