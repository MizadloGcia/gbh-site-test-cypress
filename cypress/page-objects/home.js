/// <reference types="cypress" />

export function validateHomeContent(){
    cy.get('h2').should('contain', 'impact')
}

export function navigateToInnovationSquad(){
    cy.get('#menu-item-3240').nhover();
    cy.contains('Innovation Squad').click();
}