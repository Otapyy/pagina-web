const titleLogin = document.getElementById("titleLogin");
const taEmailLogin = document.getElementById("taEmailLogin");
const taSenhaLogin = document.getElementById("taSenhaLogin");
const btnConfirm = document.getElementById("btnConfirm");

function getValueInputText(){
    localStorage.setItem("Nome", taEmailLogin.value)
    localStorage.setItem("Senha", taSenhaLogin.value)

    taEmailLogin.value = null;
    taSenhaLogin.value = null;

}

btnConfirm.addEventListener('click', getValueInputText);
