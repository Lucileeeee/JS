class Imc {
    /**
     * 
     * @param {*} nom 
     * @param {*} poid 
     * @param {*} taille 
     */
    constructor(nom, poid, taille) {
    this.nom = nom;
    this.poid = poid;
    this.taille = taille;
    // Attribut en outMode
    this.imc = (poid/taille**2).toFixed(2);
    this.resume = this.display(); 
    }
    display() {
    return `Bonjour, ${this.nom}, (${this.poid},  ${this.taille}) a un Imc de: ${this.imc}` ;
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

for (let i = 0 ; i < list.length; i++){
    console.log(list[i].display());
}