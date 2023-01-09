// Objet JS //
const obj = {
  firstname: "jean",
  lastname: "Louis",
  age: 15,
};

// Format JSON //
//'{
//  "firstname": "jean",
//  "lastname": "Louis",
//  "age": 15
//}';

//Ancien format
// < object >
// <firstname>Jean</firstname>
// <lastname>Louis</lastname>
// <age>15</age>
//</object >

//Convertis un objet JS en JSON //
console.log(JSON.stringify(obj));

// Convertis un obj JSOn en JS //
console.log(JSON.parse('{"firstname":"jean","lastname": "Louis","age": 15}'));
