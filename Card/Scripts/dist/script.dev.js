"use strict";

function copyNumber(e) {
  var cardNumber = document.getElementById("txt-cardNumber");
  var inputCardNumber = document.getElementById("inputCardNumber");
  cardNumber.innerHTML = inputCardNumber.value;
}

function copyName(e) {
  var name = document.getElementById("txt-name");
  var inputName = document.getElementById("inputName");
  name.innerHTML = inputName.value;
}

function copyExp(e) {
  var exp = document.getElementById("txt-exp");
  var inputExp = document.getElementById("inputExpiration");
  exp.innerHTML = inputExp.value;
}

function generateRandom(e) {
  var random = Math.random() * 10000000000000000;
  var random2 = Math.trunc(random);
  var inputCardNumber = document.getElementById("inputCardNumber");
  inputCardNumber.value = random;
  var cardNumber = document.getElementById("txt-cardNumber");
  cardNumber.innerHTML = inputCardNumber.value;
}