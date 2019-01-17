
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
//      console.log(i)

      let cifrado=(mayus.charCodeAt(i) - 65 + espacio) % 26 + 65;
      //console.log(cifrado)
      let final = String.fromCharCode(cifrado);

      cifrando += final;

    }
    return cifrando

  }else if (mayus.match(/[a-zA-Z]/)){
    //console.log(mayus)
    for (let i = 0; i < mayus.length; i++) {
      let cifrado= mayus.charCodeAt(i);
      //console.log(cifrado)
       if(cifrado >=32 && cifrado <= 64){
         let final = String.fromCharCode(cifrado)
         cifrando += final;

        }else {

         let newCif = (cifrado - 65 + espacio) % 26 + 65;
        // console.log(newCif)
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
 //let letras = "abcdefghijklmnopqrstuvwxyz"
//console.log(mayus)
//let mayus = contraseña.toUpperCase();
if (mayus.match(contador)) {
  //console.log(mayus)
  for (let i = 0; i < mayus.length; i++) {
//      console.log(i)

    let cifrado=(mayus.charCodeAt(i) + 65 - espacio) % 26 + 65;
    //console.log(cifrado)
    let final = String.fromCharCode(cifrado);

    cifrando += final;

  }
  return cifrando

}else if (mayus.match(/[a-zA-Z]/)){
  //console.log(mayus)
  for (let i = 0; i < mayus.length; i++) {
    let cifrado= mayus.charCodeAt(i);
    //console.log(cifrado)
     if(cifrado >=32 && cifrado <= 64){
       let final = String.fromCharCode(cifrado)
       cifrando += final;

      }else {

       let newCif = (cifrado + 65 - espacio) % 26 + 65;
      // console.log(newCif)
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

      //document.getElementById('inputRes').innerHTML = cifrando;
      //console.log(cifrando)





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
