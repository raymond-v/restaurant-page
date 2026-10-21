export default function loadMenu() {
    const content = document.querySelector('#content')
    const title = document.createElement('div')
    document.body.className = "menu-color"
    title.textContent = 'Menu Page'
    content.textContent = ''
    content.append(title)
}