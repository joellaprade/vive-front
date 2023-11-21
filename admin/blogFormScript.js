var i = 0;

var title;
var preview;
var body;

var modelo = {
    titulo: '',
    prevista: '',
    cuerpo: ''
}

var mail;
var password;

var authentication = {
    mail: '',
    password: ''
}

const setDatos = () => {
    //obtener latest values
    title = document.getElementById('titulo-blog').value
    preview = document.getElementById('prevista-blog').value
    body = document.getElementById('cuerpo-blog').value
    
    //asignarlos a modelo
    modelo.titulo = title;
    modelo.prevista = preview;
    modelo.cuerpo = body;
    
    
    return modelo;
}

const setAuthentication = () => {
    mail = document.getElementById('mail').value
    password = document.getElementById('password').value

    authentication.mail = mail;
    authentication.password = password;

    return authentication
}

const postBtn = document.getElementById('post')
postBtn.addEventListener('click', postInfo)

async function postInfo(e){
        e.preventDefault();
        const res = await fetch(baseUrl + 'postBlog', 
        {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                parcel: setDatos(),
                authentication: setAuthentication()
            })
    })
}