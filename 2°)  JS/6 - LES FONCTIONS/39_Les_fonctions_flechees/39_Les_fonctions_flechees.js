// Fonctions fleché est forcément anonyme //

const a = (param) => {
  console.log(param);
};
a("foo");

const b = (param, param2) => {
  console.log(param);
};
a("foo " + "bar");

// Emmetre les accolades //
const c = (b, c) => b + c;
console.log(c(5, 5));

//Objet littéral //
const d = (c, d) => ({
  g,
  z,
  total: g + z,
});
console.log(d);

//This //
const e = () => {
  console.log(this);
};
e();

const f = {
  foo: "bar",
};
e.call(f);

//Cas moins pratique avec methode//

const g = {
  foot: "bar",
  fn: () => {
    console.log(this);
  },
};
g.fn();

//Ici retourne l'objet //
const h = {
  fooot: "bar",
  fn() {
    const fn2 = () => {
      console.log(this);
    };
    fn2();
  },
};
h.fn();
