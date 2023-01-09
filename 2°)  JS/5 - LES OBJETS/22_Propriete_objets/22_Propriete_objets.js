// Déclaration de l'objet //
const terre = {
  population: 7e7,
  satellite: "Lune",
  temperature: {
    min: -70,
    max: 60,
  },
  isOld: false,
  getTemperature() {
    console.log("15");
  },
};

// Recherche dans l'objet //
console.log(terre.population);

console.log(terre["satellite"]);

const prop = "temperature";
console.log(terre[prop]);

// Modification de isOld //
const copy = terre;
copy.isOld = true;
console.log(terre);

terre.getTemperature();
