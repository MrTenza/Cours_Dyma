// Déclarer une fonction //
function func() {
  console.log("func exec");
}
func();

// Expressions de fonction //

// Fonction nommé //
const fn = function func2() {
  console.log("Func 2 exec");
};
fn();

// Fonction anonyme //
const fn3 = function () {
  console.log("fn3 exec");
};
fn3();

// Voir la fonction //
console.log(fn);
