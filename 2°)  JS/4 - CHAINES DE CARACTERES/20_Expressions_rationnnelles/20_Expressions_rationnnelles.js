const a = "je suis le 6soleil";
const b = "maphoto_123456.jpg";

// Recherche le mot suis dans la chaine de caractere //
const evaluate = /suis/.test(a);

// Recupere n'importe qu'elle chiffre entre 1 et 9 avec /d //
const evaluate2 = /\ds/.test(a);

// Recupere tout sauf les nombres //
const evaluate3 = /\Ds/.test(a);

// Recupere n'importe qu'elle lettre entre a et z
const evaluate4 = /.[a-z]/.test(a);

// Recuperer const b sans l'extension => tout les caractere et on s'arrete quand il y a un point //
const evaluate5 = /(.*)\./.exec(b);

// On peut faire aussi : //
b.match(/(.*)\./);

console.log(evaluate);
console.log(evaluate2);
console.log(evaluate3);
console.log(evaluate4);
console.log(evaluate5);
