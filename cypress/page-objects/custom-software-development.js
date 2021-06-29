/// <reference types="cypress" />

export function validateCustomSoftwareDevelopmentContent(){
    cy.get('h2').should('contain', 'Custom Software Development')
}

export function navigateToAgentOfChange(){
    cy.contains('Augmentation').click();
}