
const cifrar = () =>{
  // const aceptar =document.getElementById("botoncomenzar");
  // aceptar.addEventListener('click',window.cipher.encode);

    const espacio = parseInt(document.getElementById('offset').value);
    console.log(espacio)
    const mayus = document.getElementById('entrada').value.toUpperCase();
    console.log(mayus)
    //window.cipher.encode;
    document.getElementById('inputRes').value = cipher.encode(espacio, mayus);


}

const descrifrar = () =>{
  // const aceptar =document.getElementById("botoncomenzar");
  // aceptar.addEventListener('click',window.cipher.encode);

    const espacioUno = parseInt(document.getElementById('offset').value);
    console.log(espacioUno)
    const mayusUno = document.getElementById('entrada').value.toUpperCase();
    console.log(mayusUno)
    //window.cipher.encode;
    document.getElementById('inputRes').value = cipher.decode(espacioUno, mayusUno);


}


// let mayusDos = document.getElementById('entrada').value.toUpperCase();
// let espacioDos = parseInt(document.getElementById('offset').value);
// const aceptar =document.getElementById("botoncomenzar");
// aceptar.addEventListener('click',window.cipher.encode);
