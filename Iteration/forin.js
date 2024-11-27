const person = { name: 'John', age: 30 };

for (let key in person) {
    console.log(key, person[key]);
}
console.log(typeof person);