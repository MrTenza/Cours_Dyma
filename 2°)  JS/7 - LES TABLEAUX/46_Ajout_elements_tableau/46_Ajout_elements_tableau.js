let arr = [1, 2, 3];

//Modifier le premier élément du tableau //
arr[0] = "Terre";
console.log(arr[0]);

//Ajouter au début //
arr.unshift("lune");
console.log(arr);

// Autre méthode pour ajouter au début //
arr = ["Constellations", ...arr];
console.log(arr);

//A la fin //
arr.push("saturne");
console.log(arr);

// Autre méthode pour ajouter à la fin //
arr = [...arr, "planètes"];
console.log(arr);

// Ajout ou suppression d'un élément
//1ier parametre => index de départ //
//2ieme parametre => nombre d'éléments à supprimer  //
//3ieme parametre => nombre d'éléments à ajouter  //
arr.splice(1, 0, "cratères");
console.log(arr);
