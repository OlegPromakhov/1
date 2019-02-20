describe('OOS-CA app dashboard', function() {

 	before(function() {
  	cy.visit('http://localhost:3000/')
 	});

	it('identify member position in the first column', function() {
  	cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .CrewMember-info > .CrewMemeber-name > :nth-child(1)')
      .should('have.text', 'lloyd gonzalez')
    cy.get(':nth-child(2) > .CrewMember-toolbar > .CrewMember-up')
      .should('be.visible')
 	});

 	it('go from first to second column', function() {
    cy.get(':nth-child(2) > .CrewMember-toolbar > .CrewMember-up')
      .click()

    cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > .CrewMember-info > .CrewMemeber-name > :nth-child(1)')
      .should('have.text', 'lloyd gonzalez')
  });

	it('go from second to third column', function() {
	  cy.get(':nth-child(2) > :nth-child(1) > .CrewMember-container > .CrewMember-toolbar > .CrewMember-up')
      .click()
   
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(3) > .CrewMember-info > .CrewMemeber-name > :nth-child(1)')
      .should('have.text', 'lloyd gonzalez')
  });

	it('identify member position in third column', function() {
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .CrewMember-info > .CrewMemeber-name > :nth-child(1)')
      .should('have.text', 'julia cunningham')
	});

	it('go from third to second column', function() {
		cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .CrewMember-toolbar > button')
      .click();
   
    cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > .CrewMember-info > .CrewMemeber-name > :nth-child(1)')
      .should('have.text', 'julia cunningham')
  });

	it('go from second to first column', function() {
		cy.get(':nth-child(2) > :nth-child(1) > .CrewMember-container > .CrewMember-toolbar > :nth-child(1)')
      .click();
   
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .CrewMember-info > .CrewMemeber-name > :nth-child(1)')
      .should('have.text', 'julia cunningham')
  });

});