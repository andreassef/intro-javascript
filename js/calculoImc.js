// acessamos o elemento pai para poder acessar os filhos
var pacientes = document.querySelectorAll(".paciente");
for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    // acesso aos filhos
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");

    // coluna do IMC
    var tdImc = paciente.querySelector(".info-imc");

    // Conteudos das tags peso a altura
    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var pesoEhValido = validaPeso(peso);

    if (!pesoEhValido) {
        tdImc.textContent = "Peso inválido";
        paciente.style.color = "white";
        // paciente.style.backgroundColor = "lightcoral";
        paciente.classList.add("paciente-invalido");
    }
    else {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}



var title = document.querySelector("h1");
title.style.cursor = "pointer";
title.addEventListener("click", function(e){
    console.log("FUI CLICADO PORA")
})

function validaPeso(peso) {
    if (peso < 0 || peso > 1000) {
        return false;
    }else {
        return true;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso/(altura*altura);
    return imc.toFixed(2);
}


console.log(imc);