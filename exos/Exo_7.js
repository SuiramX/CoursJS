// Convertir le code ci dessous en une structure if/else
/*
    let color = "bleu";
    switch (color) {
    case "rouge":
        console.log("La couleur est rouge");
        break;
    case "bleu":
        console.log("La couleur est bleu");
        break;
    case "vert":
        console.log("La couleur est vert");
        break;
    default:
        console.log("La couleur est inconnue");
    }
*/
function color() {
    let color = "bleu";
    if (color === "rouge") {
        console.log("La couleur est rouge");
    } else if (color === "bleu") {
        console.log("La couleur est bleu");
    } else if (color === "vert") {
        console.log("La couleur est vert");
    } else {
        console.log("La couleur est inconnue");
    }
}