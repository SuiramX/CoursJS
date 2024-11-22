const z = 15
// z = 20; // Error: Assignment to constant variable.

const person = { name: "Alice" };
person.name = "Bob"; // No error
console.log(person); // { name: "Bob" }

// J'aimerai change name en nom en gardant la valeur de Bob
person.nom = person.name;
delete person.name;
console.log(person.nom); // { nom: "Bob" }


