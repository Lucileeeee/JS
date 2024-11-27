/**
 * 
 * @param {string} nom 
 * @param {number} poid 
 * @param {number} taille 
 */
class Imc {
    constructor(nom, poid, taille) {
        this.nom = nom;
        this.poid = poid;
        this.taille = taille;
        // Attribut en outMode
        this.imc = (this.poid/this.taille**2).toFixed(2);
    }
    display() {
        return `Bonjour, ${this.nom}, (${this.poid},  ${this.taille}) a un Imc de: ${this.imc}` 
    }
}

let list = [
    new Imc('Sébastien Chabal', 135, 1.7),
    new Imc('Escaladeuse', 45, 1.68),
    new Imc('JOJO', 300, 2),
    new Imc('Gontrand', 90, 1.75),
    new Imc('Colonel Clock', 200, 1.75),
    new Imc('Josiane de la Vega', 99, 1.55)
];
//? affichage de la list 
/* for (let i = 0 ; i < list.length; i++){
    console.log(list[i].display());
} */

//? version de jeff:
/* list.forEach((uneInstanceImc) => console.log(uneInstanceImc.display())); */


//! Deuxieme exo:
class Employee {
    constructor(nom, prenom, age, salaire){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.salaire = salaire;
        /* this.nbMoisPaye = nbMoisPaye;
        this.charges = charges; */
        this.salaireAnnuel = this.salaire * 12 * 1.9 ;
    }
    getSalaireAnnuel(){
        return this.salaireAnnuel;
    }
}
/* const example = new Employee("José", "bueno", 43, 3000);
console.log(example.getSalaireAnnuel()); */


class Pme extends Employee {
    constructor(nom, prenom, age, salaire, nomEntreprise, revenus, fraisFixes, fraisDAchats){
        super(nom, prenom, age, salaire);
        this.nomEntreprise = nomEntreprise;
       /*  this.tabEquipe = tabEquipe; */
        this.revenus = revenus;
        this.fraisFixes = fraisFixes;
        this.fraisDAchats = fraisDAchats;
    }
    bilanCalculed(tabEquipe){
        console.log(this.salaireAnnuel);
        for (let i = 0; i < Employee.length; i ++){
            console.log(this.salaireAnnuel);
        }
        return this.revenus - (this.fraisFixes + this.fraisDAchats )
    }
}

// // Scénario
const pme = new Pme(
    //Le nom entreprise
    "Ma Petite Entreprise - ",
    //L'equipe de salariés (un tableau)
    [
        new Employee("Duval", "Paul", 30, 2000),
        new Employee("Durand", "Alain", 40, 3000),
        new Employee("Dois", "Sylvia", 50, 4000)
    ],
    //le revenu , frais fixe, frais d'achat
    300000,
    20000,
    50000);

console.log(pme.bilanCalculed());
console.log(Employee.length);

//!partie correction:
class Employe {
    constructor(nom, prenom, age, salaireMensuel) {
        this._nom = nom;
        this._prenom = prenom;
        this._age = age;
        this._salaireMensuel = salaireMensuel;
        this._cout = this.calculCout();// Calcul cout annuel de l'employé :attribut en outMode
    }
    // me servira à passer le cout d 1 employé dans la classe PME
    getCout() {
        return this._cout;
    }
    //calcul cout total d 1 salarié
    calculCout() {
        const NB_MOIS_SAL = 12;
        const LA_TAXE = 0.9;
        //Un léger calcul
        return this._salaireMensuel * NB_MOIS_SAL * (1 + LA_TAXE);
    }
}

class Pm {
    constructor(nom, equipe, ventes, coutsFixes, achats) {
        this._nom = nom;
        this._equipe = equipe;
        this._cout = coutsFixes + achats;// On peut assigner directement un calcul ici
        this._ventes = ventes;
        this._bilan = 0;    // attribut en OutMode a calculer
    }
    bilanCalculed() {
        console.log(this._equipe);
        let cumulEquipe = 0;
        console.log(`${this._nom} : Cout Initial : ${this._cout}`);
        //Boucle qui parcourt le tableau des salariés (equipe)
        //Sur chaque salarié parcouru dans le tableau, on récupère et cumule le cout de ce Salarié
        for (let unSalarie of this._equipe) {
            cumulEquipe += unSalarie.getCout();
        }
        console.log(`${this._nom} : Cout Total Equipe : ${cumulEquipe}`);
        //Ensuite dans les couts de l'entreprise on cumul le cout de toute l'équipe
        this._cout += cumulEquipe;
        console.log(`${this._nom} : VENTES : ${this._ventes}`);
        //Dans les _cout on va avoir les frais fixe + frais achat et 
        //on vient de rajouter en + le cout total d'une equipe
        //donc le bilan de la pme : les ventes moins tous les couts (frais fixes, achat + cout total de l'equipe à l'année)
        this._bilan = this._ventes - this._cout;
        console.log(`${this._nom} : BILAN : ${this._bilan}`);
    }
}