const a = "    Je, suis, le, Soleil     ";

// Vérifie que la chaine de caractère se termine bien par 'eil' //
const b = a.endsWith("eil");
const c = a.startsWith("Je");

// Retourne l'index de "suis" //
const d = a.indexOf("suis");

//Remplace une portion de la chaine de caractere par un autre mot //
const e = a.replace("suis", "ne suis pas");

// Coupe une partie de la chaine de caractere //
const f = a.slice(3, a.length);

// Retire tout les espace au début et a la fin //
const g = a.trim();

// Transformer en majuscule //
const h = a.toUpperCase(a);

//Découpe une chaine de caractere sous forme de tableau  //
const i = a.split(",");

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);
