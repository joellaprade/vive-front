const getBtn = document.getElementById('get');
var eventosIngresados;

//CAMBIAR URL

window.addEventListener('load', getInfo)


async function getInfo(e){
    e.preventDefault();
    const res = await fetch(baseUrl + 'getEvents', 
        {
            method: 'GET'
        })
    eventosIngresados = await res.json()
    for(m = 0; m <= (anoActual - 2018)*12 + mesActual; m++){
        setCalendario("next");
    }
}


//get children from calendar-div
var eventDiv = document.getElementById("event")
var eventName = document.getElementById("name")
var eventLink = document.getElementById("link")
var calendarDiv = document.getElementById("calendar-div")
var volverButton = document.getElementById("volver")
volverButton.onclick = () => showCalendario();

var row0 = document.getElementById("row0").childNodes;
var row1 = document.getElementById("row1").childNodes;
var row2 = document.getElementById("row2").childNodes;
var row3 = document.getElementById("row3").childNodes;
var row4 = document.getElementById("row4").childNodes;
var row5 = document.getElementById("row5").childNodes;




const date = new Date();

var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");
var nextButtonMobil = document.getElementById("nextMobil");
var prevButtonMobil = document.getElementById("prevMobil");

var i = 0;
var j = 0;
var m = 0;

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
var mes = -1;

var holdNextOffSet = 0;
var holdPrevOffSet = 0;
var nextOffSet = 0;
var prevOffSet = 0;
var lastLineOffSet;

//setting actual month
var anoActual = date.getFullYear();
var mesActual = date.getMonth();
var diaActual = date.getDate() - 1;
var cuentaAno = 2018;
var cuentaAnoBifiesto = 2020 - 2018;
var cuentaDia = 0;
var cuentaSemanalDia = 0;

nextButton.onclick = () => setCalendario("next");
prevButton.onclick = () => setCalendario("prev");
nextButtonMobil.onclick = () => setCalendario("next");
prevButtonMobil.onclick = () => setCalendario("prev");

const showInfoEvento = (eventoIdP) => {
    eventDiv.style.transition = "opacity 500ms"
    calendarDiv.style.transition = "opacity 500ms"
    eventDiv.style.opacity = "1";
    eventDiv.style.zIndex = "2";
    calendarDiv.style.opacity = "0";

    eventosIngresados.forEach(evento => {
        console.log(evento._id)
        if(evento._id == eventoIdP){
            eventName.innerText = evento.nombreEvento;
            eventLink.innerHTML = `<a target="_blank" href="${evento.linkEvento}">Inscribirme</a>`;
        }
    })

}

const showCalendario = () => {
    eventDiv.style.transition = "opacity 500ms"
    calendarDiv.style.transition = "opacity 500ms"
    eventDiv.style.opacity = "0";
    eventDiv.style.zIndex = "-1";
    calendarDiv.style.opacity = "1";
}

const resetBackward = () => {
    if(mes < 0){
        mes = 11;
        cuentaAnoBifiesto--;
        cuentaAno--;
    }
    if(cuentaAnoBifiesto == 0){
        febrero.days = 29;
        cuentaAnoBifiesto = 4;
    }
    for(i = 0; i < 41; i++){
        document.getElementById(i).innerText = "";
        document.getElementById(i).style.backgroundColor = "#ffffff";
        document.getElementById(i).style.borderRadius = "0px";        
        document.getElementById(i).onclick = () => {}
    }
    cuentaDia = meses[mes].days;
    lastLineOffSet = 7;
    document.getElementById("month").innerText = meses[mes].name;
}

const resetForward = () => {
    cuentaDia = 0;
    if(cuentaAnoBifiesto == 4){
        febrero.days = 29;
        cuentaAnoBifiesto = 0;
    }
    if(mes == 12){
        mes = 0;
        cuentaAnoBifiesto++;
        cuentaAno++;
    }
    for(i = 0; i < 41; i++){
        document.getElementById(i).innerText = "";
        document.getElementById(i).style.backgroundColor = "#ffffff";
        document.getElementById(i).style.borderRadius = "0px";        
        document.getElementById(i).onclick = () => {}
    }
    document.getElementById("month").innerText = meses[mes].name;
}

