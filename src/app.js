/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Función generadora número random (= posición dentro del array)
function randomNumber(array) {
  const numRandomPosition = Math.floor(Math.random() * array.length);
  return array[numRandomPosition];
}

function generateRandonCard() {
  let suit = ["diamantes", "corazones", "picas", "treboles"];
  let numtarjeta = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

  //Asignación num random al array numtarjeta
  const numberCard = document.getElementById("number"); //Conexión js-html
  numberCard.innerHTML = randomNumber(numtarjeta); //Introducción num random en el id utilizando directamente la función

  //Asignación num random al array suit
  const numRandomsuit = randomNumber(suit); //const guarda num random para que sea el mismo en varios id
  //Conexión js-html
  const logoCardTop = document.getElementById("logtop");
  const logoCardBottom = document.getElementById("logbotton");
  //Introducción numRandomsuit en los id
  logoCardTop.className = numRandomsuit;
  logoCardBottom.className = numRandomsuit;
  // Otra forma de resolver con el arraya suit
  /*const logo = document.getElementsByClassName("logo");
          for (let i = 0; i < logo.length; i++) {
            logo[i].innerHTML = numRandomSuit;
          }*/
}

window.onload = function() {
  // Generador de cartas
  document
    .querySelector("#btnewCard")
    .addEventListener("click", generateRandonCard); //Botón

  window.setInterval(generateRandonCard, 10000); //Timer

  // Botón cambiador tamaño
  summitButtom.addEventListener("click", printWidthHeight);
};

// Cambiador tamaño carta

const widthInput = document.querySelector("#widthCard");
const heightInput = document.querySelector("#heightCard");
const cardElement = document.querySelector("#card");

const printWidthHeight = () => {
  console.log(widthInput.value, heightInput.value);
  cardElement.style.width = widthInput.value + "px";
  cardElement.style.height = heightInput.value + "px";
};
