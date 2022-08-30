
/* quais  as formas para acessar o DOM? 

-POR TAG: getElementeByTagName()
-POR ID: getElementById()
-POR NOME: getElementsByName()
-POR CLASS: geteElementsByClassName()
-POR SELETOR: querySelector().
*/
let nome = window.document.getElementById('nome') /* pode-se optar por não colocar  o '.window' */
let email = document.querySelector('#email') /* pode-se também usar apenas o (input#email)*/  /*Caso o input de email fosse uma classe utilizaria (.email) ou então (input.email) */
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa= document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')

    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    } else {
        nomeOk = true
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail invalido'
        txtEmail.style.color = 'red'
    } else {
        emailOk = true
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'green'


    }
}

function validaAssunto() {

    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto muito grande, permitido até no maximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        assuntoOk = true
        txtAssunto.style.display = 'none'
        

    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert('Enviado com sucesso!')

    } else {
        alert('Prencha os campos corretamente!')
    }

}

function mapaZomm(){
    mapa.style.width='700px'
    mapa.style.heigth= '700px'
}

function mapaNormal(){
    mapa.style.width='400px'
    mapa.style.heigth= '400px'
}