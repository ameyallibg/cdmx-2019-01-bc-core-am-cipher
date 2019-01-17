
window.cipher = {

  // function cifrar(){
    // let espacio = parseInt(document.getElementById('offset').value);
    // let contraseña = document.getElementById('entrada').value;
    // let mayus = contraseña.toUpperCase();
    //
    // for (let i = 0; i < mayus.length; i++) {
    //   let mayusArray = mayus.charCodeAt(i);
    //   console.log(mayusArray)
    //   let cifrado =(mayusArray - 65 + espacio) % 26 + 65;
    //   console.log(cifrado)
    //   let final = String.fromCharCode(cifrado);
    //   cifrando+=final;
    //   console.log(cifrando)
    //   document.getElementById('inputRes').innerHTML = cifrando;
   //}

    encode:(espacio , mayus) =>{
     let cifrando ="";
    //console.log(mayus)
    //let mayus = contraseña.toUpperCase();
    for (let i = 0; i < mayus.length; i++) {
      let cifrado=(mayus.charCodeAt(i) - 65 + espacio) % 26 + 65;
      //console.log(cifrado)
      let final = String.fromCharCode(cifrado);

      cifrando += final;
     }
    //document.getElementById('inputRes').innerHTML = cifrando;
    //console.log(cifrando)
    return cifrando

  },


      decode:(espacioUno, mayusUno) =>{
       let cifrandoUno ="";
      //console.log(mayus)
      //let mayus = contraseña.toUpperCase();
      for (let i = 0; i < mayusUno.length; i++) {
        let cifradoUno=(mayusUno.charCodeAt(i) + 65 - espacioUno) % 26 + 65;
        //console.log(cifrado)
        let finalUno = String.fromCharCode(cifradoUno);

        cifrandoUno += finalUno;
       }
    //  document.getElementById('inputRes').innerHTML = cifrandoUno;
      //console.log(cifrandoUno)
      return cifrandoUno

    },





    // function descrifrar(){
    //   let cifrandoUno = "";
    //   let espacioUno = parseInt(document.getElementById('offset').value);
    //   let contraseñaUno = document.getElementById('entrada').value;
    //   let mayusUno = contraseñaUno.toUpperCase();
    //   for (let j = 0; j < mayusUno.length; j++) {
    //     let mayusArrayUno = mayusUno.charCodeAt(j);
    //     let cifradoUno =(mayusArrayUno+65-espacioUno)%26+65;
    //     let finalUno = String.fromCharCode(cifradoUno);
    //     cifrandoUno += finalUno;
    //     console.log(cifrandoUno)
    //     document.getElementById('inputRes').innerHTML = cifrandoUno;
    //
    // }
    //


//   }
 };
