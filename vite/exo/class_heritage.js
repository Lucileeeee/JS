class UserProfile {
    //! Pas besoin de déclarer function devant le constructor et méthodes
    constructor(paramNameUser, paramMailUser, paramPhoneUser) {
    // Attribut en IN MODE indispensable pour créer des new UserProfile
    this.nameUser = paramNameUser;
    this.mailUser = paramMailUser;
    this.phoneUser = paramPhoneUser;
    // Attribut en outMode
    this.contact = paramPhoneUser + paramMailUser;
    this.resume = this.getProfileInfo();
    this.count = 0
    // this._nom = nom;  
    }
    getPhone(){
        if(user==="admin")
        return this.phoneUser;
    }
    getProfileInfo() {
    console.log('this ',this);
    return `infos de l'utilisateur : 
            son nom : ${this.nameUser}
            son mail : ${this.mailUser}
            son Tél : ${this.phoneUser}`;
    }
}

const exampleUser1 = new UserProfile("José", "jose@gmail.com", "09876543");
console.log(exampleUser1);
const exampleUser2 = new UserProfile("Sarah", "sarah@gmail.com", "063736252");


console.log(exampleUser2.nameUser);
exampleUser2.getProfileInfo();
const exampleUser3 = new UserProfile("yann", "yann@gmail.com", "098765432");
exampleUser3.getProfileInfo();

// Afficher les infos userProfile dans la page web
function affichagePageWeb(oneUser) {
    const h2element = document.querySelector("h2");
    h2element.innerText = oneUser.getProfileInfo();
}

affichagePageWeb(exampleUser1);


//!Héritage:
class UserAdmin extends UserProfile {
    constructor(unNom, unMail, unPhone, sector, personnalPhone) {
    super(unNom, unMail, unPhone); //! Appel au constructor du parent UserProfile
    this.sector = sector;
    this.personnalPhone = personnalPhone;
    }
    getAdminInfo() {
    return `infos de l'utilisateur : 
        son nom : ${this.nameUser}
        son secteur d'intervention : ${this.sector}
        son Tél Personnel : ${this.personnalPhone}`;
    }
}

const exampleAdmin1 = new UserAdmin(
    "Jacky",
    "jack@gmail.com",
    "012345678",
    "administration",
    "0687654323"
);

console.log('admin qui utilise getprofileInfo',exampleAdmin1.getProfileInfo());
console.log('admin qui utilise getadminInfo',exampleAdmin1.getAdminInfo());
const exampleUserClassic = new UserProfile("AZERTYUIO", "jojoj@gmail.com", "111111111");
exampleUser2.getProfileInfo();
// ↓ erreru car c'est pas un admin donc error
exampleUser2.getAdminInfo();

//!avec des propriétés Privés:
class Animal {
    // Propriétés privées
    #name;
    #age; //!le "#" pour passer en privé
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
    // Méthode pour obtenir le nom de l'animal
    getName() {
        return this.#name;
    }
    // Méthode pour obtenir l'âge de l'animal
    getAge() {
        return this.#age;
    }
    // Méthode pour afficher les informations de l'animal
    displayInfo() {
        console.log(`Nom: ${this.#name}, Âge: ${this.#age} ans`);
    }
}

// Exemple d'utilisation
const chien = new Animal("Rex", 5);
chien.displayInfo(); // Affiche: Nom: Rex, Âge: 5 ans

//! Tentative d'accès direct aux propriétés privées (ceci va échouer)
/* try {
    console.log(chien.#name); // Erreur : propriété privée non accessible
} catch (error) {
    console.error("Erreur d'accès à la propriété privée:", error.message);
} */