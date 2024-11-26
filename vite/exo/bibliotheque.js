class Livre {
    constructor(titre, auteur){
        this.titre = titre,
        this.auteur = auteur,
        this.disponible = true
    }
    emprunter(){
        this.disponible = false;
    }
    retourner(){
        this.disponible = true;
    }
}

class Bibliotheque{
    constructor (nom){
        this.nom = nom,
        this.livres = []
    }
    ajouterLivre(livre){
        this.livres.push(livre);
    }
    emprunterLivre(titre){
        try{
            console.log('titre :',titre);
            let trouve = this.livres.find((element) => element.titre == titre);
            trouve.emprunter();
            console.log(trouve.disponible);
            if(!trouve){
                console.log('problemos');
            }
        }
        catch(error){
            console.error('Erreur : ', error);
        }
    }
}

//? Exemple d'utilisation scénario
const livre1 = new Livre("1984", "George Orwell");
const livre2 = new Livre("Le Gros Petit Prince", "Steven Seagal");

const maBibliotheque = new Bibliotheque("Ma Bibliothèque");

maBibliotheque.ajouterLivre(livre1);
maBibliotheque.ajouterLivre(livre2); 
maBibliotheque.emprunterLivre('1984');

//!console.log(maBibliotheque);
/*
maBibliotheque.emprunterLivre("1984"); // Livre emprunté avec succès.
maBibliotheque.emprunterLivre("1984"); // Déclenche exception livre n'est plus disponible.
maBibliotheque.retournerLivre("1984"); // Livre retourné avec succès.
maBibliotheque.emprunterLivre("198999"); // Déclenche exception livre n'existe pas.
*/

//! partie correction Jeff:
class Livree {
    constructor(titre, auteur) {
        this.titre = titre;
        this.auteur = auteur;
        this.disponible = true;
    }
    emprunter() {
        try {
            if (!this.disponible) {
                throw new Error(`Le livre "${this.titre}" n'est pas disponible.`);
            }
            this.disponible = false;
        } catch (error) {
            console.error(error.message);
        }
    }
    retourner() {
        this.disponible = true;
    } 
}

class Bibliothequee {
    constructor(nom) {
        this.nom = nom;
        this.livres = [];
    }
    ajouterLivre(livre) {
        this.livres.push(livre);
    }
    emprunterLivre(titre) {
        try {
            const livre = this.livres.find(unLivre => unLivre.titre === titre);
            // console.log(livre);
            // Si on a pas trouvé le livre, si le find nous a retourné undefined,
            // alors on lève une erreur custom
            if (!livre) {
                throw new Error(`Le livre "${titre}" n'existe pas dans la bibliothèque.`);
            }
            livre.emprunter();
        } catch (error) {
            console.error(error.message);
        }
    }
    retournerLivre(titre) {
        try {
            const livre = this.livres.find(unLivre => unLivre.titre === titre);
            if (!livre) {
                throw new Error(`Le livre "${titre}" n'a jamais été les stocks de la bibliothèque.`);
            }
            livre.retourner();
        } catch (error) {
            console.error(error.message);
        }
    }
}