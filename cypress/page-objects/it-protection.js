/// <reference types="cypress" />

export function validateItProtectionContent(){
    cy.get('h2').should('contain', 'Protection')
}

export function navigateToCompareProducts(){
    cy.contains('IT Support Service').click();
    cy.contains('Compare').click();
}