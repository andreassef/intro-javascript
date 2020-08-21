var btAdicionar = document.querySelector("#buscar-pacientes");

btAdicionar.addEventListener("click", function() {
    console.log("buscando...");
    var request = new XMLHttpRequest();
    request.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    request.addEventListener("load", function()
    {   
        var erroAjax = document.querySelector("#erro-ajax");
        if(request.status == 200) {
            erroAjax.classList.add("invisivel");
            var response = request.responseText;
            var pacientes = JSON.parse(response);
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        }else {
            erroAjax.classList.remove("invisivel");
            console.log(request.status);
            console.log(request.responseText);
        }
        
    });

    request.send();
});