const moveCalendarForward = () => {
    mes++;
    resetForward();
    for(i = 0; i <= 41; i++){
        if(i < meses[mes].days){
            document.getElementById(i + nextOffSet).innerText = i + 1;
            if(i - nextOffSet < 0){
                holdPrevOffSet++;
            }
            if(i + nextOffSet >= 28){
                holdNextOffSet++;
                if(holdNextOffSet == 7) holdNextOffSet = 0;
            }


            eventosIngresados.forEach(evento => {
                for(j = 0; j < evento.fecha.duracionDias; j++){
                    if(evento.fecha.anoInicial == cuentaAno
                    && evento.fecha.mesInicial.numero == meses[mes].month
                    && evento.fecha.mesInicial.dias[j] == cuentaDia){
                        document.getElementById(i + nextOffSet).style.backgroundColor = '#F75E62';
                        //redondea inicio de linea (POR SER PRIMER DIA DE EVENTO)
                        if(evento.fecha.diaInicial == cuentaDia){
                            document.getElementById(i + nextOffSet).style.borderTopLeftRadius = "100px";
                            document.getElementById(i + nextOffSet).style.borderBottomLeftRadius = "100px";
                        }
                        //redondea final de linea (POR SER ULTIMO DIA DEL MES)
                        if(cuentaDia == meses[mes].days - 1){
                            document.getElementById(i + nextOffSet).style.borderTopRightRadius = "100px";
                            document.getElementById(i + nextOffSet).style.borderBottomRightRadius = "100px";
                        }
                        document.getElementById(i + nextOffSet).onclick = () => showInfoEvento(evento._id);
                    }

                    if(evento.fecha.anoFinal == cuentaAno
                    && evento.fecha.mesFinal.numero == meses[mes].month
                    && evento.fecha.mesFinal.dias[j] == cuentaDia){

                        document.getElementById(i + nextOffSet).style.backgroundColor = '#F75E62';
                        //redondea fin de linea (POR SER ULTIMO DIA DE EVENTO)
                        if(evento.fecha.diaFinal == cuentaDia){ // HACER QUE IDENTIFIQUE ULTIMO DIA DEL MES (NO DEL EVENTO)
                            document.getElementById(i + nextOffSet).style.borderTopRightRadius = "100px";
                            document.getElementById(i + nextOffSet).style.borderBottomRightRadius = "100px";
                        }
                        //redondea inicio de linea (POR SER PRIMER DIA DE MES)
                        if(cuentaDia == 0){
                            document.getElementById(i + nextOffSet).style.borderTopLeftRadius = "100px";
                            document.getElementById(i + nextOffSet).style.borderBottomLeftRadius = "100px";
                        }
                        document.getElementById(i + nextOffSet).onclick = () => showInfoEvento(evento._id);
                    }
                }
            })
            if(cuentaAno == anoActual
            && mes == mesActual
            && i == diaActual){
                if(document.getElementById(i + nextOffSet).style.backgroundColor != 'rgb(247, 94, 98)'){
                    document.getElementById(i + nextOffSet).style.backgroundColor = '#16CBD9';
                    document.getElementById(i + nextOffSet).style.borderRadius = "100px";        
                }else {
                    document.getElementById(i + nextOffSet).style.backgroundColor = '#16CBD9';                
                }
            }
            cuentaDia++;
            if(cuentaDia == meses[mes].days){
                cuentaDia = 0;
            }
        }
    }

    prevOffSet = 7 - holdPrevOffSet;
    nextOffSet = holdNextOffSet;
    holdPrevOffSet = 0;  
    holdNextOffSet = 0;
    if(meses[mes].name == "Febrero" && meses[mes].days == 29){
        febrero.days = 28;
    }
}




