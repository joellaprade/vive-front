var container = document.getElementById("testimonials");
var elements = { 
    testimonials: [
    {
        name: "Floribeth",
        photo: "../assets/testimonios/testimonio-0.png",
        occupation: "Educadora",
        preview: "Hago extensiva la invitaci&oacute;n para que decidas a dar un paso adelante para vivenciar la magia de VIVE, donde conocer&aacute;s personas impresionantes que te animar&aacute;n a ser la mejor versi&oacute;n de t&iacute;....",
        testimonial: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mi nombre es Floribeth Romero Padilla, educadora pensionada. Cuando me hablaron de los Entrenamientos Transformacionales VIVE, no dud&eacute; en recibir la informaci&oacute;n para inscribirme de inmediato, ya que el tema del Crecimiento Personal siempre me ha apasionado, pero VIVE, es otro nivel. Aqu&iacute; he recibido todas las herramientas necesarias para llevar una vida con valent&iacute;a y coraje, dejando miedos y excusas de lado para salir adelante con mis sue&ntilde;os y metas. Con entrenadores de primer nivel, donde cada vivencia es una experiencia de vida que nos ayuda a crecer y servir a los dem&aacute;s. Aprend&iacute; que la vida es ahora y que no puedo postergar mis acciones para alcanzar el &eacute;xito. Que las decisiones se toman con firmeza y seguridad, comprometida con mi vida, dando lo mejor de m&iacute;, creyendo en m&iacute; para vivir una vida plena y completa. "
        + "</br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hago extensiva la invitaci&oacute;n para que decidas a dar un paso adelante para vivenciar la magia de VIVE, donde conocer&aacute;s personas impresionantes que te animar&aacute;n a ser la mejor versi&oacute;n de t&iacute;. Aqu&iacute; es donde verdaderamente todo tiene sentido." 
        + "<br><br> Atr&eacute;vete y VIVE.",
        id: 0
    },
    {
        name: "Lucy",
        photo: "../assets/testimonios/testimonio-1.png",
        occupation: "Educadora",
        preview: "Gracias a esta experiencia hoy llevo cada d&iacute;a mi vida a otro nivel, buscando mi transformaci&oacute;n diaria...",
        testimonial: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mi nombre es Lucy, graduada de los entrenamientos Vive. Gracias a esta experiencia hoy llevo cada d&iacute;a mi vida a otro nivel, buscando mi transformaci&oacute;n diaria. Acceso a mi vulnerabilidad con amor, me observo consiente, permitiendo sentir y entender que todo est&aacute; bien. Ahora no solo sue&ntilde;o, ahora visualizo mis sue&ntilde;os y los hago realidad...",
        id: 1
    },
    {
        name: "Laura y Luis",
        photo: "../assets/testimonios/testimonio-2.png",
        occupation: "Consultora y Gerente de Riesgo",
        preview: "Pero cuando lleg&oacute; VIVE a nuestras vidas, pudimos comprender que era necesario un  proceso de integraci&oacute;n  y de pr&aacute;cticas que no hab&iacute;amos experimentado antes...",
        testimonial: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Somos una pareja que siempre busca maneras de ser conscientes de los procesos que vivimos tanto personales como en matrimonio. Realmente hab&iacute;amos hecho muchas cosas, psicolog&iacute;a, coaching, psicod&eacute;licos, por supuesto que en todo encontr&aacute;bamos algo valioso, pero cuando lleg&oacute; VIVE a nuestras vidas, pudimos comprender que era necesario un  proceso de integraci&oacute;n  y de pr&aacute;cticas que no hab&iacute;amos experimentado antes. El regalo que nos ha dado este entrenamiento es de VIVIR la transformaci&oacute;n, integrarla, y ver los cambios en TODO el entorno de nuestra vida.",
        id: 2
    },
    {
        name: "Sebastian",
        photo: "../assets/testimonios/testimonio-3.png",
        occupation: "Estudiante Universitario",
        preview: "Pas&eacute; de ser un adolescente sin ganas de vivir encerrado en un cuarto a ya un adulto empezando a luchar por sus sue&ntilde;os con una sonrisa en la cara...",
        testimonial: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hola, mi nombre es Sebasti&aacute;n, tengo 19 a&ntilde;os y quiero contar mi experiencia con los Entrenamientos Vive. Durante una gran parte mi vida en la adolescencia me sent&iacute;a perdido, triste, con miedo al futuro y en general sin saber que hacer conmigo hasta el punto de llegar a tener pensamientos suicidas y acciones de auto lesiones. Fue en esta misma &eacute;poca en donde conoc&iacute; el entrenamiento ya que me lo recomend&oacute; un familiar. Al principio ten&iacute;a muchas dudas al respecto ya que no sab&iacute;a qu&eacute; era y menos de lo que hac&iacute;a, sin embargo, me arm&eacute; de valent&iacute;a y realic&eacute; estos entramientos. Podr&iacute;a hablar a&ntilde;os de lo mucho que me ayud&oacute;, de forma resumida dir&eacute; que el yo de hace unos dos a&ntilde;os estar&iacute;a impresionado de la persona que soy al d&iacute;a de hoy, una persona segura, determinada, apasionada y sobre todo feliz. Pas&eacute; de ser un adolescente sin ganas de vivir encerrado en un cuarto a ya un adulto empezando a luchar por sus sue&ntilde;os con una sonrisa en la cara.",
        id: 3
    },
    {
        name: "Carlos (Charlie)",
        photo: "../assets/testimonios/testimonio-4.png",
        occupation: "Estudiante",
        preview: "Vive ha sido para mi como el trampol&iacute;n para seguir subiendo en todas las &aacute;reas, metas y relaciones...",
        testimonial: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vive ha sido para mi como el trampol&iacute;n para seguir subiendo en todas las &aacute;reas, metas y relaciones. Para creer en mis habilidades de liderazgo y de servir a otros a alcanzar sus metas.",
        id: 4
    },
    {
        name: "Cynthia y Marco",
        photo: "../assets/testimonios/testimonio-5.png",
        occupation: "Coach Ontol&oacute;gico e Ingeniero Agr&oacute;nomo",
        preview: "Desde que descubrimos el valor del entrenamiento nos impuls&oacute; el deseo de llevar este regalo a todas aquellas personas importantes en nuestra vida...",
        testimonial: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Desde que descubrimos el valor del entrenamiento nos impuls&oacute; el deseo de llevar este regalo a todas aquellas personas importantes en nuestra vida. Fue as&iacute; como se unieron a la experiencia  nuestra familia y  colaboradores de nuestra empresa. Hoy en d&iacute;a  agradecemos a Dios la nueva etapa en la que nos sentimos satisfechos con nuestra transformaci&oacute;n personal, matrimonial, familiar y empresarial, teniendo los resultados que siempre so&ntilde;amos.",
        id: 5
    },
    {
        name: "Keren",
        photo: "../assets/testimonios/testimonio-6.png",
        occupation: "Ingeniera Forestal, Analista en Sistema de informaci&oacute;n Geogr&aacute;fica y Acuarelista",
        preview: "Durante mi proceso me he encontrado a m&iacute; misma, mis pasiones, conectado con mi poder femenino interior, despertado dones y talentos que hab&iacute;a mantenidos dormidos por mucho tiempo, me empodere de mi vida, deje de buscar culpables y me reconoc&iacute; due&ntilde;a de mi vida...",
        testimonial: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Como profesional en mi vida cre&iacute;a que todo giraba en torno al &eacute;xito en los negocios o en alcanzar un mejor puesto o salario, y por mucho tiempo hab&iacute;a dejado de lado mis sue&ntilde;os. Viv&iacute;a exigi&eacute;ndome, siendo una jueza dura conmigo misma y con mi familia. En mi interior sab&iacute;a que hab&iacute;a otro camino, y por eso no dude en elegir inscribirme y completar el entrenamiento transformacional VIVE. Durante mi proceso me he encontrado a m&iacute; misma, mis pasiones, conectado con mi poder femenino interior, despertado dones y talentos que hab&iacute;a mantenidos dormidos por mucho tiempo, me empodere de mi vida, deje de buscar culpables y me reconoc&iacute; due&ntilde;a de mi vida. Las herramientas que he aprendido en cada paso Intro, Avanzado y Vive, me abrieron la posibilidad de observarme, creer y confiar en m&iacute;, llenarme de amor, para dar amor a otros, sanar  heridas, para sanar relaciones con las personas que amo y son importantes en mi vida. Hoy puedo decir que la abundancia, la plenitud y la prosperidad existen en mi vida, porque soy capaz de crearlas.",
        id: 6
    },
    {
        name: "Familia Gonz&aacute;lez Arguedas",
        photo: "../assets/testimonios/testimonio-7.png",
        occupation: "",
        preview: "Nos mostr&oacute; la importancia de estar al servicio de los dem&aacute;s y dejar un legado lleno de amor en la sociedad...",
        testimonial: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hola, somos la Familia Gonz&aacute;lez Arguedas, Marcos, Diana, Jose Andr&eacute;s, Diego Alonso y Mar&iacute;a Paula."
        + "</br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hace aproximadamente 3 anos iniciamos con VIVE este viaje de transformaci&oacute;n personal  en familia. "
        + "</br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El haber realizado este entrenamiento nos permiti&oacute; salirnos de nuestra zona de confort, eliminar esas creencias limitantes que por muchos a&ntilde;os aplicamos en nuestras vidas, entendimos que tenemos un mundo de posibilidades y que cada d&iacute;a tenemos el poder de elegir como queremos vivirlo, experimentamos el amor, la compasi&oacute;n, la gratitud y la abundancia, creamos relaciones conscientes con nuestra familia y amigos, liber&aacute;ndonos de rencores y amarguras, perdonando y decidiendo vivir el presente, el ahora, permitiendo que todo fluya y entendiendo que todo es perfecto y sucede en el tiempo perfecto porque al final todos estamos conectados con nuestro ser superior y con el universo. Nos mostr&oacute; la importancia de estar al servicio de los dem&aacute;s y dejar un legado lleno de amor en la sociedad.",
        id: 7
    },
    {
        name: "Esteban",
        photo: "../assets/testimonios/testimonio-8.png",
        occupation: "Actor / Promotor Cultural",
        preview: "Para m&iacute; cada una de las tres partes del entrenamiento VIVE, fue atravesar puertas que me llevaron a aplicar lo aprendido sobre mi, sobre mi entorno y como trabajar en equipo para un objetivo en com&uacute;n, que a modo personal me gener&oacute; y a&uacute;n me genera bienestar...",
        testimonial: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para m&iacute; cada una de las tres partes del entrenamiento VIVE, fue atravesar puertas que me llevaron a aplicar lo aprendido sobre mi, sobre mi entorno y como trabajar en equipo para un objetivo en com&uacute;n, que a modo personal me gener&oacute; y a&uacute;n me genera bienestar.",
        id: 8
    },
    {
        name: "Rolando",
        photo: "../assets/testimonios/testimonio-9.png",
        occupation: "Gerente de Operaciones",
        preview: "Al elegir vivir este entrenamiento le dije te amo a mi hija despu&eacute;s de 19 a&ntilde;os de no dec&iacute;rselo, aprend&iacute; a expresar mis emociones sin miedo al qu&eacute; dir&aacute;n...",
        testimonial: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El entrenamiento Vive me ayud&oacute; a conectar con mi SER, a derribar los muros que hab&iacute;a puesto mi ego para protegerme del mundo, incluso de mi propia familia, me contaba la historia de que no era amoroso y no pod&iacute;a expresar amor, al elegir vivir este entrenamiento le dije te amo a mi hija despu&eacute;s de 19 a&ntilde;os de no dec&iacute;rselo, aprend&iacute; a expresar mis emociones sin miedo al qu&eacute; dir&aacute;n, a romper con la creencia de que los hombres no lloran y no pueden expresar sus emociones ya que es signo de debilidad, aprend&iacute; que ser vulnerable no es ser d&eacute;bil, cuando entend&iacute; eso, todo empez&oacute; a fluir de manera distinta en mi vida, desde el donde yo elijo como sentirme, sin pensar en el qu&eacute; dir&aacute;n; conectado con mi esencia entendiendo que la transformaci&oacute;n no es un destino, es un camino el cual nos lleva a conectar con nuestro SER y la divinidad.   Le agradezco a Vive y al grupo de personas que han estado en servicio en mi proceso y en especial a mi esposa Laura, mi compa&ntilde;era de viaje en este hermoso camino al despertar desde el amor.",
        id: 9
    },
    {
        name: "Maria Lorena",
        photo: "../assets/testimonios/testimonio-10.png",
        occupation: "Abogada",
        preview: "Con este entrenamiento pude descubrir las capacidades y posibilidades propias para amarme, y en consecuencia, todo cambia...",
        testimonial: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Con este entrenamiento pude descubrir las capacidades y posibilidades propias para amarme, y en consecuencia, todo cambia.",
        id: 10
    },
    {
        name: "Laura",
        photo: "../assets/testimonios/testimonio-11.png",
        occupation: "Mercadeo y Terapeuta Hol&iacute;stica",
        preview: "Estuve dormida por mucho tiempo en un estado de inconsciencia y tuve un despertar emocional, espiritual y f&iacute;sico, donde pude trabajar mi SER de una forma profunda y ponerme al servicio de los dem&aacute;s desde el Amor...",
        testimonial: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para mi ser una graduada Vive ha sido una verdadera transformaci&oacute;n en mi vida y la de mi familia, yo estuve dormida por mucho tiempo en un estado de inconsciencia y tuve un despertar emocional, espiritual y f&iacute;sico, donde pude trabajar mi SER de una forma profunda y ponerme al servicio de los dem&aacute;s desde el Amor.  Una experiencia &uacute;nica y maravillosa donde tambi&eacute;n tengo la oportunidad de conocer personas maravillosas en mi vida.",
        id: 11
    },
    {
        name: "Vanessa",
        photo: "../assets/testimonios/testimonio-12.png",
        occupation: "Profesora de Franc&eacute;s",
        preview: "Al hablar de Vive , mi coraz&oacute;n salta de felicidad al recordar el d&iacute;a en que un gran amigo, de esos que yo llamo '&aacute;ngeles en la tierra' me invit&oacute; a formar parte de un entrenamiento de transformaci&oacute;n...",
        testimonial: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Al hablar de Vive , mi coraz&oacute;n salta de felicidad al recordar el d&iacute;a en que un gran amigo, de esos que yo llamo '&aacute;ngeles en la tierra' me invit&oacute; a formar parte de un entrenamiento de transformaci&oacute;n. En ese momento pasaba por grandes obst&aacute;culos en mi vida, personalmente padezco de crisis de ansiedad y los ataques de p&aacute;nico estaban atac&aacute;ndome sin piedad, profesionalmente inestable y con mucho rencor en mi coraz&oacute;n culpando a la vida por todo lo que me pasaba a pesar que estaba llevando terapia psicol&oacute;gica por 2 a&ntilde;os."
        + "</br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En el curso introductorio, abr&iacute; mi coraz&oacute;n y mi mente, y  en tan solo 5 d&iacute;as, logr&eacute; perdonar y perdonarme genuinamente. Esto no lo logr&eacute; jam&aacute;s en la terapia que llevaba... Vive es una experiencia inigualable. Gracias a las herramientas aqu&iacute; aprendidas, hoy vivo plenamente disfrutando la vida al m&aacute;ximo, llev&aacute;ndola m&aacute;s all&aacute; de los miedos, am&aacute;ndome y creyendo en mi misma hasta crear mi propio emprendimiento de clases de Franc&eacute;s trabajando con estudiantes de M&eacute;xico y Costa Rica!!"
        + "</br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No lo dudes, si abres tu coraz&oacute;n y tu mente, aqu&iacute; encontrar&aacute;s lo que la vida quiere mostrarte, viviendo no desde el miedo, sino desde el amor liberador.",
        id: 12
    },
]}

