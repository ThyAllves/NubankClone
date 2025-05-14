'use strict'

const btnLogin = document.getElementById('btnLogin');


function login(event) {
    event.preventDefault();

    const email = document.getElementById('email');
    const senha = document.getElementById('senha');
    const resultadoAlt = document.getElementById('resultadoAlt');
    
    if (email.value === '' || senha.value === '') {
        resultadoAlt.textContent = 'Preencha todos os campos';
    }else{
        resultadoAlt.textContent = 'Login efetuado com sucesso';
        resultadoAlt.style.color = 'green'; 
    }

}   


btnLogin.addEventListener('click' , login);
