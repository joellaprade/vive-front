var contentContainer = document.getElementById("content");
var infoContainer = document.getElementById("info");
var control = document.getElementById("control");
var controlMobil = document.getElementById("control-mobil");

var entrenamientos = [
    {
        description: `
        <h2>&iquest;Qu&eacute; es el Intro?</h2>
        <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El Introductorio es un entrenamiento
            de autodescubrimiento, te permitir&aacute;
            detectar cuales de tus creencias
            actuales te impulsan y cuales te
            frenan de alcanzar tus sue&ntilde;os. Esta
            nueva conciencia te brindar&aacute; claridad
            para continuar con tu prop&oacute;sito.
        </p>

        <h3 style="margin-top: 70px;">Horario</h3>
        <p><b>5 d&iacute;as</b></p>
        <p>-<b>Mi&eacute;rcoles</b> 6pm - 11pm</p>
        <p>-<b>Jueves</b> 6pm - 11pm</p>
        <p>-<b>Viernes</b> 6pm - 11pm</p>
        <p>-<b>S&aacute;bado</b> 10am - 10pm</p>
        <p>-<b>Domingo</b> 10am - 7pm</p>
        <h3 style="margin-top: 70px;">Inversi&oacute;n</h3>
        <p><b>Precio Regular:</b> $299</p>
        <button>
            <a target="_blank" href="https://fs29.formsite.com/tbnK1N/hu5sbvt8xn/index">Inscribirme</a>
        </button>`,
        id: 0
    },
    {
        description:  `
        <h2>&iquest;Qu&eacute; es el Avanzado?</h2>
        <p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El Avanzado surge a partir de lo que
            descubriste en el Intro, y te lleva a romper con
            esas limitantes que has considerado hasta
            ahora. Te conectar&aacute; con tu prop&oacute;sito y
            notar&aacute;s un cambio de perspectiva en tu vida,
            y la importancia del rol que jug&aacute;s en tu
            comunidad y en el mundo. Este
            entrenamiento es considerado por los que lo
            han vivido, una de las experiencias m&aacute;s
            importantes de sus vidas.
        </p>

        <h3 style="margin-top: 70px;">Horario</h3>
        <p><b>5 d&iacute;as</b></p>
        <p>-<b>Mi&eacute;rcoles</b> 11am - 12mn</p>
        <p>-<b>Jueves</b> 11am -12mn</p>
        <p>-<b>Viernes</b> 11am - 12mn</p>
        <p>-<b>S&aacute;bado</b> 10am - 12mn</p>
        <p>-<b>Domingo</b> 11am - 6pm</p>

        <h3 style="margin-top: 70px;">Inversi&oacute;n</h3>
        <p><b>Precio Regular:</b>$950</p>`,
        id: 1
    },
    {
        description:  `
        <h2>&iquest;Qu&eacute; es el Vive?</h2>
        <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VIVE es un programa de aproximadamente
            90 d&iacute;as en donde pondr&aacute;s en pr&aacute;ctica lo
            que descubriste en las etapas previas. Es
            una oportunidad de retarte a cumplir tus
            metas, mientras aprend&eacute;s herramientas
            poderosas de liderazgo, trabajo en equipo
            y servicio a la comunidad. Descubrir&aacute;s que
            todo lo que te propon&eacute;s es posible y que te
            pod&eacute;s divertir en el camino.
        </p>

        <h3 style="margin-top: 70px;">Horario</h3>
        <p><b>90 d&iacute;as</b></p>
        <p>-<b>1ER FIN</b> Viernes 7pm - Domingo 8pm aprox.</p>
        <p>-<b>2NDO FIN</b> Viernes 7pm - Domingo 8pm aprox.</p>
        <p>-<b>3ER FIN</b> Viernes 4pm - Domingo 7pm aprox.</p>
        <p>El horario entre el Viernes y el Domingo puede variar segun el avanze del equipo</p>

        <h3 style="margin-top: 70px;">Inversi&oacute;n</h3>
        <p><b>Precio Regular:</b> $1300</p>`,
        id: 2
    },
    {
        description:  `
        <div class="entrenamiento">
            <h2>&iquest;Qu&eacute; es Relaciones Conscientes?</h2>
            <div class="dual-container">
                <div>
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Las Relaciones Conscientes no se tratan simplemente de conectar con otros, sino de hacerlo de una manera que sea liberadora, expansiva y aut&eacute;nticamente amorosa. Es aprender a amar profundamente sin perder nuestra esencia o libertad.
                        <br><br>
                        Te invitamos a un entrenamiento donde:
                        <br>- Exploraremos las ra&iacute;ces de nuestros miedos y c&oacute;mo afectan nuestra capacidad para amar y ser amados.
                        <br>- Reflexionaremos sobre el verdadero significado de la libertad en las relaciones y c&oacute;mo practicarla.
                        <br>- Descubriremos herramientas y estrategias para superar los obst&aacute;culos que nos impiden vivir relaciones plenas y conscientes.
                        <br>- Comprenderemos c&oacute;mo el amor y la libertad pueden coexistir, fortaleciendo nuestros v&iacute;nculos.
                        <br><br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Si est&aacute;s listo para transformar tus relaciones, para experimentar el amor como un sin&oacute;nimo de libertad y para conectar con otros de manera m&aacute;s profunda y consciente, &iexcl;este entrenamiento es para ti!
                        <br><br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;El viaje hacia relaciones m&aacute;s saludables y conscientes comienza con un paso. &iexcl;&uacute;nete a nosotros y da ese paso hoy!
                    </p>
                </div>
                <img src="../assets/relaciones-concientes.jpg">
            </div>

            <h3 style="margin-top: 70px;">Horario</h3>
            <p><b>3 d&iacute;as</b></p>
            <p>-<b>Viernes</b> 7pm - 10pm</p>
            <p>-<b>S&aacute;bado</b> 10am - 10pm</p>
            <p>-<b>Domingo</b> 10am - 6:30pm</p>

            <h3 style="margin-top: 70px;">Inversi&oacute;n</h3>
            <p><b>Precio Regular:</b> $259</p>
            <p><b>Precio con Acompa&ntilde;ante:</b> $359</p>

            <button style="margin-right: 30px;">
                <a target="_blank" href="https://fs29.formsite.com/tbnK1N/relaciones/index">Inscribirme Pt. 1</a>
            </button>
            <button style="background-color: #F75E62;">
                <a target="_blank" href="https://fs29.formsite.com/tbnK1N/4zc6nxhnux/index">Inscribirme Pt. 2</a>
            </button>
        </div>






        <div class="entrenamiento">
            <h2>&iquest;Qu&eacute; es Prosperidad y Abundancia?</h2>
            <div class="dual-container">
                <div>
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El Taller "Prosperidad y abundancia" est&aacute; dise&ntilde;ado para conectar con la fuente de estas preciada palabras, llenas de diversos significados, desde las relaciones interpersonales, finanzas, riqueza, y amor. Observaremos las creencias limitantes en la mentalidad que genera escasez, y que est&aacute; inserta en el promedio de la gente. Viviremos diferentes mec&aacute;nicas que te permitir&aacute;n acceder a la programaci&oacute;n mental y te podr&aacute;s dar permiso de actualizar ese "software" para ser fuente de un nuevo paradigma de prosperidad y abundancia.
                    </p>
                </div>
                <img src="../assets/prosperidad-abundancia.png">
            </div>

            <h3 style="margin-top: 70px;">Horario</h3>
            <p><b>3 d&iacute;as</b></p>
            <p>-<b>Viernes</b> 7pm - 10pm</p>
            <p>-<b>S&aacute;bado</b> 10am - 10pm</p>
            <p>-<b>Domingo</b> 10am - 6:30pm</p>

            <h3 style="margin-top: 70px;">Inversi&oacute;n</h3>
            <p><b>Precio Regular:</b> $259</p>
            <p><b>Precio con Acompa&ntilde;ante:</b> $359</p>

        <h3 style="margin-top: 100px;">*Fechas por definir* <br> </h3>
        <p>Cont&aacute;ctanos para mas informaci&oacute;n por WhatsApp:</p>
        <button>
            <a target="_blank" href="https://wa.me/50688219659">WhatsApp</a>
        </button>
            
        </div>
        







        <div class="entrenamiento">
            <h2>&iquest;Qu&eacute; es el MAM&copy;?</h2>
            <div class="dual-container">
                <div>
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MAM Son las siglas de Mas all&aacute; del
                        miedo 
                        Es una experiencia de poder, que se
                        traduce en un entrenamiento vivencial de
                        2 d&iacute;as creado e impartido por el coach
                        Pablo Ram&iacute;rez Bellini as&iacute; como otros
                        coaches certificados por Pablo.
                        En MAM&copy los participantes identifican las
                        justificaciones, conversaciones y
                        creencias que lo han limitado para
                        recuperar su poder personal, para
                        alcanzar sus metas y prop&oacute;sito de vida.
                        Es acerca de una nueva relaci&oacute;n con las
                        decisiones, Es atreverse, es vivir en el
                        presente, tomar acci&oacute;n, sentirse vivo de
                        verdad, es elevar tu energ&iacute;a como nunca
                        antes para lograr una transformaci&oacute;n
                        sostenible.
                        Es encontrar las respuestas que siempre
                        han estado en ti, en conceptos; para
                        llev&aacute;rselas en el cuerpo, porque lo que te
                        llevas en el cuerpo jam&aacute;s se olvida.
                        MAM&copy es acerca de romper los
                        candados que esconden el potencial.
                        En resumen: ES ROMPER TODAS LAS
                        BARRERAs.
                    </p>
                </div>
                <img src="../assets/mam.jpeg">
            </div>
            

            <h3 style="margin-top: 70px;">Horario</h3>
            <p><b>2 d&iacute;as</b></p>
            <p>-<b>S&aacute;bado</b> 10am - 9pm</p>
            <p>-<b>Domingo</b> 10am - 9pm</p>

            <h3 style="margin-top: 70px;">Inversi&oacute;n</h3>
            <p><b>Precio Regular:</b> $259</p>
            <p><b>Precio con Acompa&ntilde;ante:</b> $359</p>

            <h3 style="margin-top: 100px;">*Fechas por definir* <br> </h3>
            <p>Cont&aacute;ctanos para mas informaci&oacute;n por WhatsApp:</p>
            <button>
                <a target="_blank" href="https://wa.me/50688219659">WhatsApp</a>
            </button>
        </div>




        <div class="entrenamiento" style="margin: 0px;">
            <h2>&iquest;Qu&eacute; es el Samurai Game&copy;?</h2>
            <div class="dual-container">
                <div>
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Se trata de una de las simulaciones
                        más intensas y poderosas disponibles
                        para formar líderes a través del
                        aprendizaje vivencial.
                        Es un entrenamiento con la capacidad
                        de impactar a los participantes de
                        forma positiva, basado en principios
                        como integridad, respeto, valor,
                        compasión, honestidad y lealtad.
                        Fue creado en 1977 por George
                        Leonard, autor de varios libros,
                        conferencista, maestro de artes
                        marciales, veterano piloto de guerra
                        USA vs Japón.
                        Feedback de Forbes Mexico sobre The
                        Samurai Game&copy;.
                    </p>
                </div>
                <img src="../assets/mam.jpeg">
            </div>
            

            <h3 style="margin-top: 70px;">Horario</h3>
            <p><b>2 d&iacute;as</b></p>
            <p>-<b>S&aacute;bado</b> 10am - 9pm</p>
            <p>-<b>Domingo</b> 10am - 9pm</p>

            <h3 style="margin-top: 70px;">Inversi&oacute;n</h3>
            <p><b>Precio Regular:</b> $299</p>
            <p><b>Precio con Acompa&ntilde;ante:</b> $500</p>
            <br>
            <p><b><u>Pronto Pago</u></b></p>

            <p><b>Precio Regular:</b> $250</p>
            <p><b>Precio con Acompa&ntilde;ante:</b> $450</p>

            <h3 style="margin-top: 100px;">*Fechas por definir* <br> </h3>
            <p>Cont&aacute;ctanos para mas informaci&oacute;n por WhatsApp:</p>
            <button>
                <a target="_blank" href="https://wa.me/50688219659">WhatsApp</a>
            </button>
        `,
        id: 3
    },
]

contentContainer.innerHTML = entrenamientos[0].description


 
control.childNodes.forEach(option => {
    if(option.id != undefined && option.id != ""){
        option.onclick = () => {
            for(i = 0; i < entrenamientos.length; i++){
                if(option.id == entrenamientos[i].id){
                    contentContainer.innerHTML = entrenamientos[i].description;
                } 
            }
        }
    }
})
controlMobil.childNodes.forEach(option => {
    if(option.id != undefined){
        controlMobil.onchange = () => {
            for(i = 0; i < entrenamientos.length; i++){
                if(controlMobil.value == entrenamientos[i].id){
                    contentContainer.innerHTML = entrenamientos[i].description;
                } 
            }
        }    
    }
})

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
    setNav(2);
    document.body.style.opacity='1'
}, 200)


