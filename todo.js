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
