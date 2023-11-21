var i = 0;

var leapAnchor = 2020;
var date = new Date();
var actualYear = date.getFullYear();

var enero = {name: "Enero", days: 31, month: 0};
var febrero = {name: "Febrero", days: 28, month: 1};
var marzo = {name: "Marzo", days: 31, month: 2};
var abril = {name: "Abril", days: 30, month: 3};
var mayo = {name: "Mayo", days: 31, month: 4};
var junio = {name: "Junio", days: 30, month: 5};
var julio = {name: "Julio", days: 31, month: 6};
var agosto = {name: "Agosto", days: 31, month: 7};
var septiembre = {name: "Septiembre", days: 30, month: 8};
var octubre = {name: "Octubre", days: 31, month: 9};
var noviembre = {name: "Noviembre", days: 30, month: 10};
var diciembre = {name: "Diciembre", days: 31, month: 11};
var meses = [enero, febrero, marzo, abril, mayo, junio, 
    julio, agosto, septiembre, octubre, noviembre, diciembre];

var eventName;
var firstDay;
var firstMonth;
var firstYear;
var lastDay;
var lastMonth;
var lastYear;
var eventLink;

var eventLength;

var modelo = {
        nombreEvento: '', 
        fecha:{
            diaInicial: 0,
            diaFinal: 0,
            mesInicial: {
                numero: 0,
                nombre: '',
                dias: []
            },
            mesFinal: {
                numero: 0,
                nombre: '',
                dias: []
            },
            anoInicial: 0,
            anoFinal: 0,
            duracionDias: 0,
            rank: 0
        },
        linkEvento: ''
}


var mail;
var password;

var authentication = {
    mail: '',
    password: ''
}

var eventosIngresados = [];

const getEventLength = () => {
    eventLength = 0;
    if(firstMonth == lastMonth){
        for(i = 0; i < lastDay - firstDay + 1; i++){
            eventLength++;
        }
    }else {
        for(i = 0; i < meses[firstMonth].days - firstDay; i++){
            eventLength++;
        }
        for(i = 0; i < lastDay + 1; i++){
            eventLength++;
        }
    }
}

const leapCheck = (year) => {
    if((year - leapAnchor) % 4 == 0){
        febrero.days = 29;
    }else {
        febrero.days = 28;
    }
}

const setMesInicial = () => {
    modelo.fecha.mesInicial.numero = firstMonth;
    switch(firstMonth){
        case 0:
            modelo.fecha.mesInicial.nombre = 'Ene.';
            break;
        case 1:
            modelo.fecha.mesInicial.nombre = 'Feb.';
            break;
        case 2:
            modelo.fecha.mesInicial.nombre = 'Mar.'
            break;
        case 3:
            modelo.fecha.mesInicial.nombre = 'Abr.'
            break;
        case 4:
            modelo.fecha.mesInicial.nombre = 'May.'
            break;
        case 5:
            modelo.fecha.mesInicial.nombre = 'Jun.'
            break;
        case 6:
            modelo.fecha.mesInicial.nombre = 'Jul.'
        case 7:
            break;
            modelo.fecha.mesInicial.nombre = 'Ago.'
            break;
        case 8:
            modelo.fecha.mesInicial.nombre = 'Sept.'
            break;
        case 9:
            modelo.fecha.mesInicial.nombre = 'Oct.'
            break;
        case 10:
            modelo.fecha.mesInicial.nombre = 'Nov.'
            break;
        case 11:
            modelo.fecha.mesInicial.nombre = 'Dec.'
            break;
    }
    if(firstMonth == lastMonth){
        for(i = 0; i < lastDay - firstDay + 1; i++){
            modelo.fecha.mesInicial.dias.push(firstDay + i)
        }
    }else {
        for(i = 0; i < meses[firstMonth].days - firstDay; i++){
            modelo.fecha.mesInicial.dias.push(firstDay + i)
        }
    }
       
}
const setMesFinal = () => {
    modelo.fecha.mesFinal.numero = lastMonth;
    console.log(lastMonth)
    switch(lastMonth){
        case 0:
            modelo.fecha.mesFinal.nombre = 'Ene.'
            break;
        case 1:
            modelo.fecha.mesFinal.nombre = 'Feb.'
            break;
        case 2:
            modelo.fecha.mesFinal.nombre = 'Mar.'
            break;
        case 3:
            modelo.fecha.mesFinal.nombre = 'Abr.'
            break;
        case 4:
            modelo.fecha.mesFinal.nombre = 'May.'
            break;
        case 5:
            modelo.fecha.mesFinal.nombre = 'Jun.'
            break;
        case 6:
            modelo.fecha.mesFinal.nombre = 'Jul.'
            break;
        case 7:
            modelo.fecha.mesFinal.nombre = 'Ago.'
            break;
        case 8:
            modelo.fecha.mesFinal.nombre = 'Sept.'
            break;
        case 9:
            console.log('i ran')
            modelo.fecha.mesFinal.nombre = 'Oct.'
            break;
        case 10:
            modelo.fecha.mesFinal.nombre = 'Nov.'
            break;
        case 11:
            modelo.fecha.mesFinal.nombre = 'Dec.'
            break;
    }if(firstMonth == lastMonth){
        modelo.fecha.mesFinal.dias = modelo.fecha.mesInicial.dias
    }else {
        for(i = 0; i < lastDay + 1; i++){
            modelo.fecha.mesFinal.dias.push(i)
        }
    }
}

