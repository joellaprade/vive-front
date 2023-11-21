//SET NAV IND
const setNav = (pageNum) => {
    var device = window.screen.width >= 1800 ? "d" : "m";
    if(device == "d"){
        document.getElementById(`${device + pageNum}`).innerHTML += 
        `<div style="border-radius: 100px; position: absolute; width: 40px; height: 8px; background: #F75E62; margin-top: 26px;"></div>`
    }else {
         document.getElementById(`${device + pageNum}`).style.borderBottom = "6px solid rgba(255, 255, 255, 0.9)";
    }
   
}
window.addEventListener('load', setNav)
setTimeout(() => {
    setNav(1);
    document.body.style.opacity='1'
}, 200)
