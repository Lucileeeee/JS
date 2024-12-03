describe("Test Affichage des fixtures User", ()=> {
    //récupération d'un json depuis fixture
    before(() => {
        cy.fixture("example.json").then(function (testData) {
            this.testData = testData.user;
        })
    })
    
    it("Users", function () {
        this.testData.forEach((user) => {
            cy.log(user.nom)
            cy.log(user.prenom)
            cy.log(user.mail)
            cy.log(user.password)
        })
    })
})

describe ('Register', ()=>{
    it('Vérification si les champs sont vides', () => {
        cy.visit('https://testing.adrardev.fr/addUser')
        cy.get(':input[name="mail"]').type('test@test.com')
        cy.get(':input[name="submit"]').click()
        cy.get('#msgzone').should('contain', "Veuillez remplir tous les champs du formulaire")
    })
    //Exemple test du contenu d'un élément du DOM
    it('verif si tous les champs ne sont pas remplis', () => {
        cy.visit('https://testing.adrardev.fr/addUser')
        cy.get(":input[name='mail']").type('mathieu@test.com')
        cy.get(":input[name='mdp']").type('1234')
        cy.get(":input[name='submit']").click()
        //récupérer le contenu de msgzone dans une variable text 
        cy.wait(50).get('#msgzone').invoke("text").then((text => {
            //on teste la valeur de text
            if (text == 'Veuillez remplir tous les champs du formulaire') {
                console.log('ok')
            }
            //on teste sinon si text à une autre valeur
            else {
                console.log('pas ok')
            }
        }))
    })

    it('Test de insertUser', () => {
        //paramètrage de la page web
        cy.visit('https://testing.adrardev.fr/addUser')
        //récupération et saisie dans les inputs
        cy.get(':input[name="nom"]').type('Mithridate')
        cy.get(':input[name="prenom"]').type('Mathieu')
        cy.get(':input[name="mail"]').type('test@test.com')
        cy.get('[type="password"]').type('1234')
        //clic sur le bouton submit
        cy.get(':input[name="submit"]').click()
        //test du message d'erreur
        cy.get('#msgzone').should('contain', "Le compte a été ajouté en BDD")
    })
    //Test doublon compte utilisateur
    it('Vérification doublonUser', () => {
        cy.visit('https://testing.adrardev.fr/addUser')
        cy.get(':input[name="nom"]').type('Mithridate')
        cy.get(':input[name="prenom"]').type('Mathieu')
        cy.get(':input[name="mail"]').type('test@test.com')
        cy.get('[type="password"]').type('1234')
        cy.get(':input[name="submit"]').click()
        cy.get('#msgzone').should('contain', "Les informations sont incorrectes")
    })
})

describe('Mathieu App Post Request Testing', () => {
//Ajout utilisateur API
    it('addUser API', ()=>{
        //url de l'API
        const url = "https://testing.adrardev.fr/api/addTest"
        //nom du test
        const name = "addUserAPI"
        //date du test
        let date = new Date()
        //formatage de la date du test au format 0000-00-00 (année, numéro du mois, numéro du jour)
        date = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()
        let valid = true;
        cy.visit('https://testing.adrardev.fr/addUser')
        
        // Charger les données des fixtures
        cy.fixture('users-fixture.json').then((data) => {
        //boucle pour itérer sur les utilisateurs de la fixture
        for(let i=0; i<data.user.length; i++){
            //récupération et saisie dans les inputs
            cy.get(':input[name="nom"]').type(data.user[i].nom)
            cy.get(':input[name="prenom"]').type(data.user[i].prenom)
            cy.get(':input[name="mail"]').type(data.user[i].mail)
            cy.get(':input[name="mdp"]').type(data.user[i].password)
            //clic sur le bouton submit
            cy.get(':input[name="submit"]').click()
            cy.get('#msgzone').invoke("text").then(text=>{
            //test du message enregistrement ok
            if(text=="Le compte a été ajouté en BDD"){
                valid = true;
            }
            //test du message autre erreur
            else{
                valid = false;
            }
            const json = JSON.stringify({name:name, valid:valid, date:date})
            // d'un objet js on le transforme en JSON pour l'envoyer en POST à l'API 
            //Requête API 
            cy.request({
                method: 'POST',
                url: url, 
                body: json,
            })
            })
        }
    })
    })
})