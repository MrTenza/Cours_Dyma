const a = {
  name: "Toto",
  foo: {
    bar: "zoo",
  },
};

// Facon superficielle (shadow), 2 methodes //
//const b = Object.assign({}, a);

//const c = { ...a };

// Facon profonde //
const b = JSON.parse(JSON.stringify(a));

// Modification de name seulement pour le const b mais prend pas en compte les objet imbriquer pour la methode shadow  //
b.name = "Tata";
b.foo.bar = 123;

console.log(b);
console.log(a);
//console.log(c);
