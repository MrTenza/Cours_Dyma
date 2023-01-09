const arr = [1, 2, 3];

// Créer 2 constante qui récupère chacune pour l'une le premier élément et pour l'autre le deuxieme élément //

//const [a, b] = arr;

// Récupere le premier élément , ainsi que le reste //

//const [a, ...rest] = arr;
//console.log(a);
//console.log(rest);

const arr2 = [["terre", "lune"], "planètes"];

const arr3 = ["terre", "lune", "planètes"];
// Récupère les deux tableaux //
//const [[a, b], c] = arr2;
//console.log(arr2);

// Récupère seulement le deuxième élément du premier tableau  //
//const [[, b]] = arr2;
//console.log(b);

// Supprimer le premier élément et recrée le tableau en arr4 //
//const [, ...arr4] = arr3;
//console.log(arr4);

// Inverser les valeur entre "a" et "b //"
let a = "a ";
let b = "b";

[a, b] = [b, a];
console.log("a => ", a);
console.log("b => ", b);
