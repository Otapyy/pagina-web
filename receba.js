const titleLogin = document.getElementById("titleLogin");
const taEmailLogin = document.getElementById("taEmailLogin");
const taSenhaLogin = document.getElementById("taSenhaLogin");
const btnConfirm = document.getElementById("buttonConfirm");

btnConfirm.addEventListener()


fetch("https://dadosabertos.camara.leg.br/api/v2/deputados/209787")
  .then(res => res.json())
  .then(data => {
     localStorage.setItem('id', data.dados.cpf)

  })   
  