const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
const links = document.querySelectorAll('nav ul li a')

for(const element of toggle){
    element.addEventListener('click', function(){
        nav.classList.toggle('show')
    })
}

for(const link of links){
    link.addEventListener('click', function(){
        nav.classList.remove('show')
    })
}

/* função para alterar  header quando rolar a página */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll(){
    window.addEventListener('scroll', function(){
        if(window.scrollY >= navHeight){
            header.classList.add('scroll')
        } else{
            header.classList.remove('scroll')
        }
    })
}

/* testimonials slider( swiper library ) */
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints:{
        767:{
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
})

/* scrollReveal: mostrar elementos quando der scroll na pagina*/
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(`#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links,
footer .brand, footer .social`,
{interval: 100}
)

/* função voltar ao topo */
const backToTopButton = document.querySelector('.back-to-top')
function backToTop(){
    window.addEventListener('scroll', function(){
        if(window.scrollY >= 560){
            backToTopButton.classList.add('show')
        }else{
            backToTopButton.classList.remove('show')
        }
    })
}

/* marcar o menu correspondente à seção ativa */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection(){
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for(const section of sections){
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if(checkpointStart && checkpointEnd){
            document
            .querySelector('nav ul li a[href*='+ sectionId +']')
            .classList.add('active')
        } else {
            document
            .querySelector('nav ul li a[href*='+ sectionId +']')
            .classList.remove('active')
        }
    }
}

/* WHEN SCROLL */
window.addEventListener('scroll', function(){
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
})