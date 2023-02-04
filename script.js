function clickMenu() {
    if (menu.style.display == 'block'){
    menu.style.display = 'none' 
    } else {
    menu.style.display = 'block'
    }
}


function mudouTamanho() {
    if (window.innerWidth >= 768) {
        burguer.style.display = 'none'
        menu.style.display = 'block'
        
    } else {
        menu.style.display = 'none'
        burguer.style.display = 'block'
        
    }
}


function click2Menu() {
    if (menu.style.display == 'block' && window.innerWidth <= 768){
        menu.style.display = 'none'
    }   
}

var slideshows = document.querySelectorAll('[data-component="slideshow"]');

// Aplica a todas as apresentações de slides que você define com o HTML escrito
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {

var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`); // Obter um array de slides

var index = 0, time = 4000;
slides[index].classList.add('active');  

setInterval( () => {
    slides[index].classList.remove('active');
    
    //Passar por cada slide, incrementando o índice
    index++;
    
    // Ao passar por todos os slides, reiniciar o índice para exibir o primeiro slide e iniciar novamente
    if (index === slides.length) index = 0; 
    
    slides[index].classList.add('active');

}, time);
}   