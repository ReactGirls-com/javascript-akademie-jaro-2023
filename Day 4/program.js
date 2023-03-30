// Funkce pro vygenerování náhodného celého čísla mezi hodnotami minimum
// (včetně) a maximum (včetně).
function nahodneCislo (minimum, maximum) {
	let vysledek = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
	return vysledek;
}

let minCislo = 1;
let maxCislo = 100;

window.addEventListener("load", function() {

	let vygenerovaneCislo = nahodneCislo(minCislo, maxCislo);
	// console.log('vygenerovane cislo', vygenerovaneCislo)

	let vstupnePolicko = document.querySelector("#number-input");
	let odesilaciTlacitko = document.querySelector("#submit-button");
	let komunikacniOkenko = document.querySelector("#message");

	odesilaciTlacitko.addEventListener("click", function() {
		let hadaneCislo = Number(vstupnePolicko.value);

		if (hadaneCislo === vygenerovaneCislo) {
			komunikacniOkenko.innerHTML = "Gratulujem, je to presne ono."
		} else if (hadaneCislo < vygenerovaneCislo) {
			komunikacniOkenko.innerHTML = "Cislo je nizsi nez to, na ktere myslim."
		} else if (hadaneCislo > vygenerovaneCislo) {
			komunikacniOkenko.innerHTML = "Cislo je vyssi nez to, na ktere myslim."
		}

	});

});
