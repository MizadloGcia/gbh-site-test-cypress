/// <reference types="cypress" />

export function validateAgentOfChangeContent(){
    cy.get('h2').should('contain', 'Staff Augmentation')
}

export function navigateToItFoundation(){
    cy.contains('IT Support Service').click();
    cy.contains('Foundation').click();
}