var linha = document.querySelectorAll('table > tbody  > tr');
console.log(linha);

var criarBotao = document.createElement("BUTTON");
linha.forEach

function logar(){
  window.open('https://mail22.reiterlog.com');}

function trello(){
  window.open('https://trello.com/b/gLX9OLv5/reiter');}  

function orient(){
  window.open('https://drive.google.com/drive/folders/1TALSopbH99ov2hUgiMrl8Yn1mjABC5Wd?usp=share_link');}  

function latromi(){
  console.log('Abrindo Latromi')
  window.open('http://172.31.0.142:8081/web');
}  

var chamadoLink = 'https://chamados.reiterlog.com/';

function abrirChamado(){
  console.log('TESTE chamado')
  window.open(chamadoLink);
}

function abrirAI(){
  console.log('Abrindo AI')
  window.open('https://online-rs.github.io/juridico-reiter/advogadovirtual');
}



function getV(alvoid){
  return document.getElementById(alvoid).value;
}

function conversar(){
  var numeroWhatsapp = getV('numero');
  var numeroddd = getV('ddd');
  console.log(caminho);
  if (numeroWhatsapp == ''){
      alert('Favor colocar um número')
  }else{
      var caminho = 'https://wa.me/55' + numeroddd + numeroWhatsapp;
      window.open(caminho);
      document.getElementById('site').textContent = caminho;
      document.getElementById('site').style.display = 'inline';
  }

}
var pauta = document.getElementById('pauta');
pauta.style.display = 'none';

function hideObjects(ObjectId){
  var pauta = document.getElementById(ObjectId);
  var pautadisplay = pauta.style.display;
  if (pautadisplay === 'block'){
    pauta.style.display = 'none';
  }else{
    pauta.style.display = 'block';
  }
}

function displayPauta(){
  hideObjects('pauta');
}


function abrirConvite(){
  hideObjects('convite');
}
 

function convidarTestemunha(){
  var numeroWhatsapp = document.getElementById('numeroConvite').value;
  var numeroddd = document.getElementById('dddConvite').value;
  var nome = document.getElementById('nome').value;
  var reclamante = document.getElementById('reclamante').value;
  var processo = document.getElementById('processo').value;
  var data = document.getElementById('data').value;
  var horario = document.getElementById('horario').value;
  var modalidade = document.getElementById('modalidade').value;
  var local = document.getElementById('local').value;
  var link = document.getElementById('link').value;
  if (numeroWhatsapp == ''){
      alert('Favor colocar um número')
  }else{
      var caminho = 'https://wa.me/55' + numeroddd + numeroWhatsapp +'?text=Oi ' + nome + ', tudo bem?%0A%0ATeremos uma audiência de instrução do ex-funcionário '+ reclamante + '(' + processo + ')%0A%0AData: ' + data +'%0AHorário: ' + horario + '%0AModalidade: ' + modalidade + '%0ALocal: ' + local + '%0ALink: ' + link + '%0A%0A Poderia participar como testemunha, por favor? %0A%0AAbaixo está o link para instalação do aplicativo ZOOM. Favor aceitar todas as permissões, principalemnte áudio e video, para que não haja problemas na conexão. %0A%0ALink de instalação do ZOOM: https://play.google.com/store/apps/details?id=us.zoom.videomeetings&hl=pt_BR&gl=US  ' 
      console.log(caminho);
      window.open(caminho);
  }

}





// Get the input field
var input = document.getElementById("numero");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("botaowhatsapp1").click();
  }
});

const numeroddd = document.getElementById('ddd');
const dddvalor = numeroddd.value;
const qdddvalor = length.dddvalor;

// Execute a function when the user presses a key on the keyboard
numeroddd.addEventListener("keyup", function(event) {
  const numeroddd = document.getElementById('ddd');
  const dddvalor = numeroddd.value;
  if (dddvalor.length == '2'){
    console.log('vamos mudar para o de baixo');
    input.focus();
  }
  else{
    console.log('nao deu')
  }
});

// Obtém uma referência para a tabela
const table = document.querySelector('table');

// Obtém todas as linhas da tabela (tr)
const rows = table.querySelectorAll('tr');

for (var i = 1; i < rows.length; i++) {
  var cell = rows[i].insertCell(0);
  var button = document.createElement("button");
  button.setAttribute("id", "convidar");
  button.setAttribute("class", "botao");
  button.innerHTML = "C";
  cell.appendChild(button);
  }

var button2 = document.querySelectorAll('.tabela-botoes .botao');
console.log(button2);

button2.forEach(function(botao) {
  botao.addEventListener('click', function() {
  // Selecione a linha correspondente ao botão clicado
  var row = botao.parentNode.parentNode;

  // Obtenha os valores das colunas
  var cdata = row.querySelectorAll('td')[1].textContent;
  var chora = row.querySelectorAll('td')[2].textContent;
  var cComarca = row.querySelectorAll('td')[5].textContent;
  var cReclamante = row.querySelectorAll('td')[7].textContent;
  var cMODALIDADE = row.querySelectorAll('td')[9].textContent;
  var cProc = row.querySelectorAll('td')[12].textContent;
  var cLINK = row.querySelectorAll('td')[14].textContent;

  // Selecione os campos do formulário
  var reclamante = document.getElementById('reclamante');
  var processo = document.getElementById('processo');
  var data = document.getElementById('data');
  var horario = document.getElementById('horario');
  var modalidade = document.getElementById('modalidade');
  var local = document.getElementById('local');
  var link = document.getElementById('link');

  // Preencha os campos do formulário com os valores obtidos
  data.setAttribute('value', cdata);
  horario.setAttribute('value', chora);
  local.setAttribute('value', cComarca);
  modalidade.setAttribute('value', cMODALIDADE);
  link.setAttribute('value', cLINK);
  reclamante.setAttribute('value', cReclamante);
  processo.setAttribute('value', cProc);
  });
  });  


  
