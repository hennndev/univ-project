const menuBar = document.querySelector('.menu')
const bar = document.querySelectorAll('.menu div')
const navlinks = document.querySelector('.nav-links')
const nav = document.querySelector('nav')
const link = document.querySelectorAll('nav ul li a')


menuBar.addEventListener('click', () => {
    navlinks.classList.toggle('show')
    bar.forEach(item => {
        item.classList.toggle('mobile')
    })
})
link.forEach(item => {
    item.addEventListener('click', () => {
        navlinks.classList.toggle('show')
        bar.forEach(item => {
            item.classList.remove('mobile')
        })
    })
})

document.addEventListener('scroll' , () => {
    if(window.pageYOffset > 10) {
        nav.classList.add('sticky')
    } else {
        nav.classList.remove('sticky')
    }
})

