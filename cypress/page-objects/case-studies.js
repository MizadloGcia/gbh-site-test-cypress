/// <reference types="cypress" />

export function validateCaseStudiesContent(){
    cy.get('h2').should('contain', 'tech that defines industries');
}

export function navigateToCareers(){
    cy.get('#menu-item-475').click();
}