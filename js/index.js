
const agencias = document.querySelector(".agencias");
const agencia = document.querySelector(".agencia");
const linkAgencias = document.getElementById('link-agencias');
const contenedorEnlacesNav = document.querySelector(".menu .contenedor-enlaces-nav");
const main = document.querySelector(".main");
const iconMenu = document.querySelector(".icon-menu");
const iconMenuCerrar = document.querySelector(".icon-menu-cerrar");
const  esDispositivoMovil = () => window.innerWidth <= 900;   /* cuando es un dispositivo movil y la pantalla es menor a 800px */
const categorias = document.querySelector(".categorias");


linkAgencias.addEventListener('click', () => {
  if(!esDispositivoMovil()) {    /* si no es dispositivo movil menor de 800px no muestra la grids al pasar el cursor*/
    agencias.classList.toggle('activo');
   }
});

main.addEventListener('click', () => {
  if(!esDispositivoMovil()) {    /* si no es dispositivo movil cuando cliqueamos el main, desaparecen las agencias*/
    agencias.classList.remove('activo');
   }
});

iconMenu.addEventListener('click', () => {
  if(esDispositivoMovil()) {    /* si no es dispositivo movil cuando cliqueamos el main, desaparecen las agencias*/
    iconMenu.style.display="none";
    iconMenuCerrar.style.display="block";
    contenedorEnlacesNav.classList.add('activo')
   }
});
iconMenuCerrar.addEventListener('click', () => {
  if(esDispositivoMovil()) {    /* si no es dispositivo movil cuando cliqueamos el main, desaparecen las agencias*/
    iconMenu.style.display="block";
    iconMenuCerrar.style.display="none";
    contenedorEnlacesNav.classList.remove('activo')
   }
});
linkAgencias.addEventListener('click', () => {
  if(esDispositivoMovil()) {    /* si no es dispositivo movil menor de 800px no muestra la grids al pasar el cursor*/
    agencias.classList.toggle('activo');
   }
});
main.addEventListener('click', () => {
  if(esDispositivoMovil()) {    /* si no es dispositivo movil cuando cliqueamos el main, desaparecen las agencias*/
    agencias.classList.remove('activo');
    contenedorEnlacesNav.classList.remove('activo')
    iconMenu.style.display="block";
    iconMenuCerrar.style.display="none";
   }
});

/*****************Fecha y hora start *****************/
let fechaHora = new Date();
let fecha = `${fechaHora.getDate().toString().padStart(2,'0')}/${(fechaHora.getMonth()+1).toString().padStart(2,'0')}/${fechaHora.getFullYear().toString()}`;
document.getElementById("fecha").innerText = `${fecha}`;

/*****************Fecha y hora ends *****************/
