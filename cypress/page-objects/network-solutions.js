/// <reference types="cypress" />

export function validateNetworkSolutionsContent(){
    cy.get('h2').should('contain', 'Full-Service Network')
}

export function navigateToAboutUs(){
    cy.get('#menu-item-3241').nhover();
    cy.contains('About').click();
}