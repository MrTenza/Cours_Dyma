const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [7, 8, 9];

const d = [...a, ...b, ...c];

// Ou //
//const d = a.concat(b).concat(c);//

console.log(d);
