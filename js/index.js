
const agencias = document.querySelector(".agencias");
const agencia = document.querySelector(".agencia");
const linkAgencias = document.getElementById('link-agencias');
const  esDispositivoMovil = () => window.innerWidth <= 900;   /* cuando es un dispositivo movil y la pantalla es menor a 800px */
const categorias = document.querySelector(".categorias");


linkAgencias.addEventListener('click', () => {
  if(!esDispositivoMovil()) {    /* si no es dispositivo movil menor de 800px no muestra la grids al pasar el cursor*/
    agencias.classList.add('activo');
   }
});

linkAgencias.addEventListener('onclick', () => {
  if(!esDispositivoMovil()) {    /* si no es dispositivo movil menor de 800px no muestra la grids al pasar el cursor*/
    agencias.classList.remove('activo');
   }
});

/*****************Fecha y hora start *****************/
let fechaHora = new Date();
let fecha = `${fechaHora.getDate().toString().padStart(2,'0')}/${(fechaHora.getMonth()+1).toString().padStart(2,'0')}/${fechaHora.getFullYear().toString()}`;
document.getElementById("fecha").innerText = `Malabo ${fecha}`;

/*****************Fecha y hora ends *****************/
