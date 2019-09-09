"use strict";

window.addEventListener('load', inicia, false);

function inicia() {
    var imagens = document.querySelectorAll("#fotos img");
    for(let i=0; i<imagens.length; i++){
        imagens[i].addEventListener('click', alteraimg, false);
    }
    
    imagens[0].style.borderColor = '#ffbb58';
    document.getElementById('foto_selecionada').src = imagens[0].src;
}

function alteraimg(e){
    var imagens = document.querySelectorAll("#fotos img");
    document.getElementById('foto_selecionada').src = e.target.src;
    for(let i=0; i<imagens.length; i++){
        imagens[i].style.borderColor = 'white';
        e.target.style.borderColor = '#ffbb58';
    }
}