const moveCalendarBackward = () => {
    mes--;
    resetBackward();
    for(i = 41; i >= 0; i--){
        if(i - (7 + meses[mes].days + prevOffSet - 35) < 0){
            holdPrevOffSet++;
            if(holdPrevOffSet == 7) holdPrevOffSet = 0;
        }
        if(i - lastLineOffSet + prevOffSet >= 28){
            holdNextOffSet++;
            if(holdNextOffSet == 7) holdNextOffSet = 0;
        }
        if(i - (41 - meses[mes].days) - 1 >= 0){
            if(meses[mes].days + prevOffSet > 35){
                lastLineOffSet = 0;
            }
            document.getElementById(i - prevOffSet - lastLineOffSet).innerText = i - (41 - meses[mes].days);
        
            cuentaDia--;
            eventosIngresados.forEach(evento => {
                for(j = 0; j < evento.fecha.duracionDias; j++){
                    if(evento.fecha.anoInicial == cuentaAno
                    && evento.fecha.mesInicial.numero == meses[mes].month
                    && evento.fecha.mesInicial.dias[j] == cuentaDia){
                        document.getElementById(i - lastLineOffSet - prevOffSet).style.backgroundColor = '#F75E62';
                        //redondea inicio de linea (POR SER PRIMER DIA DE EVENTO)
                        if(evento.fecha.diaInicial == cuentaDia){
                            document.getElementById(i - lastLineOffSet - prevOffSet).style.borderTopLeftRadius = "100px";
                            document.getElementById(i - lastLineOffSet - prevOffSet).style.borderBottomLeftRadius = "100px";
                        }
                        //redondea final de linea (POR SER ULTIMO DIA DEL MES)
                        if(cuentaDia == meses[mes].days - 1){
                            document.getElementById(i - lastLineOffSet - prevOffSet).style.borderTopRightRadius = "100px";
                            document.getElementById(i - lastLineOffSet - prevOffSet).style.borderBottomRightRadius = "100px";
                        }
                        document.getElementById(i - lastLineOffSet - prevOffSet).onclick = () => showInfoEvento(evento._id);
                    }
                    if(evento.fecha.anoFinal == cuentaAno
                    && evento.fecha.mesFinal.numero == meses[mes].month
                    && evento.fecha.mesFinal.dias[j] == cuentaDia){
                        document.getElementById(i - lastLineOffSet - prevOffSet).style.backgroundColor = '#F75E62';
                        if(evento.fecha.diaFinal == cuentaDia){ // HACER QUE IDENTIFIQUE ULTIMO DIA DEL MES (NO DEL EVENTO)
                            document.getElementById(i - lastLineOffSet - prevOffSet).style.borderTopRightRadius = "100px";
                            document.getElementById(i - lastLineOffSet - prevOffSet).style.borderBottomRightRadius = "100px";
                        }
                        //redondea inicio de linea (POR SER PRIMER DIA DE MES)
                        if(cuentaDia == 0){
                            document.getElementById(i - lastLineOffSet - prevOffSet).style.borderTopLeftRadius = "100px";
                            document.getElementById(i - lastLineOffSet - prevOffSet).style.borderBottomLeftRadius = "100px";
                        }
                        document.getElementById(i - lastLineOffSet - prevOffSet).onclick = () => showInfoEvento(evento._id);
                    }
                }
            })
            if(cuentaAno == anoActual
            && mes == mesActual
            && i - (41 - meses[mes].days) == diaActual + 1){
                if(document.getElementById(i - lastLineOffSet - prevOffSet).style.backgroundColor != 'rgb(247, 94, 98)'){
                    document.getElementById(i - lastLineOffSet - prevOffSet).style.backgroundColor = '#16CBD9';
                    document.getElementById(i - lastLineOffSet - prevOffSet).style.borderRadius = "100px"
                }else {
                    document.getElementById(i - lastLineOffSet - prevOffSet).style.backgroundColor = '#16CBD9';
                }    
            }
                
            if(cuentaDia <= 0){
                cuentaDia =  meses[mes].days;
            }
        }
    }

    prevOffSet = holdPrevOffSet;
    nextOffSet = 7 - holdNextOffSet;
    holdPrevOffSet = 0;
    holdNextOffSet = 0;
    if(meses[mes].name == "Febrero" && meses[mes].days == 29){
        febrero.days = 28;
    }
}



const setCalendario = (direction) => {
    if(direction == "next"){
        moveCalendarForward();
    }else if(direction == "prev"){
        moveCalendarBackward();
    }
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
    setNav(6);
    document.body.style.opacity='1'
}, 200)

