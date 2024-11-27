let phrase = "Bonjour tout le monde";
let voyelle = ["a", "e", "i", "o", "u", "y"];


function voyelleinphrase(phrase) {
    let compteur = 0;
    for (let i = 0; i < phrase.length; i++) {
        for (let j = 0; j < voyelle.length; j++) {
            if (phrase[i] === voyelle[j]) {
                compteur++;
            }
        }
    }
    return compteur;
}

console.log(voyelleinphrase(phrase));

function motsuniquesinphrase(phrase) {
    let mots = phrase.split(" ");
    let motsuniques = [];
    for (let i = 0; i < mots.length; i++) {
        if (motsuniques.indexOf(mots[i]) === -1) {
            motsuniques.push(mots[i]);
        }
    }
    return motsuniques;
}

console.log(motsuniquesinphrase(phrase));

nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function nombrecarreimpaire(nombres) {
    let carreimpaire = [];
    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i] % 2 !== 0) {
            nombres[i] = nombres[i] * nombres[i];
        }
    }
    return carreimpaire;
}

console.log(nombrecarreimpaire(nombres));

function occurencemotinphrase(phrase) {
    let mots = phrase.split(" ");
    let occurence = {};
    for (let i = 0; i < mots.length; i++) {
        if (occurence[mots[i]]) {
            occurence[mots[i]]++;
        } else {
            occurence[mots[i]] = 1;
        }
    }
    return occurence;
}

test = "Bonjour tout le monde, tout le monde est content de voir tout le monde";
console.log(occurencemotinphrase(test));
