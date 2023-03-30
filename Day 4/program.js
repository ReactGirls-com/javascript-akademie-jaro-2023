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

	let vstupnePolicko = document.querySelector("#number-input");
	let odesilaciTlacitko = document.querySelector("#submit-button");

	odesilaciTlacitko.addEventListener("click", function() {
		let hadaneCislo = vstupnePolicko.value;
		console.log(hadaneCislo)
	});

});
