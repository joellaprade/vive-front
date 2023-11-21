


//NAVBAR
var mobileNavButton = document.getElementById("mobile-nav-button")
var volverButton = document.getElementById("volver-button")
var mobileNav = document.getElementById("mobile-nav")
var contactoLink = document.getElementById("contacto-link")
var contactoLinkMobil = document.getElementById("contacto-link-mobil")
var contactDiv = document.getElementById("contact")
var dropdown = document.getElementById("dropdown")
var dropdownMobile = document.getElementById("dropdown-mobile")
var dropdownCnt = document.getElementById("dropdown-content")
var dropdownCntMobile = document.getElementById("dropdown-content-mobile")

mobileNavButton.onclick = () => {
    mobileNav.style.display = "block";
    setTimeout(() => {
        document.body.style.height = "150vh";
        mobileNav.style.transition = "opacity 0.3s ease-in-out"
        mobileNav.style.overflow = "hidden";
        mobileNav.style.opacity = "1"
    }, 1)
}
volverButton.onclick = () => {
    document.body.style.height = "auto";
    mobileNav.style.transition = "opacity 0.2s ease-in-out"
    mobileNav.style.opacity = "0"
    setTimeout(() => {
        mobileNav.style.display = "none"
    }, 300)
}
contactoLink.onclick = () => {
    document.body.style.height = "auto";
    mobileNav.style.transition = "opacity 0.2s ease-in-out"
    mobileNav.style.opacity = "0"
    setTimeout(() => {
        mobileNav.style.display = "none"
        contactDiv.style.color = "#F75E62"
        contactDiv.style.transition = "color 0.5s"
    }, 1)
    setTimeout(() => {
        contactDiv.style.color = "#FFFFFF"
    },1000)
}
contactoLinkMobil.onclick = () => {
    document.body.style.height = "auto";
    mobileNav.style.transition = "opacity 0.2s ease-in-out"
    mobileNav.style.opacity = "0"
    setTimeout(() => {
        mobileNav.style.display = "none"
        contactDiv.style.color = "#F75E62"
        contactDiv.style.transition = "color 0.5s"
    }, 1)
    setTimeout(() => {
        contactDiv.style.color = "#FFFFFF"
    },1000)
}
dropdown.onmouseover = () => {
    dropdownCnt.style.transition = "height 0.5s";
    dropdownCnt.style.height = "350px";  
}
dropdown.onmouseout = () => {
    dropdownCnt.style.height = "0px";  
}
dropdownMobile.onclick = () => {
    dropdownCntMobile.style.transition = "height 0.5s";
    dropdownCntMobile.style.height = dropdownCntMobile.style.height == "425px" ? "0px" : "425px";  
}