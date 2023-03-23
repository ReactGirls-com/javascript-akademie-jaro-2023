// Změna obsahu nadpisu h1
let nadpisH1 = document.querySelector("h1");
nadpisH1.innerHTML = "Nadpis změněný z JavaScriptu!";

// Změna adresy obrázku
let obrazekObliceje = document.querySelector("#face-emoji");
obrazekObliceje.src = "yellow-face-pleased.svg";

// Změna stylů odstavce
let uvod = document.querySelector("#uvod");
uvod.style.color = "green";
uvod.style.textAlign = "right";

// Přidání třídy elementu
let ctverecek = document.querySelector(".ctverecek");
ctverecek.classList.add("aktivni");
