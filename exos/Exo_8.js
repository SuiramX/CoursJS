// Ecrire un code qui prend la température & retourne via un opérateur ternaire 
// Il fait chaud si c'est supérieur à 25°C

function temperature(temp) {
    return temp > 25 ? "Il fait chaud" : "Il fait très froid";
}
console.log(temperature(26)); // Il fait chaud
console.log(temperature(25)); // Il fait très froid