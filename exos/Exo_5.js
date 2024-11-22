function prix() {
    var prix = prompt("Entrez le prix de l'article");
    var quantite = prompt("Entrez la quantité de l'article");
    var total = prix * quantite;
    var remise = total * 0.1;
    var total_final = total - remise;
    console.log(`Le prix total est de ${total_final} €`);
}