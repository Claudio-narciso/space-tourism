const navToogle = document.querySelector(".mobile-nav-toogle")
const nav = document.querySelector("#primary-navigation")

navToogle.addEventListener('click', () => {
    const visibility = nav.getAttribute('data-visible')

    if (visibility === "false" ) {
        nav.setAttribute('data-visible', true)
        navToogle.setAttribute('aria-expanded', true)
        console.log("click")
    } else {
        nav.setAttribute('data-visible', false)
        navToogle.setAttribute('aria-expanded', false)
        console.log("click")
    }
})