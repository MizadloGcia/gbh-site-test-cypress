/// <reference types="cypress" />
require('cypress-nhover');
import { navigateToPointOfDifferentiation, validateAboutUsContent } from '../page-objects/about-us';
import { navigateToItFoundation, validateAgentOfChangeContent } from '../page-objects/agent-of-change';
import { navigateToCaseStudies, validateBlogContent } from '../page-objects/blog';
import { validateCareersContent } from '../page-objects/careers';
import { navigateToCareers, validateCaseStudiesContent } from '../page-objects/case-studies';
import { navigateToItNetworkSolutions, validateCompareProductsContent } from '../page-objects/compare-products';
import { navigateToAgentOfChange, validateCustomSoftwareDevelopmentContent } from '../page-objects/custom-software-development';
import {validateHomeContent, navigateToInnovationSquad} from '../page-objects/home';
import { navigateToITBusinessTransformation, validateInnovationSquadContent } from '../page-objects/innovation-squad';
import { navigateToCustomSoftwareDevelopment, validateITBusinessTransformationContent } from '../page-objects/it-business-transformation';
import { navigateToItProtection, validateItFoundationContent } from '../page-objects/it-foundation';
import { navigateToCompareProducts, validateItProtectionContent } from '../page-objects/it-protection';
import { navigateToAboutUs, validateNetworkSolutionsContent } from '../page-objects/network-solutions';
import { navigateToBlog, validatePointOfDifferentiationContent } from '../page-objects/point-of-differentiation';

context('Load all pages', () => {

    it('Go to the home page', () => {
        cy.visit('https://gbh.com.do/');
        validateHomeContent();
    })

    it('Go to Innovation Squad page', () => {
        navigateToInnovationSquad();
        validateInnovationSquadContent();
    })
    
    it('Go to IT Business Transformation page', () => {
        navigateToITBusinessTransformation();
        validateITBusinessTransformationContent();
    })

    it('Go to Custom Software Development page', () => {
        navigateToCustomSoftwareDevelopment();
        validateCustomSoftwareDevelopmentContent();
    })

    it('Go to Agent of Change Staff Augmentation page', () => {
        navigateToAgentOfChange();
        validateAgentOfChangeContent();
    })

    it('Go to IT Foundation page', () => {
        navigateToItFoundation();
        validateItFoundationContent();
    })

    it('Go to IT Protection & Support page', () => {
        navigateToItProtection();
        validateItProtectionContent();
    })

    it('Go to Compare Products page', () => {
        navigateToCompareProducts();
        validateCompareProductsContent();
    })

    it('Go to IT Network Solutions page', () => {
        navigateToItNetworkSolutions();
        validateNetworkSolutionsContent();
    })

    it('Go to About Us page', () => {
        navigateToAboutUs();
        validateAboutUsContent();
    })

    it('Go to Point of Differentiation page', () => {
        navigateToPointOfDifferentiation();
        validatePointOfDifferentiationContent();
    })

    it('Go to Blog page', () => {
        navigateToBlog();
        validateBlogContent();
    })

    it('Go to Case Studies page', () => {
        navigateToCaseStudies();
        validateCaseStudiesContent();
    })

    it('Go to Careers page', () => {
        navigateToCareers();
        validateCareersContent();
    })

})