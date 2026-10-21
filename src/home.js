export default function loadHome() {
    const content = document.querySelector('#content')
    const title = document.createElement('div')
    document.body.className = "home-color"
    title.textContent = 'Home Page'
    content.textContent = ''
    content.append(title)
}