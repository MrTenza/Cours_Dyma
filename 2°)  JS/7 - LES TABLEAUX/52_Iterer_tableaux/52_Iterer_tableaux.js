const arr = [1, 2, 3];

//Anciennne méthode //
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//Nouvelle méthode //
for (let iteration of arr) {
  console.log(iteration);
}

// Parcourir chacun des éléments //
arr.forEach((value, index) => {
  console.log(`value: ${value}, index: ${index}`);
});
