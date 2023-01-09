const terre = {
  population: 7e7,
  satellite: "Lune",
  temperature: {
    min: -70,
    max: 60,
  },
  isOld: false,
};

// Verifier si une propriete population est présent dans la  const Terre //
if (terre.hasOwnProperty("temperature")) {
  // Ou : "temperature" in terre //
  console.log("ok");
} else {
  console.log("ko");
}
