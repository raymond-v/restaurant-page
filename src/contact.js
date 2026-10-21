export default function loadContact() {
    const content = document.querySelector('#content')
    const title = document.createElement('div')
    document.body.className = "contact-color"
    title.textContent = 'Contact Page'
    content.textContent = ''
    content.append(title)
}