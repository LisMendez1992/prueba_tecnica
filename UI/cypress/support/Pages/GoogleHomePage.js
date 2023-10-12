class GoogleHomePage {
   
  elements = {
    inputSearch : () => cy.get("#APjFqb"),
    linksResultsOfSearch : () => cy.get(':nth-child(3)')
  }


  searchInGoogle(){
    return this.elements.inputSearch()
  }

  getlinksResultsOfSearch(){
    return this.elements.linksResultsOfSearch();
  }



  }
  
  module.exports = GoogleHomePage;
  