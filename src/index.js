const cifrar = () => {


    const num = parseInt(document.getElementById('offset').value);
    //console.log(espacio)
    const msj = document.getElementById('entrada').value //toUpperCase()
    //console.log(mayus)
    //window.cipher.encode;
    document.getElementById('inputRes').innerHTML = cipher.encode(num, msj);
    //document.getElementById('inputRes').innerHTML = cifrando;


}

const aceptar =document.getElementById("botoncomenzar");
aceptar.addEventListener('click',cifrar);


const descrifrar=()=> {
  // const aceptar =document.getElementById("botoncomenzar");
  // aceptar.addEventListener('click',window.cipher.encode);

    const espacioUno = parseInt(document.getElementById('offset').value);
    //console.log(espacioUno)
    const mayusUno = document.getElementById('entrada').value; //toUpperCase()
    //console.log(mayusUno)
    //window.cipher.encode;
    document.getElementById('inputRes').innerHTML = cipher.decode(espacioUno, mayusUno);





}

const des =document.getElementById("botoncomenzarDos");
des.addEventListener('click',descrifrar);


// let mayusDos = document.getElementById('entrada').value.toUpperCase();
// let espacioDos = parseInt(document.getElementById('offset').value);
// const aceptar =document.getElementById("botoncomenzar");
// aceptar.addEventListener('click',window.cipher.encode);
