/*Vous devez écrire une fonction qui détermine l'accès et les privilèges d'un utilisateur souhaitant réserver une place dans un club, en fonction de plusieurs critères : 
Age : La personne doit être majeure
Adhésion : membre / non membre
Type de réservation : standard, premium, VIP
Nombnre de personnes : le prix total dépend du nombre de personnes

Instructions : 
- Calculer le prix en fonction du type de réservation: standard: 20, premium: 35, VIP: 50€ & du nombre de personnes
- Vérifier l'age (doit être majeur)
- Réduction de 10% pour les membres 
- Afficher le prix final avec les privilèges pour le nombre de personnes données*/

function club(age, adhesion, type, nb_personnes) {
    let prix = 0;
    let reduction = 0;
    let total = 0;
    if (age < 18) {
        console.log("Vous devez être majeur pour accéder au club");
        return;
    } else {
        switch (type) {
            case "standard":
                prix = 20;
                break;
            case "premium":
                prix = 35;
                break;
            case "VIP":
                prix = 50;
                break;
            default:
                console.log("Type de réservation inconnu");
        }
        total = prix * nb_personnes;
        adhesion === "membre" ? reduction = total * 0.1 : reduction = 0;
        console.log(`Le prix final pour ${nb_personnes} personnes est de ${total - reduction} €`);
    }
}

club(18, "membre", "standard", 3);