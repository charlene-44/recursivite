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

//Étape 2 : création de deux fonctions différentes ainsi qu'Étape 3
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
