/**
 * Por tag: getElementByTagName()
 * Por Id: getElementById()
 * Por nome: getElementsByName()
 * Por Classe: getElementsByClassName()
 * Por Seletor: querySelector()
 */

 let nome = window.document.getElementById('nome');
 let email = document.querySelector('#email');
 let assunto = document.querySelector('input#assunto');

 nome.style.width = '100%';
 email.style.width = '100%';

function validaNome() {
    let txtNome = document.querySelector('#txtNome');
    if ( nome.value.length < 3) {
        txtNome.innerHTML = 'Nome inválido';
        txtNome.style.color = 'red';
    } else {
        txtNome.innerHTML = 'Nome valido';
        txtNome.style.color = 'green';
    }
} 

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail');

    if ( email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1)  {
        txtEmail.innerHTML = 'Email inválido';
        txtEmail.style.color = 'red';
    } else {
        txtEmail.innerHTML = 'Email valido';
        txtEmail.style.color = 'green';
    }
} 