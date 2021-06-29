/// <reference types="cypress" />

export function validateAboutUsContent(){
    cy.get('h2').should('contain', 'driven by an earnest')
}

export function navigateToPointOfDifferentiation(){
    cy.contains('Differentiation').click();
}