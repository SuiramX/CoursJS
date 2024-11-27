// Calculteur de billets de Parc d'attractions 
/*
Enfant (moins de 12) : 10€
Adolescent ( 12 à 17) : 15€
Adulte (18 à 64 ans) : 20€
Senior : 12€
Réduction de 10% pour les groupes de 4 personnes ou plus.
Réduction de groupe 15% pour les groupes de 6 personnes ou plus.
*/

function parc(age, nb_personnes) {
    let prix = 12;
    let reduction = 0;
    let total = 0;
    if (age < 12) {
        prix = 10;
    } else if (age >= 12 && age <= 17) {
        prix = 15;
    } else if (age >= 18 && age <= 64) {
        prix = 20;
    }
    total = prix * nb_personnes;
    if (nb_personnes >= 6) {
        reduction = total * 0.15;
    } else if (nb_personnes >= 4 && nb_personnes < 6) {
        reduction = total * 0.1;
    }
    console.log(`Le prix final pour ${nb_personnes} personnes est de ${total - reduction} €`);
}


parc(18, 3);
parc(10, 5);
parc(15, 6);
parc(65, 4);