const setDatos = () => {
    //obtener latest values
    eventName = document.getElementById('event-name').value
    firstDay = Number(document.getElementById('first-day').value)
    firstMonth = Number(document.getElementById('first-month').value)
    firstYear = Number(document.getElementById('first-year').value)
    lastDay = Number(document.getElementById('last-day').value)
    lastMonth = Number(document.getElementById('last-month').value)
    lastYear = Number(document.getElementById('last-year').value)
    eventLink = document.getElementById('event-link').value

    leapCheck(firstYear)
    getEventLength();

    //asignarlos a modelo
    modelo.nombreEvento = eventName;
    modelo.fecha.diaInicial = firstDay
    modelo.fecha.diaFinal = lastDay
    setMesInicial();
    setMesFinal();
    modelo.fecha.anoInicial = firstYear;
    modelo.fecha.anoFinal = lastYear;
    modelo.fecha.duracionDias = eventLength;
    modelo.fecha.rank = 
        Number(String(firstYear) 
        + String(firstMonth < 10 ? String(0) + String(firstMonth) : String(firstMonth))
        + String(firstDay < 10 ? String(0) + String(firstDay) : String(firstDay))
        )
    modelo.linkEvento = eventLink;
    
    return modelo;
}

const setAuthentication = () => {
    mail = document.getElementById('mail').value.toLowerCase();
    password = document.getElementById('password').value;
    
    authentication.mail = mail;
    authentication.password = password;

    return authentication;
}

const reloadd = () => {
    window.location.reload();
}

const injectEvents = () => {
    var container = document.querySelector('.event-list');

    eventosIngresados.forEach(evento => {
        container.innerHTML += `
        <div id=${evento._id}>
            <p>${evento.nombreEvento}</p>
            <div class="icons">
                <img src="/assets/pencil.png" alt="">
                <img src="/assets/trash.png" alt="">
            </div>
        </div>
        `
    })
    setEventosListener(container);
}

var requestSelection = {
    isEdit: false,
    isDelete: false,
    id: null,
}

const setEventosListener = (container) => {
    var children = [].slice.call(container.children)
    children.forEach(evento => {
        var editIcon = evento.querySelector(".icons").children[0];
        var deleteIcon = evento.querySelector(".icons").children[1];
        editIcon.addEventListener('click', () => selector(evento, children, editIcon))
        deleteIcon.addEventListener('click', () => selector(evento, children, deleteIcon))
    })
}

const selector = (evento, children, icon) => {
    [].slice.call(document.querySelectorAll('.icons')).forEach(container => {
        [].slice.call(container.children).forEach(icon => {
            icon.className = "";
        })
    })

    if(icon == evento.querySelector(".icons").children[0]) {
        requestSelection.isEdit = true;
        requestSelection.isDelete = false;
        requestSelection.id = evento.id;
        icon.classList.add("selected-edit")

    }else if(icon == evento.querySelector(".icons").children[1]) {
        requestSelection.isEdit = false;
        requestSelection.isDelete = true;
        requestSelection.id = evento.id;
        icon.classList.add("selected-delete")
    }
}

const determineRequest = (id) => {
    console.log(requestSelection.isEdit)
    if(requestSelection.isEdit){
        putInfo(id);
    }else if(requestSelection.isDelete){
        //deleteInfo(id);
    }
    else {
        reloadd();
    }
}

const submitBtn = document.getElementById('submit')
submitBtn.addEventListener('click', () => {
    determineRequest(requestSelection.id)
})
submitBtn.addEventListener('click', () => {
    setTimeout(() => {
        reloadd();
    }, 500)
})

async function putInfo(id, e){
    e.preventDefault();
    console.log(setDatos(), id)
    const res = await fetch(baseUrl + `putEvent/${id}`, 
        {
            method: 'PUT',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                parcel: setDatos(),
                authentication: setAuthentication()
            })
    })
}

async function deleteInfo(id, e){
    e.preventDefault();
    const res = await fetch(baseUrl + 'deleteEvent', 
        {
            method: 'DELETE',
    })
}

async function getInfo(){
    const res = await fetch(baseUrl + 'getEvents', 
        {
            method: 'GET'
        })
    eventosIngresados = await res.json()
    injectEvents();
}

getInfo();





/*

To dos:

selector
incluir id en put y delete
backend

*/