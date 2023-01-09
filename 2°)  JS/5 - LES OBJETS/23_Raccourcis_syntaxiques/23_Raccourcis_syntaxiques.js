// Déclaration de l'objet //
const population = 7e7;
const satellite = "Lune";
const temperature = {
  min: -70,
  max: 60,
};

const pop = "population";

const terre = {
  [pop]: population,
  satellite,
  temperature,
  isOld: false,
};

console.log(terre);
