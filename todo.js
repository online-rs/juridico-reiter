


var botaocalcular = document.getElementById('calcular');

botaocalcular.addEventListener('click', function(){
  console.log('Botão calcular está funcionando');
  var nomecompleto = document.getElementById('nomecompleto').value;
  var whatsapp = document.getElementById('whatsappctps').value;
  var salario = document.getElementById('salario').value;
  var tempo = document.getElementById('tempo').value;
  var dias = document.getElementById('dias').value;

  var ferias = document.getElementById('ferias').value;
  var salario13 = document.getElementById('13salario').value;
  var periculosidade = document.getElementById('periculosidade').value;
  var insalubridade = document.getElementById('insalubridade').value;

  var salariobase = document.getElementById('valorsalariobase');
  var saldodesalario = document.getElementById('saldodesalario');
  var salarioc13 = document.getElementById('13salarioc');
  var feriasc = document.getElementById('feriasc');
  var fgtscontrato = document.getElementById('fgtscontrato');
  var fgtsmulta = document.getElementById('fgtsmulta');
  var avisoprevio = document.getElementById('avisoprevio');
  var total = document.getElementById('total'); 
 
  var dia = salariototal / 30;
  var salariototal = salario;
  var anos = tempo / 12;

  salariobase.innerText = salariototal;

  saldodesalario.innerText = (salariototal / 30) * dias;

  feriasc.innerText = anos * salariototal * 1.3;
  salarioc13.innerText = anos * salariototal;
  fgtscontrato.innerText = tempo * salariototal * 0.08;
  fgtsmulta.innerText = tempo * salariototal * 0.08 * 0.4;

  if(anos < 1){
    console.log('tem menos de 1 ano');
    avisoprevio.innerText = salariototal;
  }else{
    console.log('tem mais tmepo');
    var avisoano = (Math.floor(anos) * 3) + 30;
    console.log(avisoano);
    avisoprevio.innerText = avisoano * dia;
  };
  somar();
});


function somar(){
 console.log("Vamos iniciar a função somar")
 var totalsoma = salariototal + saldodesalario.value;
};