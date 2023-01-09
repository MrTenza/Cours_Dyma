const population = 50;

const terre = {
  population: 7e7,
  satellite: "Lune",
  temperature: {
    min: -70,
    max: 60,
  },
  isOld: false,
};

// Extraire les données de "terre" ainsi que stoquer dans "reste" toute les donnée non formuler dans le const //
const { population: populationTerre, ...reste } = terre;

console.log(populationTerre, reste);
