/// <reference types="cypress" />

export function validateItFoundationContent(){
    cy.get('h2').should('contain', 'Support')
}

export function navigateToItProtection(){
    cy.contains('IT Support Service').click();
    cy.contains('IT Protection').click();
}