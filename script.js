const dossierPrincipal = {
  nom: "Ada",
  contenu: [
    {
      nom: "Projets collectifs Ada",
      contenu: [
        {
          nom: "Pico8",
          contenu: [
            {
              nom: "mariokart.p8",
            },
          ],
        },
        {
          nom: "Dataviz",
          contenu: [
            {
              nom: "index.html",
            },
            {
              nom: "script.js",
            },
          ],
        },
      ],
    },
    { nom: "CV.pdf" },
    {
      nom: "Projets persos",
      contenu: [
        {
          nom: "Portfolio",
          contenu: [
            {
              nom: "index.html",
            },
            {
              nom: "script.js",
            },
          ],
        },
      ],
    },
  ],
};

//Étape 1 : fonction qui affiche le dossier principal
function showFile(dossierPrincipal) {
  console.log(`🗂️ ${dossierPrincipal.nom}`);
}

//Étape 2 : création de deux fonctions différentes ainsi qu'Étape 3, affichage de tous les dossiers et fichiers
function showIterativeFolder(dossierPrincipal) {
  let stack = [{ folder: dossierPrincipal, depth: 0 }];

  // Affiche le dossier principal une seule fois
  showFile(dossierPrincipal);

  while (stack.length > 0) {
    let elementWithDepth = stack.pop();
    let element = elementWithDepth.folder;

    if (
      element !== dossierPrincipal &&
      element.contenu &&
      Array.isArray(element.contenu)
    ) {
      showFile(element); // Affiche les sous-dossiers avec leur icône
    } else if (element !== dossierPrincipal) {
      console.log(`📑 ${element.nom}`); // Affiche les fichiers avec leur icône
    }

    if (element.contenu && Array.isArray(element.contenu)) {
      for (let i = element.contenu.length - 1; i >= 0; i--) {
        stack.push({
          folder: element.contenu[i],
          depth: elementWithDepth.depth + 1,
        });
      }
    }
  }
}

// Appel de la fonction itérative avec ordre correct des dossiers et fichiers
showIterativeFolder(dossierPrincipal);

function showRecursiveFolder(folder) {
  if (Array.isArray(folder)) {
    folder.forEach((subFolder) => {
      if (subFolder.contenu && Array.isArray(subFolder.contenu)) {
        console.log(`🗂️ ${subFolder.nom}`);
        showRecursiveFolder(subFolder.contenu);
      } else {
        console.log(`📑 ${subFolder.nom}`);
      }
    });
  }
}
showFile(dossierPrincipal);
showRecursiveFolder(dossierPrincipal.contenu);


// Étape 4 : comparaison des deux fonctions
// Je trouve que la récursivité est plus simple à lire et à comprendre alors que la fonction itérative me paraît plus complexe

// Avantages & inconvénients de la fonction itérative :
// Avantages : elle est plus performante terme de consommation de mémoire,
// elle est plus prévisible et permet une certaine simplicité pour des structures limitées
// Inconvénients : code moins lisible, et plus difficile à maintenir, c'est moins intuitif pour les arborescences

// Avantages & inconvénients de la fonction récursive : 
// Avantages : elle est plus souvent intuitive et reflète directement la structure des fichiers, elle est plus flexible et le code est plus lisible, plus facile à comprendre
// Inconvénients : elle peut vite être dépassée si la structure est trop grande à gérer et ça la rend donc instable et au niveau de la performance, dans certains langages
// elle peut être gourmande en terme de consommation de mémoire ou scénarios à cause des appels récursifs