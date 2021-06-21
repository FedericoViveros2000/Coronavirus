export default function animationElements() {


    const $situation = document.getElementById('situation');
    const $keeps = document.getElementById('keeps')
    const $keeps2 = document.getElementById('keeps2')
    const $contSituation = document.getElementById('container__situation');
    const $stadistics = document.getElementById('stadistics');
    const $prevention = document.getElementById('prevention');
    const $steps = document.getElementById('steps');
    const $lifes = document.getElementById('life2');
    const $stay = document.getElementById('stay');
    const $suscribe = document.getElementById('suscribe');
    const $menu = document.getElementById('menu');
    const $navEnlaces = document.querySelectorAll('.text-color')
    /* 
    
    ? Animaciones del sitio web
    
    */

    let scrollPage = window.document.documentElement.scrollTop;


    /* 
     * Animacion inicial del slider
     */

    let heightAnimate = $stadistics.offsetTop

    if (heightAnimate - 550 < scrollPage) {
        $stadistics.classList.remove('invisible');
        $stadistics.classList.add('animate__fadeInDown')
    }

    /* 
     *   Animacion inicial de las estadisticas
     */

    heightAnimate = $contSituation.offsetTop


    if (heightAnimate - 600 < scrollPage) {

        $contSituation.classList.remove('invisible');
        $situation.classList.add('animate__backInLeft');
        $keeps.classList.add('animate__backInRight');
        $keeps2.classList.add('animate__backInRight');

    }

    /* 
     *   Animacion inicial de los cuidados
     */

    heightAnimate = $prevention.offsetTop;


    if (heightAnimate - 400 < scrollPage) {
        $prevention.classList.remove('invisible');
        $prevention.classList.add('animate__fadeInUp');
    }

    heightAnimate = $steps.offsetTop;

    if (heightAnimate - 500 < scrollPage) {
        $steps.classList.remove('invisible');
        $steps.classList.add('animate__fadeInUp');
    }

    heightAnimate = $lifes.offsetTop;

    if (heightAnimate - 600 < scrollPage) {
        $lifes.classList.remove('invisible');
        $lifes.classList.add('animate__fadeInDown');
    }

    /* 
     *   Animacion inicial de las noticias
     */

    heightAnimate = $stay.offsetTop;

    if (heightAnimate - 500 < scrollPage) {
        $stay.classList.remove('invisible');
        $stay.classList.add('animate__fadeInDown')
    }

    /* 
     *   Animacion inicial de la suscripcion
     */

    heightAnimate = $suscribe.offsetTop;
    
    if (heightAnimate - 400 < scrollPage) {
        $suscribe.classList.remove('invisible');
        $suscribe.classList.add('animate__zoomIn');
    }
    
    
    console.log("El scrollPage es de:"+scrollPage);
    console.log("El height es de:"+heightAnimate);

    if (scrollPage > 500) {
        $menu.classList.remove('bg-transparent');
        $menu.classList.add('color');

        $navEnlaces.forEach(enlaces => {
            
            enlaces.classList.add('si')

        });
            


    } else{
        $menu.classList.add('bg-transparent');
        $menu.classList.remove('color');
        $navEnlaces.forEach(enlaces => {
            
            enlaces.classList.remove('si')

        });    }

   

}