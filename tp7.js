class Personne {
  constructor(nom, prenom, dateNaissance) {
    this.nom = nom;
    this.prenom = prenom;
    this.dateNaissance = new Date(dateNaissance);
  }

  presenter() {
    return `Je m’appelle ${this.prenom} ${this.nom}`;
  }

  age() {
    const today = new Date();
    let age = today.getFullYear() - this.dateNaissance.getFullYear();
    const monthDiff = today.getMonth() - this.dateNaissance.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < this.dateNaissance.getDate())) {
      age--;
    }
    return age;
  }
}

// Programme de test
const personne1 = new Personne('Dupont', 'Jean', '1990-06-15');
const personne2 = new Personne('Martin', 'Marie', '1985-12-20');

console.log(personne1.presenter()); // Affiche: Je m’appelle Jean Dupont
console.log(`Age: ${personne1.age()} ans`); // Affiche l'âge de Jean Dupont

console.log(personne2.presenter()); // Affiche: Je m’appelle Marie Martin
console.log(`Age: ${personne2.age()} ans`); // Affiche l'âge de Marie Martin
