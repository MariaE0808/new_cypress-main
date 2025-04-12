describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');// зашли на сайт
     cy.get('#mail').type('german@dolnikov.ru');// ввели верный логин
     cy.get('#pass').type('iLoveqastudio1');//ввели верный пароль
     cy.get('#loginButton').click();//нажала войти
     cy.get('#messageHeader').contains('Авторизация прошла успешно');//проверяю, что авторизация прошла успешно
     cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Есть крестик и он виден для пользователя
     cy.get('#messageHeader').should('be.visible');//текст он виден для пользователя
   })
})
 it('Восстановление пароля', function () {
    cy.visit('https://login.qa.studio/');// зашли на сайт
    cy.get('#forgotEmailButton').should('be.visible');//Есть кнопка и она виднадля пользователя
    cy.get('#forgotEmailButton').click();//нажала кнопку
    cy.get('#mailForgot').type('german@dolnikov.ru');//ввела верный логин
    cy.get('#restoreEmailButton').click();//нажала кнопку
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');//проверяю, что запрос был направлен на указанный логин
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Есть крестик и он виден для пользователя

}) 
it('Верный логин и неверный пароль', function () {
    cy.visit('https://login.qa.studio/');// зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru');//ввели верный логин
        cy.get('#pass').type('iLoveqastudio');//ввели не верный пароль
        cy.get('#loginButton').click();//нажали кнопку
        cy.get('#messageHeader').should('be.visible');//текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет');//проверяю, что авторизация не успешна
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Есть крестик и он виден для пользователя

    })
it('Неверный логин и верный пароль', function () {
    cy.visit('https://login.qa.studio/');// зашли на сайт
        cy.get('#mail').type('german@dolnikov123.ru');//ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1');//ввели верный пароль
        cy.get('#loginButton').click();//нажали кнопку
        cy.get('#messageHeader').should('be.visible');//текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет');//проверяю, что авторизация не успешна
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Есть крестик и он виден для пользователя

    })
    it('Валидация на наличие @', function () {
        cy.visit('https://login.qa.studio/');// зашли на сайт
        cy.get('#mail').type('germandolnikov.ru');//вводим логин без @
        cy.get('#pass').type('iLoveqastudio1');//ввели верный пароль
        cy.get('#loginButton').click();//нажали кнопку
        cy.get('#messageHeader').should('be.visible');//текст виден пользователю
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');//проверяю, что текст с ошибкой
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Есть крестик и он виден для пользователя

    })

    it('Текст строчными буквами', function () {
        cy.visit('https://login.qa.studio/');// зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru');//вводим строчный логин
        cy.get('#pass').type('iLoveqastudio1');//ввели верный пароль
        cy.get('#loginButton').click();//нажали кнопку
        cy.get('#messageHeader').should('be.visible');//текст виден пользователю
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');//проверяю, что текст с ошибкой
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Есть крестик и он виден для пользователя

    })


    
// запуск через терминал: npx cypress run --spec cypress/e2e/login.cy.js --browser chrome


