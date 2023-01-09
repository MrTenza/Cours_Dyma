// Trie par raport a la table ascii //
const a = [2, 25, 100, 54, 75, 489];

const b = ["ZEsst", "banane", "abricot", "peche", "Melon"];

const c = [
  {
    quantity: 100,
  },
  {
    quantity: 30,
  },
  {
    quantity: 145890,
  },
  {
    quantity: 1780,
  },
];

// Pour les nombres //
a.sort((d, e) => d - e);

// Pour les chaines de caractère //
b.sort((f, g) => f.localeCompare(g));

//Pour avoir en sens inverse //
// b.sort((f, g) => e.localeCompare(f) * -1);

// Pour les objet //
c.sort((h, i) => h.quantity - i.quantity);

console.log(a);
console.log(b);
console.log(c);
