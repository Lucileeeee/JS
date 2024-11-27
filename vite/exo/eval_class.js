class Utilisateur {
    constructor(nom){
        this.nom = nom,
        this.publications = [],
        this.groupes = []
    }
    publier(contenu){
        const badWord = 'fuck';
        const veryBadWord = 'Big Fuck';
        if(!contenu.includes(badWord || veryBadWord)){
            this.publications.push(contenu);
        } else if (contenu.includes(badWord || veryBadWord)){
            console.log("Erreur : Contenu inapproprié détecté.");
        }
    }
    rejoindreGroupe(groupe){
        if((!groupe.membres.includes(this))){
            console.log('ajoutons le membre', this, 'au groupe', groupe);
            groupe.ajoutermembre(this);
        } else if(groupe.membres.includes(this)){
            console.log('vous faites déjà partie du groupe');
        }

    }
}

class Publication{
    constructor(auteur, contenu){
        this.auteur = auteur,
        this.contenu = contenu,
        this.commentaires = []
    }
    ajouterCommentaire(commentaire){
        const idiot = 'idiot';
        const stupide = 'stupide';
        if (!commentaire.includes(idiot || stupide)){
            this.commentaires.push(commentaire);
        } else if (commentaire.includes(idiot || stupide)){
            console.log(`C'est pas gentil de dire ${idiot} ou ${stupide} à qulequ'un !`);
        }
    }
}

class Commentaire {
    constructor(auteur, contenu){
        this.auteur = auteur,
        this.contenu = contenu 
    }
}

class Groupe {
    constructor(nom){
        this.nom = nom,
        this.membres = [],
        this.estPrive = false
    }
    ajoutermembre(utilisateur){
        this.membres.push(utilisateur)
    }
    afficherContenu(utilisateur){
        try{
            if(this.membres.includes(utilisateur)){
                console.log('hello', utilisateur.nom, 'existe bien dans le groupe', this.nom);
            } else if (!this.membres.includes(utilisateur)){
                console.log(`Erreur : Vous n'avez pas accès à ce groupe.`);
            }
        }
        catch(error) {
            console.log(error);
        }  
    }
}
//! création d'utilisateur : 
console.log('PARTIE UTILISATEUR :');
let bidule = new Utilisateur('Bidule');
//? contenu valide:
console.log('utilisateur publie un contenu valide : ');
bidule.publier('gros con !');
console.log(bidule.publications[0]);
//? contenu invalide:
console.log('utilisateur publie un contenu INvalide : ');
bidule.publier('fuck');


//! création de groupe:
console.log('PARTIE GROUPE :');
let groupeA = new Groupe('Groupe A');
//? un utilisateur qui a acces: 
groupeA.ajoutermembre(bidule);
groupeA.afficherContenu(bidule);
//? un utilisateur qui n'a pas acces:
let jambon = new Utilisateur('jambon');
groupeA.afficherContenu(jambon);
let groupeB = new Groupe('groupe B');
groupeB.estPrive = true;
console.log(groupeB);

//! création de publication:
console.log('PARTIE PUBLICATION :');
let publi = new Publication(bidule.nom, 'Recette de raclette à la truffe');
console.log(publi);
publi.ajouterCommentaire('gentil');
publi.ajouterCommentaire('idiot');

//! création de commentaire:
const commentaireInsultant = new Commentaire(bidule, "C'est stupide !");
publi.ajouterCommentaire(commentaireInsultant.contenu);

//! partie rejoindre Groupe:
//? déjà membre: 
bidule.rejoindreGroupe(groupeA);
//? rajoute membre: 
bidule.rejoindreGroupe(groupeB);