//<------ INPUT --------->





var i;
//j traquea el numero de box
var j;
//posicion en la que se muestra el elemento (visualmente, es el espacio en el que se ve el elemento, esta posicion o espacio se mueve 100px hacia un lado y luego vuelve a su lugar)
var boxes = [];
//contenido dentro de boxes (visualmente, se mueve con boxes, pero cuando se dispara la funcion dentro del timeout, movemos cada elemento en el contexto dentro del array un espacio, de forma que visualmente parece que el contenido no se devolvio como los boxes)
var content = [];
//contenedor de elementos

//botones
var elementNumber = elements.testimonials.length % 2 != 0 ? elements.testimonials.length : elements.testimonials.length - 1;
//informativo para decidir el valor de translate
var elementWidth;
var elementMargin;
//almacena de que char a que char hay que splitiar el string devuelto por getComputedStyle()
var elementMarginRange;
//almacena distancia de elemento a recorrer en cada swipe
var elementMovement;
var middleElement = Math.floor(elementNumber/2);
var scaleHalf = window.screen.width > 1000 ? 'scale(0.5)' : 'scale(1)';

for(i = 0; i < elementNumber; i++){
    container.innerHTML += 

        `<div id="${i}" class="testimonial">
            <div class="header">
                <div class="person-info">
                    <img src="${elements.testimonials[i].photo}" alt="">
                    <div class="idk">
                        <h3 class="nombre">
                            ${elements.testimonials[i].name}
                        </h3>
                        <p class="ocupacion secondary">
                            ${elements.testimonials[i].occupation}
                        </p>
                    </div>
                </div>
                <img src="../assets/testimonios/quotes.png" class="${ document.body.clientWidth > 1100 ? "quotes" : "hidden"}">
            </div>
            <div class="text">
                <p>${elements.testimonials[i].testimonial}</p>    
            </div>
            <img src="../assets/testimonios/quotes.png" class="${ document.body.clientWidth < 1100 ? "quotes" : "hidden"}" style="margin: auto 0px; ">
            <p style="text-align: center; position: absolute; bottom: -50px;" class="secondary">
                desliza en la pantalla para cambiar de testimonio
            </p>
        </div>`;
}

