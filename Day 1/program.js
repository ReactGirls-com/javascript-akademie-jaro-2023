// // Pozdravení uživatele
// let vstup = prompt("Zadej svoje jméno:");
// console.log(`Ahoj, tvoje jméno je ${vstup}.`);

// --------------------------------------------------

// // Načtení čísla od uživatele
// let hodina = Number(prompt("Zadej, kolik je hodin:"));
// if (hodina < 9) {
// 	console.log("Je ráno.");
// } else if (hodina < 12) {
// 	console.log("Je dopoledne.");
// } else if (hodina === 12) {
// 	console.log("Je poledne.");
// } else {
// 	console.log("Je odpoledne.");
// }

// --------------------------------------------------

// // Vypsání všech lichých čísel od 1 do 9
// for (let i = 1; i <= 9; i++) {
// 	if (i % 2 === 1) {
// 		console.log(i);
// 	}
// }

// --------------------------------------------------

// // Pozdravení uživatele pomocí funkce

// function pozdravUzivatele() {
// 	let jmeno = prompt("Zadej svoje jméno:");
// 	console.log(`Ahoj, tvoje jméno je ${jmeno}.`);
// }

// pozdravUzivatele();
// pozdravUzivatele();

// --------------------------------------------------

// // Aritmetický průměr tří čísel
// function aritmetickyPrumer(cislo1, cislo2, cislo3) {
// 	let vysledek = (cislo1 + cislo2 + cislo3) / 3;
// 	return vysledek;
// }

// let prumer1 = aritmetickyPrumer(2, 4, 7);
// let prumer2 = aritmetickyPrumer(2, 3, -305);
// console.log(prumer1);
// console.log(prumer2);

// --------------------------------------------------

// // Funkce pro výpočet délky přepony na základě délek obou odvěsen pravoúhlého trojúhelníku
// function delkaPrepony(odvesnaA, odvesnaB) {
// 	let vysledek = Math.sqrt(odvesnaA * odvesnaA + odvesnaB * odvesnaB);
// 	return vysledek;
// }

// let prepona = delkaPrepony(3, 4);
// console.log(prepona);

// --------------------------------------------------

// // Funkce pro vygenerování náhodného celého čísla mezi hodnotami minimum (včetně) a maximum (včetně).
// function nahodneCislo(minimum, maximum) {
// 	let vysledek = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
// 	return vysledek;
// }

// // Funkce pro hod hrací kostkou o libovolném počtu stěn. Pro obvyklou kostku by se použilo volání hodKostkou(6).
// function hodKostkou(pocetSten) {
// 	let vysledek = nahodneCislo(1, pocetSten);
// 	return vysledek;
// }
