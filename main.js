window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll();
    showBackToTopButtonOnScroll();
}

function showNavOnScroll() {
    const navigation = document.getElementById('navigation');
    if(scrollY > 0) {
        navigation.classList.add('scroll');
    } else {
        navigation.classList.remove('scroll');
    }
}

function showBackToTopButtonOnScroll() {
    const navigation = document.getElementById('backToTopButton');
    if(scrollY > 400) {
        navigation.classList.add('showButton');
    } else {
        navigation.classList.remove('showButton');
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded');
}

function closeMenu() {
    document.body.classList.remove('menu-expanded');
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .card,
#about,
#about header,
#about content`);