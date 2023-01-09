// iife //
var c = 1;
const $ = (function () {
  var a = 1;
  var b = 2;

  return function () {
    console.log("jquery");
  };
})();

function essais() {
  let essais = "ca marche";
}

// le var a n'est disponible que dans ce script mais pas dans d'autre fichier JS importezr dabns le fichier HTML //
