// Convertir le code ci dessous en une structure switch
/*
let animal = "chien";
if (animal === "chat") {
    console.log("C'est un chat");
} else if (animal === "chien") {
    console.log("C'est un chien");
} else if (animal === "souris") {
    console.log("C'est une souris");
}
*/

function isadog(wouaf) {
    switch (wouaf) {
        case "chat":
            console.log("C'est un chat");
            break;
        case "chien":
            console.log("C'est un chien");
            break;
        case "souris":
            console.log("C'est une souris");
            break;
        default:
            console.log("C'est un autre animal");
    }
}