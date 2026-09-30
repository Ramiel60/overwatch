let hed = document.querySelector('header')
let bar = document.querySelector('.scroll-progress .bar')
let shorts = document.querySelector('.floating-shorts')

window.addEventListener('scroll', () => {
    if (window.scrollY > 0 ) {
        hed.classList.add('down')
    } else {
        hed.classList.remove('down')
    }
    
    let body_h = document.body.offsetHeight
    let view_h = window.innerHeight
    let real_h = body_h - view_h

    let per = (window.scrollY / real_h) * 100
    console.log(per)
    bar.style.width = per + '%'

    if (window.scrollY > document.querySelector('#genji').offsetTop - 600) {
        shorts.classList.add('show')
    } else {
        shorts.classList.remove('show')
    }

})