const display = document.getElementById("display");

// Fonction pour ajouter un chiffre ou opérateur à l'affichage
function appendToDisplay(value) {
    display.value += value;
}

// Fonction pour effacer l'affichage
function clearDisplay() {
    display.value = "";
}

// Calculer le résultat
function calculateResult() {
    const input = display.value;
}