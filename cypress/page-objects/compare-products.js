/// <reference types="cypress" />

export function validateCompareProductsContent(){
    cy.get('h2').should('contain', 'IT Support Services')
}

export function navigateToItNetworkSolutions(){
    cy.contains('Network').click();
}