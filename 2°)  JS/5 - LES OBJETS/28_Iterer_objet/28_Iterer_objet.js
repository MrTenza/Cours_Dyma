const obj = {
  a: "un",
  b: "deux",
  c: "trois",
};

// Iterer sur obj //
for (prop in obj) {
  console.log(obj);
  console.log(obj[prop]);
}

// retourne un tableau avec toute les keys //
console.log(Object.keys(obj));

//Extrait les différentes keys du tableau //
console.log(Object.values(obj));

//Recupere la keys et la valeur //
console.log(Object.entries(obj));
