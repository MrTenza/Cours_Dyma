// ** => puissance de //
function powerBy(power) {
  return function (number) {
    return number ** power;
  };
}

const powerBy2 = powerBy(2);
console.log(powerBy2(3));

//stack //
// contexte d'execution global
//  => function powerBy / const powerBy2

//Context d'execution powerBy()
//power => ensuite il sort de la stack mais le power va rester

//  Ici se trouve la closure //
//Contexte d'execution powerBy2()
// number puis récupère le power dans la stack (environnement)

// Autre exemple , valable qu'avec let//
const a = () => {
  let arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }
  return arr;
};

const tab = a();
tab[0]();
tab[1]();
tab[2]();
