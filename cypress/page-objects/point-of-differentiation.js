/// <reference types="cypress" />

export function validatePointOfDifferentiationContent(){
    cy.get('h2').should('contain', 'Devoted to delivering results');
}

export function navigateToBlog(){
    cy.contains('Blog').click();
    cy.nmove({ x: 0, y: 0});
}