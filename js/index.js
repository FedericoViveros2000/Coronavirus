const $btnMoon = document.getElementById('mode');

$btnMoon.addEventListener('click', e => {

    document.body.classList.toggle('dark');
    
    /* 
        TODO Guardando el modo Oscuro en LocalStorage
    */

    if (document.body.classList.contains('dark')) {

        localStorage.setItem('dark-mode', 'true');
        
    }else{

        localStorage.setItem('dark-mode', 'false');
   

    }

})

/* Para comprobar el modo actual, para el tema */

if (localStorage.getItem('dark-mode') === 'true') {

    document.body.classList.add('dark');

}else{   
                                                                                                
    document.body.classList.remove('dark');

}


/* document.addEventListener('scroll', e => {

    console.log(scr);
    
}) */
