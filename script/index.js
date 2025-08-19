
const carrossel = document.querySelector(".carrossel");
const btnEsquerdo = document.querySelector('.seta.esquerda');
const btnDireito = document.querySelector('.seta.direita');

const scrollAmount = 1070;

btnDireito.addEventListener('click', () => {
    carrossel.scrollBy({left: scrollAmount, behavior: 'smooth'});  
});

btnEsquerdo.addEventListener('click', () =>{
    carrossel.scrollBy({left: -scrollAmount, behavior: 'smooth'});
})