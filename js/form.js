var botaoAdicionar = document.querySelector("#adicionar-paciente");
    console.log(botaoAdicionar)
    botaoAdicionar.addEventListener("click", function(e){
        e.preventDefault();
        var form = document.querySelector("#formulario");

        // extrai informações do paciente do form   
        var paciente = obtemPacienteDoFormulario(form);

        var erro = validaPaciente(paciente);
        if(erro.length > 0) {
            exibeErros(erro)
            return;
        }
        
        // cria a tr e a td da tabela
        var pacienteTr = montarTr(paciente);
        var tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(pacienteTr);
        form.reset();
    });

    function montarTd(dados, classe) {
        var td = document.createElement("td");
        td.textContent = dados;
        td.classList.add(classe);

        return td;
    }

    function montarTr(paciente) {
        var pacienteTr = document.createElement("tr");
        pacienteTr.classList.add("paciente");

        var nomeTd = montarTd(paciente.nome, "info-nome");
        var pesoTd = montarTd(paciente.peso, "info-peso");
        var alturaTd = montarTd(paciente.altura, "info-altura");
        var gorduraTd = montarTd(paciente.gordura, "info-gordura");
        var imcTd = montarTd(paciente.imc, "info-imc");

        nomeTd.textContent = paciente.nome;
        pesoTd.textContent = paciente.peso;
        alturaTd.textContent = paciente.altura;
        gorduraTd.textContent = paciente.gordura;
        imcTd.textContent = paciente.imc;
        
        pacienteTr.appendChild(nomeTd);
        pacienteTr.appendChild(pesoTd);
        pacienteTr.appendChild(alturaTd);
        pacienteTr.appendChild(gorduraTd);
        pacienteTr.appendChild(imcTd);

        return pacienteTr;
    }

    function obtemPacienteDoFormulario(form) {

        var paciente = {
            nome: form.nome.value,
            peso: form.peso.value,
            altura: form.altura.value,
            gordura: form.gordura.value,
            imc: calculaImc(form.peso.value, form.altura.value)
        }
        return paciente;
    }

    function validaPaciente(paciente){
        var erro = [];

        if(!validaPeso(paciente.peso)){
            erro.push("Peso inválido!")
        }

        if(paciente.nome == "") {
            erro.push("O campo nome não pode estar vazio!");
        }

        return erro;
    }

    function exibeErros(erros) {
        var ul = document.querySelector("#mensagem-erro");
        ul.innerHTML = "";
        
        erros.forEach(function(erro) {
            var li = document.createElement("li");
            li.textContent = erro;
            ul.append(li);
        });
    }
