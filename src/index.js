const cifrar = () => {


    const espacio = parseInt(document.getElementById('offset').value);
    //console.log(espacio)
    const string = document.getElementById('entrada').value //toUpperCase()
    //console.log(mayus)
    //window.cipher.encode;
    document.getElementById('inputRes').innerHTML = cipher.encode(espacio, string);
    //document.getElementById('inputRes').innerHTML = cifrando;


}

const aceptar =document.getElementById("botoncomenzar");
aceptar.addEventListener('click',cifrar);


const descrifrar=()=> {
  // const aceptar =document.getElementById("botoncomenzar");
  // aceptar.addEventListener('click',window.cipher.encode);

    const espacio = parseInt(document.getElementById('offset').value);
    //console.log(espacioUno)
    const string = document.getElementById('entrada').value; //toUpperCase()
    //console.log(mayusUno)
    //window.cipher.encode;
    document.getElementById('inputRes').innerHTML = cipher.decode(espacio, string);





}

const des =document.getElementById("botoncomenzarDos");
des.addEventListener('click',descrifrar);


// let mayusDos = document.getElementById('entrada').value.toUpperCase();
// let espacioDos = parseInt(document.getElementById('offset').value);
// const aceptar =document.getElementById("botoncomenzar");
// aceptar.addEventListener('click',window.cipher.encode);
