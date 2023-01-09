// Ancienne méthode //
function add() {
  console.log(arguments);

  let total = 0;

  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  console.log(total);
}
add(1, 2, 3, 4);

// Nouvelle versions , operateur rest  //
function add(...numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  console.log(total);
}
add(5, 6, 7, 8);
