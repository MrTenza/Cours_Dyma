// Meme fonctionnalité que le if , marche aussi de comparer avec une chaine de caractère /
const age = 12;
switch (age) {
  case 21: {
    console.log("Tu peux commencer à boire de l’alcool aux Etats-Unis.");
    break;
  }
  case 18: {
    console.log("Tu peux commencer à boire de l’alcool en France.");
    break;
  }
  case 16: {
    console.log("Tu peux commencer à boire de l’alcool à Cuba.");
    break;
  }
  case 14: {
    console.log("Tu peux commencer à boire de l’alcool en Allemagne.");
    break;
  }
  default: {
    console.log("Rien pour toi cette année.");
    break;
  }
}

//Raccourcis //

const pays = "France";
switch (pays) {
  case "France":
  case "Allemagne":
  case "Italie":
  case "Espagne":
    console.log("Tu es européen !");
    break;
  case "Corée":
  default:
    console.log("Tu n’es pas européen.");
}
