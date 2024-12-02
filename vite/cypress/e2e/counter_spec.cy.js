describe("Tests de l'application Counter", () => {
    it("devrait afficher un compte initial de 0", () => {
        cy.visit("http://localhost:5173/");
        cy.get("#counter").should("have.text", "count is 0");
    });

    it("devrait augmenter le compte lors du clic sur le bouton", () => {
        cy.visit("http://localhost:5173/");
        cy.get("#counter").click();
        cy.get("#counter").should("have.text", "count is 1");
    });

    it("devrait augmenter le compte deux fois lors de deux cliques sur le bouton", () => {
        cy.visit("http://localhost:5173/");
        cy.get("#counter").click().click();
        cy.get("#counter").should("have.text", "count is 2");
    });

    it("devrait gérer plusieur augmentations correctement", () => {
        cy.visit("http://localhost:5173/");
        for (let i = 0; i < 30; i ++){
            cy.get("#counter").click();
        }
        cy.get("#counter").should("have.text", `count is 30`);
    });

    it("devrait avoir les logos et les liens corrects", () => {
        cy.visit("http://localhost:5173/");
        /* Exemple de comment checker si le premier Element avec la classe logo, sont parent est une balise <a> qui a un attribut href avec un lien de site  */
        cy.get(".logo").eq(0).parents('a').should("have.attr", "href", "https://vite.dev");
    });
});


/* Exemple de check si les logo sont bien visible 
on peut voir si ils existent dans le DOM aussi 
mais ptet que on sait pas le lien d'une src d'image a cassé ou ce genre de truc 
cy.get(".logo").eq(0).should("be.visible"); */