const titleABC = document.getElementById("1");
const b = document.getElementById("2");
const tfValue = document.getElementById("tfValue");
const btnConfirm = document.getElementById("buttonConfirm")
let controler = false;
let valorDado = [];
let indice = 0;

function alterarTitle() {

    if (controler == false){
        titleABC.innerHTML = "DEF";
        controler = true;

    } else{
        titleABC.innerHTML = "ABC";
        controler = false;

    }
}

function addValueToArray(){

        valorDado[indice] = [tfValue.value];
        indice++;
    
}

b.addEventListener("click", alterarTitle);

btnConfirm.addEventListener("click", addValueToArray);

for(let i = 0; i >= 3; i++){
    console.log(valorDado[i]);
}

if(indice == 2){
console.log(valorDado[0]);
console.log(valorDado[1]);
console.log(valorDado[2]);
}

fetch("https://dadosabertos.camara.leg.br/api/v2/deputados/209787")
  .then(res => res.json())
  .then(data => {
     localStorage.setItem('id', data.dados.cpf)

  })    

 