import animationElements from "./animations.js";

const $btnMoon = document.getElementById('mode');
const $btnTop = document.getElementById('topUp');


$btnMoon.addEventListener('click', e => {

    document.body.classList.toggle('dark');

    /* 
        TODO Guardando el modo Oscuro en LocalStorage
    */

    if (document.body.classList.contains('dark')) {

        localStorage.setItem('dark-mode', 'true');

    } else {

        localStorage.setItem('dark-mode', 'false');


    }

})

/* Para comprobar el modo actual, para el tema */

if (localStorage.getItem('dark-mode') === 'true') {

    document.body.classList.add('dark');

} else {

    document.body.classList.remove('dark');

}

/* Para el boton de volver al inicio y para las animaciones */

document.addEventListener('scroll', e => {
    

    let scrollPage = window.document.documentElement.scrollTop;

    //console.log(scrollPage);

/* 
    TODO Para hacer que el boton de subir aparezca o no
*/
    if (scrollPage > 400) {

        $btnTop.classList.add('hidden');

        //console.log($btnTop);

    } else {

        $btnTop.classList.remove('hidden');

    }

    /* Para que al dar click en el boton, que vaya arriba */
    $btnTop.addEventListener('click', e => {

        window.scrollTo({
            behavior: 'smooth',
            top: 0,
        })

    })

    /* Funcion que invoca a las animaciones */

    animationElements();



})