//almacenamos los elementos dentro de ambos arrays
for(i = 0; i < elementNumber; i++){
    boxes[i] = document.getElementById(String(i));
    content[i] = document.getElementById(String(i)).innerHTML;
}
window.addEventListener('load', () => {
    elementWidth = document.getElementById('testimonials').children[0].clientWidth
    elementMarginRange = window.getComputedStyle(boxes[0]).margin.length == 9 ? [4,7] : [3,6];
    elementMargin = Number(window.getComputedStyle(boxes[0]).margin.slice(elementMarginRange[0],elementMarginRange[1]))
    elementMovement = 
        elementWidth
        + elementMargin*2;
})

j = middleElement;
for(i = 0; i < elementNumber; i++){
    boxes[j].innerHTML = content[i];
    j++;
    boxes[i].style.transform = `${scaleHalf}`;

    if(j == elementNumber){
        j = 0;
    }

    if(i != middleElement - 1 && i !=  middleElement && i !=  middleElement + 1){
        boxes[i].style.opacity = '0';
    }
}

boxes[middleElement].style.transition = "transform 0s ease-in-out";
boxes[middleElement].style.transform = `scale(1)`;

const moveLeft = () => {
    for(i = 0; i < elementNumber; i++){
        if(j == middleElement + 2){
            boxes[j].style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
            boxes[j].style.transform = `translateX(-${elementMovement}px) ${scaleHalf}`;
            boxes[j].style.opacity = '1';
            j++;
        }else if(j == middleElement + 1){
            boxes[j].style.transition = "transform 0.5s ease-in-out";
            boxes[j].style.transform = `translateX(-${elementMovement}px) scale(1)`;//scale(2)
            j++;
        }else if(j == middleElement){
            boxes[j].style.transition = "transform 0.5s ease-in-out";
            boxes[j].style.transform = `translateX(-${elementMovement}px) ${scaleHalf}`; 
            j++;
        }else if(j == middleElement - 1){
            boxes[j].style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
            boxes[j].style.transform = `translateX(-${elementMovement}px) ${scaleHalf}`;
            boxes[j].style.opacity = '0';
            j++;
        }else if(j == elementNumber){
            j = 0;
            boxes[j].style.transform = `translateX(${elementMovement*elementNumber-elementWidth}px)`;
            j++
        }else{
            boxes[j].style.transition = "transform 0.5s ease-in-out";
            boxes[j].style.transform = `translateX(-${elementMovement}px)`;
            j++;
        }    
    }

    

    setTimeout(() => {
        content.push(content.shift());
        for(i = 0; i < elementNumber; i++){
            boxes[j].innerHTML = content[i];
            j++
            if(j == elementNumber){
                j = 0;
            }
        }
        for(i = 0; i < elementNumber; i++){
            boxes[i].style.transition = "transform 0s ease-in-out, opacity 0s ease-in-out";
            boxes[i].style.transform = `translateX(0px) ${scaleHalf}`;
            if(i != middleElement - 1 && i !=  middleElement && i !=  middleElement + 1){
                boxes[i].style.opacity = '0';
            }
            boxes[middleElement - 1].style.opacity = '1';
        }
        boxes[middleElement].style.transform = "scale(1)"
    },500)
}





