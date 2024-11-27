let nombreauhasard = Math.floor(Math.random() * 50); +1;
let compteur = 0;

while (nombreauhasard <= 20) {
    console.log("irération " + compteur);
    nombreauhasard = Math.floor(Math.random() * 50) + 1;
    compteur++;
}
console.log("Trouvé en " + compteur + " itérations");