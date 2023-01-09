// let i => Index de la boucle / i<3 => A partir de quand la boucle se termine / i++ => De qu'elle facon on va incrémenter i //

for (let i = 0; i < 3; i++) {
  console.log(i);
  // Quand i = 1 , on stope la boucle //
  if (i === 1) {
    break;
  }
}
console.log("out");

for (let i = 0; i < 3; i++) {
  // Quand i = 1 , on sort de l'itératiuon en cours et on passe à la suite  //
  if (i === 1) {
    continue;
  }
  console.log(i);
}
console.log("out");

for (let i = 3; i > 0; i--) {
  console.log(i);
}
