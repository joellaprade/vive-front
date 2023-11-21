const getBtn = document.getElementById('get');
const blogsContainer = document.getElementById('blogs');
var blogsIngresados;

window.addEventListener('load', getInfo)


async function getInfo(e){
    e.preventDefault();
    const res = await fetch(baseUrl + 'getBlogs', 
        {
            method: 'GET'
        })
    blogsIngresados = await res.json()
    setBlogs();
}

const setBlogs = () => {
    blogsIngresados.forEach(blog => {
        blogsContainer.innerHTML +=
            `<div class="blog" >
                <h3>${blog.titulo}</h3>
                <p>${blog.prevista}</p>
                <a href="/getBlogs/${blog._id}">
                    <button style="margin-top: 50px">Ver Blog</button>
                </a>
            </div>`
    })
}

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
    setNav(7);
}, 200)
