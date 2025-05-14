'use strict';

const criar = document.getElementById('criar');

function validarConta(event){
    event.preventDefault();

    const criarNome = document.getElementById('criarNome'); 
    const criarEmail = document.getElementById('criarEmail');   
    const criarSenha = document.getElementById('criarSenha');
    const resultado = document.getElementById('resultado');

    if (criarNome.value === '' || criarEmail.value === '' || criarSenha.value === '') {
        resultado.textContent = 'Preencha todos os campos corretamente';
    }
    else if(criarSenha.value.lenght < 6){
        resultado.textContent = 'Sua senha deve ter pelo menos 6 caractéres';
    }

}

criar.addEventListener('click', validarConta);