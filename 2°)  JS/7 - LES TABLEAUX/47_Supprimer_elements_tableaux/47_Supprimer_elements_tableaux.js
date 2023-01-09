const arr = [1, 2, 3];

// Supprimer au début //
arr.shift();
console.log(arr);

//Supprime à la fin //
arr.pop();
console.log(arr);

const arr2 = [1, 2, 3, 4, 5];

// Supprimer le premier élément //
const [, ...arr3] = arr2;
console.log(arr3);

// Supprime un élément au milieu du tableau (index 2 et 1 élément) //
arr2.splice(2, 1);
console.log(arr2);
