/// <reference types="cypress" />

export function validateBlogContent(){
    cy.get('h2').should('contain', 'amplify your impact');
}

export function navigateToCaseStudies(){
    cy.get('#menu-item-353').click();
}