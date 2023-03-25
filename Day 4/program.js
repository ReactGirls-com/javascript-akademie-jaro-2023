// Funkce pro vygenerování náhodného celého čísla mezi hodnotami minimum (včetně) a maximum (včetně).
function nahodneCislo(minimum, maximum) {
	let vysledek = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
	return vysledek;
}
