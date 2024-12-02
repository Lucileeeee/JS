// cypress/integration/counter_spec.js
describe("Tests de l'application Counter", () => {
// Visite de l'URL avant chaque test pour éviter de le répéter dans tous les it
    beforeEach(() => {
        cy.visit("http://localhost:5173/"); 
    });

    it("devrait afficher un compteur initial de 0", () => {
        cy.get("#counter").should("have.text", "count is 0");
    });

    it("le compteur devrait augmenter le nombre lors du clic sur le bouton", () => {
        cy.get("#counter").click();
        cy.get("#counter").should("have.text", "count is 1");
    });

    it("devrait augmenter le nombre deux fois lors de deux clics sur le bouton", () => {
        cy.get("#counter").click().click();
        cy.get("#counter").should("have.text", "count is 2");
    });

    it("devrait gérer plusieurs augmentations correctement", () => {
        cy.get("#counter").click().click().click();
        cy.get("#counter").should("have.text", "count is 3");
        cy.get("#counter").click().click();
        cy.get("#counter").should("have.text", "count is 5");
        // On pourrait faire cette logique dans une boucle à terme 
    });

    it("devrait avoir les logos et les liens corrects check des classes CSS, attributs href", () => {
        cy.get(".logo").should("have.length", 2);
        cy.get(".logo").eq(0).should("be.visible");
        cy.get(".logo").eq(1).should("be.visible");
        cy.get(".logo").eq(0).should("have.attr", "alt", "Vite logo");
        cy.get(".logo").eq(1).should("have.attr", "alt", "JavaScript logo");
        cy.get(".read-the-docs").should("have.text", "Click on the Vite logo to learn more");
        // Vérification que les logos sont des liens avec un attribut href avec les bonnes URL
        cy.get(".logo").eq(0).parents('a').should("have.attr", "href", "https://vitejs.dev");
        cy.get(".logo").eq(1).parents('a').should("have.attr", "href", "https://developer.mozilla.org/en-US/docs/Web/JavaScript");
    });
});