        // Fonction pour demander à l'utilisateur de remplir un tableau
        function remplirTableau(nomTableau) {
            let tableau = [];
            for (let i = 0; i < 5; i++) {
                let valeur = prompt(`Veuillez entrer la valeur ${i + 1} pour ${nomTableau}:`);
                tableau.push(valeur);
            }
            return tableau;
        }

        // Fonction pour afficher les résultats dans le navigateur
        function afficherResultats(tab1, tab2, tab3, tab4) {
            const resultatsDiv = document.getElementById('resultats');
            resultatsDiv.innerHTML = `
                <p><strong>tab1 :</strong> ${tab1.join(', ')}</p>
                <p><strong>tab2 :</strong> ${tab2.join(', ')}</p>
                <p><strong>tab3 :</strong> ${tab3.join(', ')}</p>
                <p><strong>tab4 :</strong> ${tab4.join(', ')}</p>
            `;
        }

        // Événement pour remplir les tableaux et afficher les résultats
        document.getElementById('demanderValeurs').addEventListener('click', () => {
            let tab1 = remplirTableau("tab1");
            let tab2 = remplirTableau("tab2");

            // Créer tab3 et tab4
            let tab3 = tab1.filter(element => !tab2.includes(element));
            let tab4 = tab1.filter(element => tab2.includes(element));

            // Afficher les résultats
            afficherResultats(tab1, tab2, tab3, tab4);
        });