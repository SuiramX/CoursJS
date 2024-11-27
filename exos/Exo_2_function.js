
function ispremier(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;

}

console.log(ispremier(2));
console.log(ispremier(3));
console.log(ispremier(4));
console.log(ispremier(5));

function Cercle(rayon) {
    let aire = Math.PI * rayon * rayon;
    return aire;
}

console.log(Cercle(5));

function tri(nombres) {
    return nombres.sort((a, b) => a - b);
}


const tableau = [5, 3, 8, 1];
function TriTableau(tableau, tri) {
    return tableau.sort(tri);
}

function TriCroissant(a, b) {
    return a - b;
}

function TriDecroissant(a, b) {
    return b - a;
}

console.log(TriTableau(tableau, TriCroissant));
console.log(TriTableau(tableau, TriDecroissant));

