//Différente manière de créer un tableau //

const arr = [1, "deux", { foo: "bar" }, [1, 2, 3]];

const arr2 = Array(1, 2, 3);

const arr3 = new Array(2, 3, 4);

// Tableau statique itérable //

const arr4 = Array.from("hello");

// Tableau avec une indexaction //

const arr5 = Array.from([1, 2, 3], (nbr) => nbr + 1);

// Vérifier qu'un objet est dans le tableau //

console.log(Array.isArray(arr));

console.log(arr);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);
