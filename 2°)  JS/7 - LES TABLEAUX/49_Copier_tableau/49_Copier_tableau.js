const arr = [
  1,
  {
    name: "soleil",
  },
  2,
  3,
];

// 3 Méthodes pour copier en surface //
// const copy = arr.slice()
// const copy = [...arr]
const copy = Array.from(arr);
copy.push(4);
console.log("arr : ", arr);
console.log("copy : ", copy);

// Methode en copie profonde //
const copy2 = JSON.parse(JSON.stringify(arr));
//Modif de l'objet //
copy2[1].name = "Lune";
console.log("arr : ", arr);
console.log("copy2 : ", copy2);
