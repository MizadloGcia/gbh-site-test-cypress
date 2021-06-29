/// <reference types="cypress" />

export function validateCareersContent(){
    cy.get('h2').should('contain', 'We do meaningful work');
}