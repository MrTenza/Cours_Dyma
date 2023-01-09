const terre1 = {
  population: 7e7,
  satellite: "Lune",
};

const terre2 = {
  temperature: {
    min: -70,
    max: 60,
  },
  isOld: false,
};

// Fusionner 2 objet dans un objet vide //

//Methode 1 //
console.log(Object.assign({}, terre1, terre2));

//Methode 2 //

const terre = { ...terre1, ...terre2 };

console.log(terre);
