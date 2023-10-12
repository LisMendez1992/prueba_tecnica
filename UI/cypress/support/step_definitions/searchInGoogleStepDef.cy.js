const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import { result } from 'lodash';
import GoogleHomePage from '../Pages/GoogleHomePage';
import { elementAt } from 'rxjs';

const googleHomePage = new GoogleHomePage();

Given("I am on the Google homepage", () => {
  cy.visit("www.google.com");

});

When("I search for {string} and click on the Wikipedia link in the search results", (subject) => {
  googleHomePage.searchInGoogle()
    .type(`${subject}{enter}`)
    .then(() => {
      cy.contains('Wikipedia').click()
    });
})

Then("the title should be {string} it should contain the year of the first automated process", () => {
  cy.origin('https://es.wikipedia.org', () => {
    cy.get('.mw-page-title-main').should('have.text', 'Automatización')
    cy.get('.mw-parser-output > :nth-child(51)').should('be.visible')
    .then(($element)=>{
      cy.get($element).screenshot('wiki_screenshot')
    const text= cy.get($element).invoke('text')
    expect($element.text()).to.include('1785')
    }) 
  })
});









