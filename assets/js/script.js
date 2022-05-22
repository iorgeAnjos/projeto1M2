let botao = document.querySelector('#botao');
const imagem = document.querySelector('#imagem');
const estado = document.querySelector('#estado');
const poder = document.querySelector('#poder');
const situacao = document.querySelector('#situacao');

botao.addEventListener('click', () =>{
    if(botao.value==0){
        imagem.src = "./assets/img/Ikari_Broly.png";
        estado.innerText = "Forma: ikari";
        poder.innerText = "Poder: 1000";
        situacao.innerText = " Situacão: descontrolada";
        botao.value ++
    }else if(botao.value==1){
        imagem.src = "./assets/img/ssj_Broly.jpg";
        estado.innerText = "Forma: super sayajin";
        poder.innerText = "Poder: 5000";
        situacao.innerText = "Situacão: preocupante";
        botao.value ++
    }else if(botao.value==2){
        imagem.src = "./assets/img/ssjL_Broly.jpeg";
        estado.innerText = "Forma: super sayajin lendario";
        poder.innerText = "Poder: 50000";
        situacao.innerText = "Situacão: desastrosa";
        botao.value ++
    }else{
        imagem.src = "./assets/img/base_broly.jpeg";
        estado.innerText = "Forma: base";
        poder.innerText = "Poder: 100";
        situacao.innerText = "Situacão: controlada";
        botao.value = 0;
    }
})
