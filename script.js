//AQUI VAMOS COLCAR O H1 E OS LINKS QUE QUEREMOS
botoes = ["Whatsapp", "Instagram", "Facebook"];
var nomeprincipal = "Douglas Peres<br> Corretor Imobiliário";
var instagramnome = "imobiliariaperestramandai";
var celular = "995684306";
var facebooknome = "imobiliariaperestramandai";
var sitenome = "https://www.reiterlog.com";

//inserindo o H1
var newh1 = document.createElement("h1");
newh1.id = "titulo";
newh1.setAttribute("class", "titulo");
newh1.innerHTML = nomeprincipal;
document.getElementById("main").appendChild(newh1);

//criando os menus
function criar(nome) {
  const para = document.createElement("div");
  para.setAttribute("class", "row container");
  para.id = "linha";

  var rede = nome;
  const botaozinho = document.createElement("button");
  botaozinho.setAttribute("class", "btn btn-lg btn-primary");
  botaozinho.id = rede;

  botaozinho.innerHTML = rede;
  document.getElementById("main").appendChild(para);
  document.getElementById("linha").appendChild(botaozinho);
}
botoes.forEach(criar);

//gerando os links
var a = document.getElementById("Whatsapp");
a.onclick = function fwhatsapp() {
  window.open("https://api.whatsapp.com/send?phone=5551" + celular + "&text=Oi.%20Achei%20seu%20contato%20no%20instagram.%20Quer%20falar%20com%20voc%C3%AA%20sobre%3A");
};

var a = document.getElementById("Instagram");
a.onclick = function fwhatsapp() {
  window.open("https://www.instagram.com/" + instagramnome);
};

var a = document.getElementById("Facebook");
a.onclick = function fwhatsapp() {
  window.open("https://www.facebook.com/" + facebooknome);
};

var a = document.getElementById("Site");
a.onclick = function fwhatsapp() {
  window.open(sitenome);
};
