import "./style.css"
import loadHome from "./home.js"
import loadMenu from "./menu.js"
import loadContact from "./contact.js"

console.log('Hi, this is printed from index.js')

loadHome()

const home = document.querySelector('#home')
home.addEventListener('click', () => {
    loadHome()
})

const menu = document.querySelector('#menu')
menu.addEventListener('click', () => {
    loadMenu()
})

const contact = document.querySelector('#contact')
contact.addEventListener('click', () => {
    loadContact()
})