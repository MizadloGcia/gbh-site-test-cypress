/// <reference types="cypress" />

export function validateInnovationSquadContent(){
    cy.get('h2').should('contain', 'Innovation')
}

export function navigateToITBusinessTransformation(){
    cy.contains('Transformation').click();
}