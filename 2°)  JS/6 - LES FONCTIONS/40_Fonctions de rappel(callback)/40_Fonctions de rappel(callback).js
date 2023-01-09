// Fonction qui contiens une autre fonction et que l'on va invoquer à la fin //

const cb = () => {
  console.log("cb");
};

function fn(a, cb) {
  console.log("a :", a);
  cb();
}
//Execute fn puis appelle la fonction cb//
fn("Je suis a ", cb);

//On peux passer des paramètres //
const b = (p1, p2) => {
  console.log("b", p1, p2);
};

function fm(a, cb) {
  console.log("a :", a);
  const p1 = 1,
    p2 = 2;
  cb(p1, p2);
}
fm("Je suis a ", b);

// Sans utiliser de variable //
function fi(a, cb) {
  console.log("a : ", a);
  cb(a);
}
fi("Je suis a", (foo) => {
  console.log("cb : ", foo);
});
