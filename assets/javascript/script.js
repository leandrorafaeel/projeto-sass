//botao subir
let btnSubir = document.querySelector(".btn-up");

//funcao que aparece o botao subir ao dar scroll na tela
window.onscroll = function(){
    if(pageYOffset > 90){
        btnSubir.style.display = "flex";
    }else{
        btnSubir.style.display = "none"
    }
}

//funcao para atualizar o ano
copyright();

function copyright(){
    const copy = document.querySelector(".ano");
    copy.style.color = "gray";
    copy.textContent = new Date().getFullYear();
}