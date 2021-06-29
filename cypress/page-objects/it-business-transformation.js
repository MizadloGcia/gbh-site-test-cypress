/// <reference types="cypress" />

export function validateITBusinessTransformationContent(){
    cy.get('h2').should('contain', 'faster')
}

export function navigateToCustomSoftwareDevelopment(){
    cy.contains('Custom Software').click();
}