function decimalToBinary(n) {
    if (n === 0) return "0";
    const sign = n < 0 ? "-" : "";
    let num = Math.abs(Math.trunc(n));
    let bin = "";
    while (num > 0) {
        bin = (num % 2) + bin;
        num = Math.floor(num / 2);
    }
    return sign + bin;
}

// fonction appelée par le onclick de ton bouton
function convertToBinary() {
    const input = document.getElementById("decimalInput").value.trim();
    const result = document.getElementById("binaryResult");

    // reset du résultat
    result.textContent = "";

    // vérifier que c’est un entier
    if (!/^-?\d+$/.test(input)) {
        // entrée non numérique → ne rien afficher
        return;
    }

    const n = parseInt(input, 10);
    result.textContent = decimalToBinary(n);
}
