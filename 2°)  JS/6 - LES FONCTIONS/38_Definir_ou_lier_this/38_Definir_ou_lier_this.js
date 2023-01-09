const b = {
  name: " Jean",
  lastName: " Louis",
};

function bonjour(lang) {
  if (lang === "fr") {
    console.log(`Bonjour: ${this.name + this.lastName}`);
  } else {
    console.log(`Hello: ${this.name + this.lastName}`);
  }
}

// Fait référence à la cont b //
bonjour.call(b, "fr");

//Apply sert à faire passer un array avec les parametres à l'intérieur  => bonjour.apply (b,["fr"])//

// Bind retourne une nouvelle version de la fonction //
const c = bonjour.bind(b);
c("fr");
