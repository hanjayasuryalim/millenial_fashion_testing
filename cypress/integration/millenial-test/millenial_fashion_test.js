/// <reference types="cypress" />

describe('Homepage test',()=>{

    beforeEach(()=>{
        cy.visit('http://localhost:5000/')
    })

    it('does our home page has correct string',()=>{

        cy.viewport(1288,760)
        cy.contains('Unique Design').should('exist')
        cy.contains('We Provide newest and latest trend design in the world to you. You can access it easily within your hands.').should('exist')
        cy.contains('Service Innovation').should('exist')
        cy.contains('We never stop inventing all unique and reasonable design in every session througout the year. Not only for retaliate the customer but also participate in leading world fashion trend.').should('exist')
        cy.contains('Digital Strategy').should('exist');
        cy.contains('Utilize world class tech in developing fashion, gather data and implement user\'s request to keep improving.').should('exist');
        cy.contains('Brand Identity').should('exist');
        cy.contains('Give courage and confident to every user that trust us, aim to be world number 1 fashion company.').should('exist');
        cy.contains('@Copyright Millenial Fashion 2021. All Rights Reserved.').should('exist')
    })

    it('does our home page contains title and other required icons',() => {

        cy.get('div[class=navbar-end]').should('not.be.visible')
        cy.viewport(1288,760)
        cy.get('div[class=navbar-brand]').should('exist')
        cy.get('div[class=navbar-end]').should('exist')
        cy.get('svg[data-icon=gem]').should('exist')
        cy.get('svg[data-icon=rocket]').should('exist')
        cy.get('svg[data-icon=desktop]').should('exist')
        cy.get('svg[data-icon=pencil-alt]').should('exist')
        cy.get('svg[data-icon=facebook-square]').should('exist')
        cy.get('svg[data-icon=twitter-square]').should('exist')
        cy.get('svg[data-icon=linkedin]').should('exist')
        cy.get('svg[data-icon=instagram-square]').should('exist')
        cy.get('svg[data-icon=youtube-square]').should('exist')
        cy.get('svg[data-icon=home]').should('exist')
        cy.get('svg[data-icon=shopping-bag]').should('exist')
        cy.get('svg[data-icon=shopping-cart]').should('exist')
        cy.get('svg[data-icon=heart]').should('exist')
        cy.get('svg[data-icon=history]').should('exist')
        cy.get('svg[data-icon=user]').should('exist')

    })

    it('does every link works',() => {
        cy.get('body > div > nav > div.navbar-brand > a.navbar-burger.burger').click()
        cy.viewport(1288,760)

        cy.get(' body > div > nav > div.navbar-menu > div.navbar-start > a:nth-child(1)')
            .should('have.text','Home')
            .click()


        cy.get('body > div > nav > div.navbar-menu > div.navbar-start > a:nth-child(2)')
            .should('have.text','Market')
            .click()
        cy.url().should('include','/market')
        cy.url().then( value => {
            cy.log('Current URL ',value)
        })

        cy.get('body > div > nav > div.navbar-menu > div.navbar-start > a:nth-child(3)')
            .should('have.text','Cart')
            .click()
        cy.url().should('include','/cart')
        cy.url().then( value => {
            cy.log('Current URL ',value)
        })


        cy.get('body > div > nav > div.navbar-menu > div.navbar-start > a:nth-child(4)')
            .should('have.text','Wishlist')
            .click()
        cy.url().should('include','/wishlist')
        cy.url().then( value => {
            cy.log('Current URL ',value)
        })


        cy.get('body > div > nav > div.navbar-menu > div.navbar-start > a:nth-child(5)')
            .should('have.text','Transactions')
            .click()
        cy.url().should('include','/transactions')
        cy.url().then( value => {
            cy.log('Current URL ',value)
        })


        cy.get('body > div > nav > div.navbar-menu > div.navbar-start > a:nth-child(6)')
            .should('have.text','New User')
            .click()
        cy.url().should('include','/signup')
        cy.url().then( value => {
            cy.log('Current URL ',value)
        })


    })
})

