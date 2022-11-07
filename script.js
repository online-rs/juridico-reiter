function logar(){
  window.open('https://mail22.reiterlog.com');}

function trello(){
  window.open('https://trello.com/b/gLX9OLv5/reiter');}  

function orient(){
  window.open('https://drive.google.com/drive/folders/1OPy0lCBtVtdZDe5OkUJwiGp0HbNfc8hv');}  

function latromi(){
  console.log('TESTE XVIDEOS')
  window.open('http://172.31.0.142:8081/web');
}  

var chamadoLink = 'https://chamados.reiterlog.com/';

function abrirChamado(){
  console.log('TESTE chamado')
  window.open(chamadoLink);
}

function conversar(){
  var numeroWhatsapp = document.getElementById('numero').value;
  var numeroddd = document.getElementById('ddd').value;
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