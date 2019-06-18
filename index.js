var btn1 = $("#btnone");
var btn2 = $("#btntwo");
var btn3 = $("#btnthree");
var quotes = $(".quotations")

var Quote1 =["Yesterday is history. Tomorrow is a mystery. But today is a gift. That is why it is call the present. - Master Oogway", "Just do it. - Nike", "Don't worry, be happy. - Bob Marley","Hakuna Matata - Timon"]

var Quote2 =["Good friends help you find important things when you have lost them... things like your smile, your hope, and your courage - Doe Zantamata", "Don't feel stupid if you don't like what everyone else pretends to love. - Emma Watson", "When a woman is loved correctly, she becomes ten times the woman she was before. - Anonymous"]

var Quote3 =["Don't rush your healing, don't pretend to be okay when you're not and don't apologize for being broken. - Lizelle Gutierrez", "'Trust me.' 'You know I can't.' - Anonymous", "I was quiet, but I was not blind - Anonymous","The best revenge is no revenge. Move on, and be happy. - Anonymous"]

btn1.on("click", goQu1);
btn2.on("click", goQu2);
btn3.on("click", goQu3);

function goQu1(){
  var random = Math.random()*(Quote1.length - 1);
  var rounded = Math.floor(random);
  var Quote = Quote1[rounded];
  quotes.append(`<p> ${Quote}</p>`);
}

function goQu2(){
  var random = Math.random()*(Quote2.length - 1);
  var rounded = Math.floor(random);
  var Quote = Quote2[rounded];
  quotes.append(`<p> ${Quote}</p>`);
}

function goQu3(){
  var random = Math.random()*(Quote3.length - 1);
  var rounded = Math.floor(random);
  var Quote = Quote3[rounded];
  quotes.append(`<p> ${Quote}</p>`);
}
