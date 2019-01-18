
window.cipher = {
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
  encode:(espacio , mayus) => {
   let cifrando = "";
   let contador= /^[a-zA-Z]+$/;
   //let letras = "abcdefghijklmnopqrstuvwxyz"
  //console.log(mayus)
  //let mayus = contraseña.toUpperCase();
  if (mayus.match(contador)) {
    //console.log(mayus)
    for (let i = 0; i < mayus.length; i++) {
      let cifrado= mayus.charCodeAt(i);

      if (cifrado >= 65 && cifrado <=90) {
        let newCif=(mayus.charCodeAt(i) - 65 + espacio) % 26 + 65;
        let final = String.fromCharCode(newCif);

        cifrando += final;

      }else if(cifrado >= 97 && cifrado <=122)  {

        let newCif=(mayus.charCodeAt(i) - 97 + espacio) % 26 + 97;
        let final = String.fromCharCode(newCif);

        cifrando += final;


      }

    }
    return cifrando

  }else if (mayus.match(/[a-zA-Z]/)){
    //console.log(mayus)
    for (let i = 0; i < mayus.length; i++) {
      let cifrado= mayus.charCodeAt(i);
      //console.log(cifrado)
       if(cifrado >=32 && cifrado <= 64 || cifrado >=91 && cifrado <=95 || cifrado >=123 && cifrado <=255){
         let final = String.fromCharCode(cifrado)
         cifrando += final;

       }else if(cifrado >= 65 && cifrado <=90){

         let newCif = (cifrado - 65 + espacio) % 26 + 65;
        // console.log(newCif)
         let final = String.fromCharCode(newCif);

        cifrando += final;
      }
      else if(cifrado >= 97 && cifrado <=122)  {

        let newCif=(mayus.charCodeAt(i) - 97 + espacio) % 26 + 97;
        let final = String.fromCharCode(newCif);

        cifrando += final;


      }
    } return cifrando
  }
  else if(mayus != mayus.match(contador) ){
  return mayus
}





},

decode:(espacio , mayus) =>{
 let cifrando = "";
 let contador= /^[a-zA-Z]+$/;

if (mayus.match(contador)) {
  //console.log(mayus)
  for (let i = 0; i < mayus.length; i++) {
    //console.log(mayus)
    let cifrado= mayus.charCodeAt(i);
    //console.log(cifrado)
    if (cifrado >= 65 && cifrado <=90) {
        //console.log(cifrado)
      let newCif=(mayus.charCodeAt(i) + 65 - espacio) % 26 + 65;
      let final = String.fromCharCode(newCif);

      cifrando += final;



    }else if(cifrado >= 97 && cifrado <=122)  {


      let newCif=(mayus.charCodeAt(i) - 97 - espacio + 52 ) % 26 + 97;
      let final = String.fromCharCode(newCif);

      cifrando += final;



    }

  }
  return cifrando

}else if (mayus.match(/[a-zA-Z]/)){
  //console.log(mayus)
  for (let i = 0; i < mayus.length; i++) {
    let cifrado= mayus.charCodeAt(i);
    //console.log(cifrado)
     if(cifrado >=32 && cifrado <= 64 || cifrado >=91 && cifrado <=95 || cifrado >=123 && cifrado <=255){
       let final = String.fromCharCode(cifrado)
       cifrando += final;

     }else if (cifrado >= 65 && cifrado <=90){

       let newCif = (cifrado + 65 - espacio) % 26 + 65;
      // console.log(newCif)
       let final = String.fromCharCode(newCif);

      cifrando += final;
    }else if(cifrado >= 97 && cifrado <=122)  {


      let newCif=(mayus.charCodeAt(i) - 97 - espacio + 52 ) % 26 + 97;
      let final = String.fromCharCode(newCif);

      cifrando += final;



    }
  } return cifrando
}
else if(mayus != mayus.match(contador) ){
return mayus
}
}

};

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
