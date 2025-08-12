a = document.getElementById("1");
b = document.getElementById("2");

a.innerHTML = "DEF";

function consoletome(){
    console.log("AaaaaAAaaaA");
}

b.addActionListener("click", consoletome);

