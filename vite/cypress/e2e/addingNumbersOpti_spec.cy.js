describe('Adding Numbers', () => {
    beforeEach(() => {
        cy.visit("http://localhost:5173/calc.html");
    });

    it("l'app doit additionner 2 nombres", () => {
        // on rentre des valeurs dans les input
        cy.get('#firstNumber').type(3);
        cy.get('#secondNumber').type(4);
        // Click pour executer le calcul
        cy.get('#calculBtn').click();
        // Check si le result s'affiche correctement
        cy.get('#result').should('have.text', 7);
    });

    it("L'app doit additionner 2 nombres positifs", () => {
        cy.get('#firstNumber').type(3);
        cy.get('#secondNumber').type(4);
        cy.get('#calculBtn').click();
        cy.get('#result').should('have.text', '7');
    });

    it("L'app doit additionner 2 nombres négatif", () => {
        cy.get('#firstNumber').type(-2);
        cy.get('#secondNumber').type(-3);
        cy.get('#calculBtn').click();
        cy.get('#result').should('have.text', '-5');
    });

    it("L'app doit  gérér correctement des nombres décimaux", () => {
        cy.get('#firstNumber').type(2.5);
        cy.get('#secondNumber').type(1.5);
        cy.get('#calculBtn').click();
        cy.get('#result').should('have.text', '4');
    });

    it("L'app doit afiicher ' ' (rien) initialement", () => {
        cy.get('#result').should('have.text', 'Résultat : ');
    });

    it('Devrait gérer addition avec  un zero', () => {
        cy.get('#firstNumber').type(0);
        cy.get('#secondNumber').type(5);
        cy.get('#calculBtn').click();
        cy.get('#result').should('have.text', '5');
    });

    it('Devrait gérer addition avec 2 nombre à zeros', () => {
        cy.get('#firstNumber').type(0);
        cy.get('#secondNumber').type(0);
        cy.get('#calculBtn').click();
        cy.get('#result').should('have.text', '0');
    });

    it('devrait gérer des grand nombre  positifs', () => {
        cy.get('#firstNumber').type(1000000000);
        cy.get('#secondNumber').type(500000000);
        cy.get('#calculBtn').click();
        cy.get('#result').should('have.text', '1500000000');
    });

    it('devrait gérer des grand nombre  negatifs', () => {
        cy.get('#firstNumber').type(-1000000000);
        cy.get('#secondNumber').type(-500000000);
        cy.get('#calculBtn').click();
        cy.get('#result').should('have.text', '-1500000000');
    });

    it('devrait gérer input type text ?', () => {
        cy.get('#firstNumber').type('abc');
        cy.get('#secondNumber').type(2);
        cy.get('#calculBtn').click();
        // Vérifie que le résultat n'est pas un nombre
        cy.get('#result').should('not.have.text', 'NaN');
    });

    it('devrait gérer des champs vide', () => {
        cy.get('#calculBtn').click();
        cy.get('#result').should('not.have.text', 'NaN');
    });
});