const moveRight = () => {
    for(i = 0; i < elementNumber; i++){
        if(j == middleElement - 2){
            boxes[j].style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
            boxes[j].style.transform = `translateX(${elementMovement}px) ${scaleHalf}`;
            boxes[j].style.opacity = '1';
            j--;
        }else if(j == middleElement - 1){
            boxes[j].style.transition = "transform 0.5s ease-in-out";
            boxes[j].style.transform = `translateX(${elementMovement}px) scale(1)`;
            j--;
        }else if(j == middleElement){
            boxes[j].style.transition = "transform 0.5s ease-in-out";
            boxes[j].style.transform = `translateX(${elementMovement}px) ${scaleHalf}`; 
            j--;
        }else if(j == middleElement + 1){
            boxes[j].style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
            boxes[j].style.transform = `translateX(${elementMovement}px) ${scaleHalf}`;
            boxes[j].style.opacity = '0';
            j--;
        }else if(j < 0){
            j = elementNumber - 1;
            boxes[j].style.transform = `translateX(-${elementMovement*elementNumber-elementWidth}px)`;
            j--
        }else{
            boxes[j].style.transition = "transform 0.5s ease-in-out";
            boxes[j].style.transform = `translateX(${elementMovement}px)`;
            j--;
        }    
    }



    setTimeout(() => {
        for(i = elementNumber - 1; i >= 0; i--){
            if(j < 0){
                j = elementNumber - 1;
            }
            boxes[j].innerHTML = content[i];
            j--
        } 
        for(i = elementNumber - 1; i >= 0; i--){
            boxes[i].style.transition = "transform 0s ease-in-out, opacity 0s ease-in-out";
            boxes[i].style.transform = `translateX(0px) ${scaleHalf}`;
            if(i != middleElement - 1 && i !=  middleElement && i !=  middleElement + 1){
                boxes[i].style.opacity = '0';
            }
            boxes[middleElement + 1].style.opacity = '1';
        }
        boxes[middleElement].style.transform = "scale(1)"
        content.unshift(content.pop());
    },500)
}

















