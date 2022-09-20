const navToggle = document.querySelector('.nav-toggle');
// Const is same as a var and using document.querySelector is assigning what class or ID you are targeting.
const navLinks = document.querySelectorAll('nav__link')
//this mean JS is now looking for all classes called nav__link in the page

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open')
});
//the navToggle const is now listening for user to click on object.
//Document.body.classList.toggle tells that on the current page in the body element you will find from ClassList and toggle 'nav-open'

navLinks.forEach(link =>{
    link.addEventListener('click',() =>{
        document.body.classList.remove('nav-open');
    })
})
//once JS found all nav__link classes it will ow go through 1 by 1 and each link it finds it will be listening for a user input of click
//once a user clicks on a link with the lass of nav__link it will remove the class of nav_open which colapses the navigation panel