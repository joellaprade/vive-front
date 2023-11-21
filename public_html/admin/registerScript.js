var i = 0;

var mail;
var password;

var model = {
    mail: '',
    password: '',
    isUser: false,
    isAdmin: false,
}


const setDatos = () => {
    //obtener latest values
    mail = document.getElementById('mail').value
    password = document.getElementById('password').value

    //asignarlos a modelo
    model.mail = mail;
    model.password = password;

    return model;
}

const postBtn = document.getElementById('post')
postBtn.addEventListener('click', postInfo)

async function postInfo(e){
    e.preventDefault();
    const res = await fetch(baseUrl + 'registerUser', 
        {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(setDatos())
    })
}