//SWIPPE DETECTION

let touchArea = boxes[middleElement];

let leftSecondary = boxes[middleElement - 1]
let rightSecondary = boxes[middleElement + 1]

let mouseX,
    initialX = 0;
let mouseY,
    initialY = 0;
let isSwiped;

let swiped

let events = {
    mouse: {
        down: "mousedown",
        move: "mousemove",
        up: "mouseup"
    },
    touch: {
        down: "touchstart",
        move: "touchmove",
        up: "touchend"
    }
};

let deviceType = "";

const isTouchDevice = () => {
    try{
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
    }
    catch(e){
        deviceType = "mouse";
        return false;
    }
};

let rectLeft = touchArea.getBoundingClientRect().left;
let rectTop = touchArea.getBoundingClientRect().top;



const getXY = (e) => {
    mouseX = (!isTouchDevice() ? e.pageX : e.touches[0].pageX) - rectLeft;
    mouseY = (!isTouchDevice() ? e.pageY : e.touches[0].pageY) - rectTop;
}

isTouchDevice();

touchArea.addEventListener(events[deviceType].down,
    (event) => {
        isSwiped = true;
        getXY(event);
        initialX = mouseX;
        initialY = mouseY;
    }
);

touchArea.addEventListener(events[deviceType].move,
(event) => {
    if(!isTouchDevice()){
        event.preventDefault();
    }
    if(isSwiped){
        getXY(event);
        let diffX = mouseX - initialX;
        let diffY = mouseY - initialY;
        if(Math.abs(diffY)*10 > Math.abs(diffX)){
            swiped = "none";
        }else if(diffX > 0){
            swiped = "right";
        }else if(diffX < 0){
            swiped = "left";
        }

    }
});

touchArea.addEventListener(events[deviceType].up, () => {
    isSwiped = false;
    if(swiped == "left"){
        moveLeft();
    }else if(swiped == "right"){
        moveRight();
    }
});

touchArea.addEventListener("mouseleave", () => {
    isSwiped = false;
})
window.onload = () => {
    isSwiped = false;
}
//si se toca el elemento a la izquierda del primario, se mueve hacia la derecha para ver el elemento clickeado
leftSecondary.onclick = () => {
    moveRight();
}

//si se toca el elemento a la derecha del primario, se mueve hacia la izquierda para ver el elemento clickeado
rightSecondary.onclick = () => {
    moveLeft();
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
    setNav(3);
    document.body.style.opacity='1'
}, 200)

