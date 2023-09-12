const tabList = document.querySelector("[role='tablist']")
const tabs = tabList.querySelectorAll("[role='tab']")



let tabFocus = 0;
const changeTabFocus = ({keyCode}) => {
    const downleftKey = 37;
    const downrightKey = 39;
    
    if (keyCode === downleftKey || keyCode === downrightKey) {
        tabs[tabFocus].setAttribute('tabindex', -1)
    }
    
    if (keyCode === downleftKey) {
        console.log(tabFocus--)
        if (tabFocus < 0) {
            tabFocus = tabs.length - 1
        }
    }

    if (keyCode === downrightKey) {
        console.log(tabFocus++)
        if (tabFocus >= tabs.length) {
            tabFocus = 0;
        }
    }
    
    tabs[tabFocus].setAttribute('tabindex', 0)
    tabs[tabFocus].focus()
}

const chageTabPanel = ({target}) => {
    const targetPanel = target.getAttribute("aria-controls")
    const targetImage = target.getAttribute('data-image')
    const tabContainer = target.parentNode;
    const mainContainer = tabContainer.parentNode;

    tabContainer.
    querySelector('[aria-selected="true"]').
    setAttribute('aria-selected', false)

    target.setAttribute('aria-selected', true)

    mainContainer.
    querySelectorAll('[role="tabpanel"]').
    forEach(panel => panel.setAttribute('hidden', true))

    mainContainer.querySelector(`#${targetPanel}`).removeAttribute('hidden')
    console.log(mainContainer)

    mainContainer.
    querySelectorAll('picture').
    forEach(picture => picture.setAttribute('hidden', true))

    mainContainer.querySelector(`#${targetImage}`).removeAttribute('hidden')  
    
}

tabs.forEach(tab => {
    tab.addEventListener('click', chageTabPanel)
})

tabList.addEventListener('keydown', changeTabFocus)