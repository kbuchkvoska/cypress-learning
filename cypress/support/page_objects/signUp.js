
class SignUp{

  //fill in sign up form
    fillSignUpForm(firstName, lastName, phone, email, password){
        cy.contains('span', 'First Name')
          .type(firstName)
        cy.contains('span', 'Last Name')
          .type(lastName)
        cy.contains('span', 'Mobile Number')
          .type(phone)
        cy.contains('span', 'Email')
          .type(email)
        cy.contains('span', 'Password')
          .type(password)
        cy.contains('span', 'Confirm Password')
          .type(password)
    }

    //click sing up button
    signUp(){
      cy.contains('button', 'Sign Up')
        .click()
    }
}

export const signUp = new SignUp()