describe('sign up test',() =>{

    beforeEach(() => {
        cy.visit('http://localhost:5000/')
    })

    it('does sign up goes well',() => {

        cy.viewport(1288,760)
        cy.get('body > div > nav > div.navbar-menu > div.navbar-start > a:nth-child(6)')
            .should('have.text','New User')
            .click()

        cy.log('check if button is disabled')
        cy.get('body > div > div > div > button').should('be.disabled')

        cy.log("inserting username")
        cy.get('body > div > div > div > div:nth-child(2) > div > input').type('test')

        cy.log('check if button is disabled')
        cy.get('body > div > div > div > button').should('be.disabled')

        cy.log("inserting email")
        cy.get('body > div > div > div > div:nth-child(3) > div > input').type("test@gmail.com")

        cy.log('check if button is disabled')
        cy.get('body > div > div > div > button').should('be.disabled')

        cy.log("Inserting password")
        cy.get('body > div > div > div > div:nth-child(4) > div > input').type('test123')

        cy.log('check if button is disabled')
        cy.get('body > div > div > div > button').should('be.disabled')

        cy.log("Inserting address")
        cy.get('body > div > div > div > div:nth-child(5) > div > input').type('test123 test123')

        cy.log('check if button is enabled')
        cy.get('body > div > div > div > button').should('be.enabled')


        cy.log("Click create button")
        cy.get('body > div > div > div > button').click()

        cy.visit('http://localhost:5000/')

        cy.contains('test').should('exist')
    })
})

describe('Market page test',() => {
    beforeEach(()=>{
        cy.visit('http://localhost:5000/market')
        cy.viewport(1288,760)
    })

    it('does category works well',() => {

        cy.get('body > div > div > div:nth-child(2) > div > select').select('Men');
        cy.wait(1000)

        cy.get('body > div > div > div:nth-child(2) > div > select').select('Women');
        cy.wait(1000)
    })

    it('checking add to wishlist and cart menu',() =>{

        cy.get('body > div > div > div.columns.is-multiline > div:nth-child(3)').click()

        cy.get('body > div > div > div:nth-child(2) > div > button.button.is-danger.is-fullwidth').click()

        cy.get('body > div > div > div:nth-child(2) > div > button.button.mr-3.is-primary.is-fullwidth').click()

        cy.visit('http://localhost:5000/cart')
        cy.contains('Blue Mask').should('exist')

        cy.get('body > div > div > div > div > div > div.content > div > div > table > tbody > tr > td:nth-child(8) > button').click()
        cy.get('body > div.dialog.modal.is-active > div.modal-card.animation-content > footer > button.button.is-danger').click()
        cy.contains('Blue Mask').should('not.exist')


        cy.visit('http://localhost:5000/wishlist')
        cy.contains('Blue Mask').should('exist')

        cy.get('body > div > div > div.columns.is-multiline > div > div > div > div > div > button').click()
        cy.get('body > div.dialog.modal.is-active > div.modal-card.animation-content > footer > button.button.is-danger').click()
        cy.contains('Wishlist is empty').should('exist')
    })
})

describe('Transaction test',() => {
    beforeEach(() => {
        cy.viewport(1288,760)
    })

    it('does quantity works well',() => {
        cy.visit('http://localhost:5000/market');
        cy.get('body > div > div > div.columns.is-multiline > div:nth-child(4) > a > div > div').click()
        cy.get('body > div > div > div:nth-child(2) > div > button.button.mr-3.is-primary.is-fullwidth').click()

        cy.visit('http://localhost:5000/cart')
        cy.get('body > div > div > div > div > div > div.content > div > div > table > tbody > tr > td:nth-child(5) > div > div > p.control.plus > button').click()
        cy.get('body > div > div > div > div > div > div:nth-child(7) > div > button').click()
        cy.get('body > div > div > div.modal.is-active > div.animation-content > form > div > section > div:nth-child(2) > div > span > select').select('Transfer')
        cy.get('body > div > div > div.modal.is-active > div.animation-content > form > div > footer > button.button.is-primary').click()

        cy.get('body > div > div > div.column.is-four-fifths > div > div > div.content > div > div > table > tbody > tr > td:nth-child(8) > button').click()
        cy.get('body > div.dialog.modal.is-active > div.modal-card.animation-content > footer > button.button.is-danger').click()

        cy.visit('http://localhost:5000/transactions')
        cy.get('body > div > div > div > div > div > div.content > div > div > table > tbody > tr > td:nth-child(4) > a > button').click()

        cy.contains('Purple Mask').should('exist');
    })
})