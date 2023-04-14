var strCPF = document.getElementById('cpf').value;
var cpf = document.getElementById('cpf');


cpf.addEventListener("keyup", function(event) {
    const cpf = document.getElementById('cpf');
    const cpfvalor = cpf.value;
    if (cpfvalor.length == '11'){
      alert(TestaCPF(cpfvalor));
    }
    else{
      console.log('nao deu')
    }
  });


function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000") return "CPF Incorreto, favor conferir!";

  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return "CPF Incorreto, favor conferir!";

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return "CPF Incorreto, favor conferir!";
    return "CPF confirmado";
}

var valor = document.getElementById('cep');

function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('estado').value=("");
}

function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('rua').value=(conteudo.logradouro);
    document.getElementById('bairro').value=(conteudo.bairro);
    document.getElementById('cidade').value=(conteudo.localidade);
    document.getElementById('estado').value=(conteudo.uf);
} //end if.
else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
}
}

function pesquisacep(valor) {
    

    var valor = document.getElementById('cep').value;
    var cep = valor;

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if(validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('rua').value="...";
            document.getElementById('bairro').value="...";
            document.getElementById('cidade').value="...";

            //Cria um elemento javascript.

            console.log('iniciando chamada');

            //Sincroniza com o callback.
            url = 'https://viacep.com.br/ws/'+ cep + '/json/';
            console.log(url);
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", url, false);
           
            xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor
            console.log(xhttp.responseText);
            var json = JSON.parse(xhttp.responseText);
            document.getElementById('rua').value=json.logradouro;
            document.getElementById('bairro').value=json.bairro;
            document.getElementById('cidade').value=json.localidade;
            document.getElementById('estado').value=uf;


        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
};


var dependente = document.getElementById('dependente');


var teste = document.getElementById('dependenteg');
teste.style.display = "none";

dependente.addEventListener("click", function(event) {
  console.log(dependente.value);
  if (dependente.value == 0){
    console.log('agora sim');
    var teste = document.getElementById('dependenteg');
    teste.style.display = "none";
    }
    else{
      var teste = document.getElementById('dependenteg');
      teste.style.display = "block";
    }
  });

