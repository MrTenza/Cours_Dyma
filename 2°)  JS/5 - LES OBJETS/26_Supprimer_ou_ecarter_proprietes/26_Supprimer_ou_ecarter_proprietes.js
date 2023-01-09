const terre = {
  population: 7e7,
  satellite: "Lune",
  temperature: {
    min: -70,
    max: 60,
  },
  isOld: false,
};

// Ajouter une entrée a const terre //
terre.ajout_1 = true;

terre["ajout_2"] = true;

const ajout_3 = "ajout_3";
terre[ajout_3] = true;

// Supprimer une entrée //
delete terre.ajout_1;

// Ecarter une entrée //
terre.ajout_2 = null;

//Récuperer tout sauf population //
const { population, ...copyTerre } = terre;

console.log(terre);
console.log(copyTerre);
