let main = document.querySelector(".header .links .icon ")
let links = document.querySelector(".header .links ul")
let ul = document.querySelector('ul')
console.log(Array.from(links.children))

main.onclick = () => {
    links.classList.toggle('block')
}
