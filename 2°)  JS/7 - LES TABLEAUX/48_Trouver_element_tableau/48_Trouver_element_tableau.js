const arr = ["Terre", "Lune", "Planète"];

// Trouver un élément , il utilise "===" / Si pas trouver -1//
console.log(arr.indexOf("Terre"));

// Avec include => Renvois True ou False//
console.log(arr.includes("azez"));

// on peux faire : //
if (arr.includes("Terre")) {
  console.log("C'est good !");
} else {
  console.log("Is no good !!");
}

// Avec des objets //
const arr2 = [
  {
    name: "Jupiter",
  },
  {
    name: "Venus",
  },
  {
    name: "Soleil",
  },
];

// Trouver un index avec un callback et avec finindexof / itere dans l'objet jusqu'a ce qu'il trouve "Soleil" //
const index = arr2.findIndex((elem) => elem.name === "Soleil");
console.log(index);

// Trouver un index avec find , il retourne directement l'objet trouvé //
const elem = arr2.find((elem) => elem.name === "Venus");
console.log(elem);
