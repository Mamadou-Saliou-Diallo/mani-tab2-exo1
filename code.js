// Fonction pour demander à l'utilisateur de remplir un tableau
function remplirTableau(nomTableau) {
    let tableau = [];
    for (let i = 0; i < 5; i++) {
        let valeur = prompt(`Veuillez entrer la valeur ${i + 1} pour ${nomTableau}:`);
        tableau.push(valeur);
    }
    return tableau;
}

// Remplir les tableaux tab1 et tab2
let tab1 = remplirTableau("tab1");
let tab2 = remplirTableau("tab2");

// Créer tab3 avec les éléments de tab1 qui ne se trouvent pas dans tab2
let tab3 = tab1.filter(element => !tab2.includes(element));

// Créer tab4 avec les éléments de tab1 qui se trouvent dans tab2
let tab4 = tab1.filter(element => tab2.includes(element));

// Afficher les résultats
console.log("tab1:", tab1);
console.log("tab2:", tab2);
console.log("tab3 (éléments de tab1 qui ne sont pas dans tab2):", tab3);
console.log("tab4 (éléments de tab1 qui sont dans tab2):", tab4);