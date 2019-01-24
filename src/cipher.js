
window.cipher = {
  encode:(espacio , mayus) => {
   let cifrando = "";
   let contador= /^[a-zA-Z]+$/; //expresion regular para mayus y minus donde estrictamente sean solo las vocales
      if (mayus.match(contador)) { // ve si hace juego con el string de contador
        for (let i = 0; i < mayus.length; i++) {//itera mayus
          let cifrado= mayus.charCodeAt(i);//convierte cada iteracion a su codigo ascii
            if (cifrado >= 65 && cifrado <=90) {//codigo ascii de las mayusculas
              let newCif=(mayus.charCodeAt(i) - 65 + espacio + 52) % 26 + 65; //aplicando formula
              let final = String.fromCharCode(newCif);
              cifrando += final;
            }else if(cifrado >= 97 && cifrado <=122)  {//codigo ascii minusculas
              let newCif=(mayus.charCodeAt(i) - 97 + espacio + 52) % 26 + 97; // aplicando formula
              let final = String.fromCharCode(newCif);
              cifrando += final;
              }
          }
   return cifrando

 }else if (mayus.match(/[a-zA-Z]/)){ //expresion regular para mayus y minus en el que puede aceptar otros caracteres
        for (let i = 0; i < mayus.length; i++) {
          let cifrado= mayus.charCodeAt(i);
          //condicion para los caracteres especiales codigo ascii (espacios, ñ, !.@)
            if(cifrado >=32 && cifrado <= 64 || cifrado >=91 && cifrado <=95 || cifrado >=123 && cifrado <=255){
              let final = String.fromCharCode(cifrado)
              cifrando += final;
            }else if(cifrado >= 65 && cifrado <=90){ // para mayusculas
              let newCif = (cifrado - 65 + espacio + 52) % 26 + 65;
              let final = String.fromCharCode(newCif);
              cifrando += final;
            }else if(cifrado >= 97 && cifrado <=122){ //para minusculas
              let newCif=(mayus.charCodeAt(i) - 97 + espacio + 52) % 26 + 97;
              let final = String.fromCharCode(newCif);
              cifrando += final;
            }
        } return cifrando
      }else if(mayus != mayus.match(contador) ){ //para cualquiera caracter especial que no contenga el abcedario
      return mayus
      }
  },

decode:(espacio , mayus) =>{
 let cifrando = "";
 let contador= /^[a-zA-Z]+$/;
    if (mayus.match(contador)) {
      for (let i = 0; i < mayus.length; i++) {
        let cifrado= mayus.charCodeAt(i);
        if (cifrado >= 65 && cifrado <=90) {
          let newCif=(mayus.charCodeAt(i) + 65 - espacio +26) % 26 + 65;
          let final = String.fromCharCode(newCif);
            cifrando += final;
        }else if(cifrado >= 97 && cifrado <=122){
          let newCif=(mayus.charCodeAt(i) - 97 - espacio + 52 ) % 26 + 97;
          let final = String.fromCharCode(newCif);
          cifrando += final;
        }
      }
      return cifrando
    }else if (mayus.match(/[a-zA-Z]/)){
      for (let i = 0; i < mayus.length; i++) {
        let cifrado= mayus.charCodeAt(i);
        if(cifrado >=32 && cifrado <= 64 || cifrado >=91 && cifrado <=95 || cifrado >=123 && cifrado <=255){
          let final = String.fromCharCode(cifrado)
          cifrando += final;
        }else if (cifrado >= 65 && cifrado <=90){
          let newCif = (cifrado + 65 - espacio + 26) % 26 + 65;
          let final = String.fromCharCode(newCif);
          cifrando += final;
        }else if(cifrado >= 97 && cifrado <=122)  {
          let newCif=(mayus.charCodeAt(i) - 97 - espacio + 52 ) % 26 + 97;
          let final = String.fromCharCode(newCif);
          cifrando += final;
        }
      }
      return cifrando
    }else if(mayus != mayus.match(contador) ){
      return mayus
    }
  }

};

//   encode:(espacio , mayus) =>{
//    let cifrando ="";
//   //console.log(mayus)
//   //let mayus = contraseña.toUpperCase();
//   for (let i = 0; i < mayus.length; i++) {
//
//     let cifrado=(mayus.charCodeAt(i) - 65 + espacio) % 26 + 65;
//     //console.log(cifrado)
//     let final = String.fromCharCode(cifrado);
//
//     cifrando += final;
//    }
//   //document.getElementById('inputRes').innerHTML = cifrando;
//   //console.log(cifrando)
//   return cifrando
//
// },

    //   decode:(espacioUno, mayusUno) =>{
    //    let cifrandoUno ="";
    //   //console.log(mayus)
    //   //let mayus = contraseña.toUpperCase();
    //   for (let i = 0; i < mayusUno.length; i++) {
    //     let cifradoUno=(mayusUno.charCodeAt(i) + 65 - espacioUno) % 26 + 65;
    //     //console.log(cifrado)
    //     let finalUno = String.fromCharCode(cifradoUno);
    //
    //     cifrandoUno += finalUno;
    //    }
    // //  document.getElementById('inputRes').innerHTML = cifrandoUno;
    //   //console.log(cifrandoUno)
    //   return cifrandoUno
    //
    // },
