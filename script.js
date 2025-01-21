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

//Étape 2 : création de deux fonctions différentes
function showIterativeFolder(dossierPrincipal) {
showFile(dossierPrincipal);
// Accède à la liste d'éléments principaux
let dossiers = dossierPrincipal.contenu;

// Parcourir et afficher les noms des éléments principaux
for (let element of dossiers) {
   if (element.contenu) {
        console.log(`🗂️ ${element.nom}`);
    } else {
        console.log(`📑 ${element.nom}`); 
    }
  }
}

showIterativeFolder(dossierPrincipal);


