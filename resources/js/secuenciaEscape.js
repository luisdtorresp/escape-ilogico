alert('Debes asegurarte de tener activada la reproduccion automatica de Videos')
document.oncontextmenu = function(){return false}       //Dehabilita el click derecho



/*clabHack=0;                //MSJS por pulsar el click  derecho

document.oncontextmenu = function(){return false} 
 function right(e) {if (navigator.appName == 'Netscape'){
 if (e.which == 3 || e.which == 2){alert("Aqui no puedes utilizar el botón derecho del mouse...");
 for(i=0;i!=clabHack;i++)alert("Ya te lo habia advertido, ahora te penalizaré con \n                 "+(clabHack-i)+"\n              clicks !!!...");
 clabHack+=10;
 alert("La proxima vez que lo hagas será peor !!! - cristalab.com");  return false;}}
 if (navigator.appName == 'Microsoft Internet Explorer'){
 if (event.button == 2 || event.button == 3){
 alert("Aqui no puedes utilizar el botón derecho del mouse...");
 for(i=0;i!=clabHack;i++)alert("Ya te lo habia advertido, ahora te penalizaré con \n                 "+(clabHack-i)+"\n              clicks !!!...");
 clabHack+=10;
 alert("La proxima vez que lo hagas será peor !!! - cristalab.com");
 return false;}}  return true;}  document.onmousedown = right;
 if (document.layers) window.captureEvents(Event.MOUSEDOWN);
 window.onmousedown=right;
 */





// ===================== ZONA DE VARIABLES GLOBALES ============================
//
 var preguntaA = document.getElementById('comando-textoA');
 var preguntaB = document.getElementById('comando-textoB');
 var preguntaC = '';
 var chatbox = document.querySelector('#caja-chat');
 var trigger = false
 var video = document.querySelector('video');
 var videoActual = video.querySelector('source').getAttribute('src');
 var textoA ='';
 var textoB ='';
 var stage = 0;
 var testarudo = 0;
 var blanco = false;
 var rojo = false;
 var seleccionar='';
 var elegido= false;
 var reinicios = 0
 var numWins = 0
 var progreso = 0
 //var usuario = ''
 
 //===================== Cookies de Almacenamiento ============================

 //localStorage.setItem('reinicios','0')
 //localStorage.setItem('numWins','0')
 //localStorage.setItem('progreso','0')
 localStorage.setItem('hackerMode','false')
 //localStorage.setItem('usuario','')
 
    

//================================== TIMER ================================
function temporizador(mins=5){
    
    
    if (document.querySelector('#timer') === null){
        let nuevo = document.createElement('div')
        nuevo.setAttribute('id', 'timer');
        document.querySelector('header').appendChild(nuevo)

    }

    var countDownDate = new Date().getTime() + (mins*60*1000);
    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();
        
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        if (document.querySelector('#timer') != null){
            document.getElementById("timer").innerHTML = ("0" + minutes).slice('-2') + ":" + ("0" + seconds).slice('-2') + "s ";

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("timer").innerHTML = "GAME OVER";
                restart('   GAME OVER.\n')
            }
        }

        

    }, 1000);
}

//============================== MENSAJES CHATBOX =========================
function mensajes(msj='Pregunta', clase='user'){
    const mensaje = document.createElement('p');
    mensaje.setAttribute('class', clase);
    mensaje.textContent = msj;
    chatbox.appendChild(mensaje);
    chatbox.scrollIntoView(false);

}
 

//============================== CAMBIAR VIDEO ============================
function cambiarVideo(newsrc=''){
    video.pause();
    let viejo= video.querySelector('source')
    video.removeChild(viejo);                   //Elimina el video actual
        
    let nuevo = document.createElement('source');      // Crea un nuevo elemento de video
    nuevo.setAttribute('src', newsrc);
    video.appendChild(nuevo);
    video.load();
    video.play();
    videoActual = video.querySelector('source').getAttribute('src')
}

//============================== CAMBIAR PREGUNTA =========================
function cambiarPregunta(newask='', AB=''){
    if (AB === 'a'){
        document.getElementById('comando-textoA').innerHTML = newask;
        textoA = newask;
    }
    else if (AB === 'b'){
        document.getElementById('comando-textoB').innerHTML = newask;
        textoB = newask;
    }

}
//=============== Pregunta C =======================

function preguntarC(){
    let numeroAleatorio = aleatorio(0,10)
    if (video.paused && videoActual=== './media/video/Blanco/Cruce_0511.mp4'){ mensajes('Entra por esa puerta.')}
    if (numeroAleatorio % 2 === 0 && videoActual=== './media/video/Blanco/Cruce_0511.mp4' && video.paused){
        setTimeout(function(){
            cambiarVideo('./media/video/Blanco/Escape - Iluminado.mp4')
            setTimeout(function(){
                winner('blanco')
            },3500)
        },600)
    }
    else if (video.paused && videoActual=== './media/video/Blanco/Cruce_0511.mp4'){
        setTimeout(function(){
            mensajes('Me estan persiguiendo, tal vez no deberia entrar en una habitacion ahora.','')
            setTimeout(function(){
                video.currentTime = 2.12
                video.play()
                setTimeout(function(){
                    cambiarVideo('./media/video/Blanco/Body_0517.mp4')
                },13000)
            },600)
        },600)
    }
}    
//=============== TIEMPO DEL VIDEO ======================
function videotime() {
    // Display the current position of the video in a <p> element with id="demo"
        //document.getElementById("msj-console").innerHTML = video.currentTime;
        //var textbox = document.querySelector('#msj-console');
        //textbox.textContent = video.currentTime;
        if (!trigger){
            if ((blanco === false) && videoActual === "./media/video/Intro - Despierta.mp4" && (video.currentTime >= 26.0 && video.currentTime <=26.6)){
                video.pause();
                mensajes('Rayos, tengo frio. deberia colocarme el sweater?','')
                trigger = true
                }
    
            else if (blanco && videoActual=== './media/video/Blanco/Cruce_0511.mp4' && (video.currentTime >= 1.45 && video.currentTime <=2.02)){
                video.pause();
                mensajes('Que debo hacer?','')
                setTimeout(function(){
                    cambiarPregunta('Detras de ti hay un pasillo. Cambia de rumbo.','a')
                    cambiarPregunta('No te detengas continua!','b')
                    let nuevaPregunta = document.createElement('button')
                    nuevaPregunta.setAttribute('type','button')
                    nuevaPregunta.setAttribute('id','pregunta-C')
                    nuevaPregunta.textContent ='Entra por esa puerta.'
                    document.querySelector('#preguntas').appendChild(nuevaPregunta)
                    preguntaC = document.getElementById('pregunta-C');
                    preguntaC.onclick = function(){preguntarC()} 
                    
                    
                },400)
                trigger = true
                
            }
            
        }

    } 
    

//===============Numeros pseudoAleatorios================
function aleatorio(minimo=0,maximo=10){
    return Math.floor(Math.random() * ((maximo+1)-minimo)+minimo);
    }


// =============== REINICIAR ==============
function restart(fin=''){
    let reinicio = confirm(fin+'Desea reiniciar el juego');
    if (reinicio){
        //localStorage.setItem('usuario',usuario)
        localStorage.setItem('reinicios', Number(localStorage.getItem('reinicios'))+1)
        localStorage.setItem('repetir','true')
        document.querySelector('body').style.backgroundColor = 'rgba(5, 5, 5, 0.973)'
        if (document.querySelector('#ganar') != null){
            document.querySelector('header').removeChild(document.querySelector('#ganar'))
        } 
        else if (document.querySelector('#timer') != null){
            document.querySelector('header').removeChild(document.querySelector('#timer'))
        }       
        
        location.reload()
        
    }
    else {
        alert('Gracias por jugar.')
        window.close()
        location.reload()
    }
}

//=============== Escape Exitoso =========================
function winner(ropa=''){
    document.querySelector('body').style.backgroundColor = 'white'
    document.querySelector('header').style.color = 'rgb(51, 172, 21)'
    
    document.querySelector('header').removeChild(document.querySelector('#timer'))
    let nuevo = document.createElement('div')
    nuevo.setAttribute('id', 'ganar');
    document.querySelector('header').appendChild(nuevo)
    document.querySelector('#ganar').textContent = 'Escape Exitoso!'
    localStorage.setItem('numWins', Number(localStorage.getItem('numWins'))+1)

    if (ropa === 'rojo'){
        cambiarVideo('./media/video/Rojo/Win_Rojo.mp4')
        document.querySelector('footer').style.display = 'none'
        document.querySelector('#contenido-chatbox').style.display = 'none'
        setTimeout(function(){
            msjGanador(Number(localStorage.getItem('progreso')),Number(localStorage.getItem('numWins')))
            restart()
            },20000)
    }

    else if (ropa === 'blanco'){
        cambiarVideo('./media/video/Blanco/Win_Blanco.mp4')
        document.querySelector('footer').style.display = 'none'
        document.querySelector('#contenido-chatbox').style.display = 'none'
        setTimeout(function(){
            msjGanador(Number(localStorage.getItem('progreso')),Number(localStorage.getItem('numWins')))
            restart()
        },20000)
    }
    else if (ropa === 'sweater'){
        cambiarVideo('./media/video/Blanco/Win_Sweater.mp4')
        document.querySelector('footer').style.display = 'none'
        document.querySelector('#contenido-chatbox').style.display = 'none'
        setTimeout(function(){
            msjGanador(Number(localStorage.getItem('progreso')),Number(localStorage.getItem('numWins')))
            restart()
        },20000)
    }
    else {
        mensajes('Parece que ha sucedido algo extraño','error')
    }
}

//=============== Mensaje al Ganador =====================
function msjGanador(prog = 0, vces = 1){
    if (vces === 1 && prog < 20){
        alert('Has conseguido escapar!\nSin embargo tu progreso fue solo: '+prog+'%\nEl verdadero juego consiste en conseguir todas las opciones y todas salidas posibles...')
    }

    else if (vces >1 && prog < 50){
        alert('Escape exitoso... pero aun quedan salidas por encontrar')
    }
}



//============= FUNCION MAIN (Secuencia Logica del Juego) ==================
//video.playbackRate = 2.0

function escapeIlogico(){

    stage = 0;
    testarudo = 0;
    localStorage.setItem('repetir','false')
    blanco = false;
    rojo = false;
    seleccionar='';
    elegido= false;

    temporizador();

    cambiarVideo("./media/video/Intro - Despierta.mp4")
    cambiarPregunta('','a')
    cambiarPregunta('','b')
    setTimeout(function(){
        cambiarPregunta('Eso no es importante. Explora a tu alrededor.','a');
        cambiarPregunta('Si. Supongo que lo necesitas','b');
    },26000)

    
    // Todos los casos de seleccion para A
    preguntaA.onclick = function(){         
        if(elegido=== false && video.paused){mensajes(textoA); seleccionar = 'a';}
        
        if (seleccionar === 'a'){
            if (stage === 0 && videoActual === "./media/video/Intro - Despierta.mp4" 
            && blanco === false && elegido === false){
    
            cambiarVideo('./media/video/POV_ExplorarR.mp4');
            elegido = true;
            blanco = true;
            
            }
            
            //=====================ROJO========================================
            if(((stage === 1 && videoActual === "./media/video/Intro - Despierta.mp4") || (stage === 2 && videoActual === './media/video/Rojo/Explorar_0496.mp4'))
             && rojo === true && elegido === false){
                 
                if (testarudo === 0){
                mensajes('Estoy seguro de que no hay nadie aqui','')
                cambiarPregunta('Lo ví. Deberias buscarlo','a');
                testarudo +=1;
                }
                else if (testarudo===1){
                    mensajes('Creo que habia una biblioteca. Como quieres que busque?','');        
                    cambiarPregunta('Detalladamente, necesito pistas para ayudarte a salir.','a');
                    cambiarPregunta('Rapido, tengo poco tiempo para ayudarte a escapar.','b');
                    testarudo +=1
    
                }
                else if(testarudo===2){
                    testarudo+=1
                    stage+=1
                }
                
            }
    
            if (((stage === 2 && videoActual === "./media/video/Intro - Despierta.mp4")||(stage===3 && videoActual=== './media/video/Rojo/Explorar_0496.mp4') )&& rojo === true && seleccionar === 'a' && elegido === false){
                cambiarVideo('./media/video/Rojo/Explorar_0493.mp4');
                cambiarPregunta('','b');
                cambiarPregunta('Deberias buscar en esas habitaciones.','a');
                elegido = true
            
                
            }
            if (((stage === 3 && videoActual === './media/video/Rojo/Explorar_0493.mp4')|| (stage === 2 && videoActual === './media/video/Rojo/Explorar_0491.mp4')) && video.paused)
                {mensajes('Creo que no habia nada. A cual quieres que regrese?','');
                setTimeout(function(){
                    cambiarPregunta('A la de la izquierda','a')
                    cambiarPregunta('A la de la derecha','b')
                    elegido = false;
                    stage += 1;
                    console.log('Stage: '+stage )
                },2000)
            }
                
        /*    if (stage === 3 && rojo && elegido){
                cambiarPregunta('A la de la izquierda','a')
                cambiarPregunta('A la de la derecha','b')
                elegido = false;
                stage+=1;
                console.log('Stage: '+stage )
            } */
    
            if (rojo && stage === 3 && videoActual === './media/video/Rojo/Explorar_0491.mp4' && video.paused && testarudo > 0){
                cambiarVideo('./media/video/Rojo/Explorar_0497.mp4')
                stage = 5;
                //elegido =true;
            }
            else if (rojo && stage === 3 && videoActual === './media/video/Rojo/Explorar_0491.mp4' && video.paused && testarudo === 0){
                mensajes('Creo que no habia nada. A cual quieres que regrese?','');
                setTimeout(function(){
                    cambiarPregunta('A la de la izquierda','a')
                    cambiarPregunta('A la de la derecha','b')
                    elegido = false;
                    testarudo += 1;
                    console.log('Stage: '+stage )
                },2000)
            }
    
            else if (rojo && stage === 4 && videoActual === './media/video/Rojo/Explorar_0493.mp4'&& elegido){
                    cambiarVideo('./media/video/Rojo/Explorar_0497.mp4')
                    stage +=1
            }
            else if (rojo && stage === 4 && videoActual === './media/video/Rojo/Explorar_0493.mp4'&& !elegido)
            {   elegido = true;
                mensajes('Upss, parece que hubo un error. Vuelve a intentarlo','error')
            }
            
            else if (rojo && stage === 5 && !elegido){
                mensajes('Mi intuicion ya te dijo que no habia nada. De verdad quieres que entre?','')
                setTimeout(function(){
                    cambiarPregunta('Si!','a')
                    cambiarPregunta('No. Mejor ve al pasillo...','b')
                    stage+=1;
                },2000)
                
            }
    
            else if (rojo && stage === 6 && videoActual === './media/video/Rojo/Explorar_0497.mp4'){
                let numeroAleatorio = aleatorio(0,10)
                console.log('numeroAleatorio: '+ numeroAleatorio)
                if (numeroAleatorio === 7){     //GANAR RAPIDO
                    // cambiarVideo()  VIDEO WIN ROJO
                    // PROGRESO + 10%
                    winner('rojo')
                }
                else if (numeroAleatorio%2 === 0){
                    mensajes('Ok','')
                    cambiarVideo('./media/video/Rojo/GameOver - Capturado.mp4')
                    setTimeout(function(){
                        restart('   GAME OVER.\n')
                    },6000)
                }
                
                else {
                    mensajes('Sabes que, no perdere mi tiempo, buscare en otro lugar','')
                    setTimeout(function(){cambiarVideo('./media/video/Rojo/Explorar_0494.mp4'); /*stage +=1;*/},1800)
                    
                }
            }
    
            if (rojo && stage === 8 && videoActual === './media/video/Rojo/Explorar_0494.mp4' && video.ended ){
                mensajes('Aunque no te parezca importante me quitare el sweater.','')
                cambiarPregunta('','a')
                cambiarPregunta('','b')
                blanco = true;
                cambiarVideo('./media/video/Blanco/Pasillo Steady.mp4')
                setTimeout(function(){
                    cambiarVideo('./media/video/Blanco/Body_0515.mp4')
                },12000)
                stage +=1
            }
    
    
            //==========================BLANCO===================================
            if (blanco && stage === 1){
                setTimeout(function(){
                    cambiarVideo('./media/video/Blanco/Body_0515.mp4')
                    stage = 2    
                },800)
              
            }
    
            else if (blanco && stage ===2 && videoActual === './media/video/Blanco/Cruce_0511.mp4' && video.paused){
                setTimeout(function(){
                    cambiarVideo('./media/video/Blanco/Pasillo Steady.mp4')
                    setTimeout(function(){
                        mensajes('Mi sweater esta en el piso deberia recogerlo?','')
                        document.querySelector('#preguntas').removeChild(document.querySelector('#pregunta-C'))
                        setTimeout(function(){
                            cambiarPregunta('Esta bien, pero no me interesa si te lo pones o no.','b');
                            cambiarPregunta('NO!. Quieres escapar o que?','a');
                        },600) 
                    },11000)
                },600)
    
            }
    
            else if (blanco && videoActual === './media/video/Blanco/Pasillo Steady.mp4' && video.ended){
                if (stage < 5){
                    setTimeout(function(){
                        cambiarVideo('./media/video/Blanco/Cruce_0511.mp4')    
                        mensajes('Oh no, otra vez no!.','')
                    },600)
                    
                }
                else {
                    let incompleto = confirm('De alguna forma has conseguido la salida. Pero tu progreso esta incompleto\n Deseas continuar?')
                    if (incompleto){
                        winner('blanco')
                    }
                    else {
                        
                        restart()
                    }
                }
            }
    
    
    
        }
    }
    // Todos los casos de seleccion para B
    preguntaB.onclick = function(){
        if(elegido=== false && video.paused){mensajes(textoB); seleccionar = 'b';}
        
        if (stage === 0 && seleccionar === 'b'&& videoActual === "./media/video/Intro - Despierta.mp4"
         && elegido === false){
    
            rojo = true;
            if(video.paused && elegido === false){video.currentTime = 26.8; elegido=true;}
            video.play();
            
        }
    
    
        // ====================== ROJO =====================================
        else if (rojo && stage ===1 && video.ended && testarudo === 0){
            setTimeout(function(){cambiarVideo('./media/video/Rojo/Explorar_0496.mp4')},1000)
            stage +=1
        }
    
        else if (rojo && stage ===1 && video.ended && testarudo > 0){
            setTimeout(function(){cambiarVideo('./media/video/Rojo/Explorar_0491.mp4')},1000)
            stage +=1
            setTimeout(function(){
                cambiarPregunta('Porque no entraste a las habitaciones?','a')
                cambiarPregunta('','b')
            },8500)
        }
        if (rojo && stage === 2 && videoActual === './media/video/Rojo/Explorar_0496.mp4' && video.ended && testarudo === 1){
            cambiarPregunta('','a')
            cambiarPregunta('','b')
            blanco = true;
            cambiarVideo('./media/video/Blanco/Pasillo Steady.mp4')
            setTimeout(function(){
                cambiarVideo('./media/video/Blanco/Body_0515.mp4')
            },12000)
            stage +=1
        }
        else if (rojo && stage === 2 && videoActual === './media/video/Rojo/Explorar_0496.mp4' && video.ended && testarudo === 2){
            setTimeout(function(){cambiarVideo('./media/video/Rojo/Explorar_0491.mp4')},1000)
            stage +=1
            setTimeout(function(){
                cambiarPregunta('Porque no entraste a las habitaciones?','a')
                cambiarPregunta('','b')
                testarudo = 0
            },8500)
        }
    
        if (rojo && stage === 3 && videoActual === './media/video/Rojo/Explorar_0491.mp4' && testarudo > 0 ){
            mensajes('Ok','')
            cambiarVideo('./media/video/Rojo/GameOver - Capturado.mp4')
            setTimeout(function(){
            restart('   GAME OVER.\n')
            },6000)
        }
    
        if (rojo && stage === 5 && videoActual === './media/video/Rojo/Explorar_0497.mp4'){
            mensajes('Claro que tenia razon. No entiendo para que dudas de mi','')
            setTimeout(function(){cambiarVideo('./media/video/Rojo/Explorar_0494.mp4'); stage = 6;},1200)
        }
    
        else if (rojo && stage === 6 && videoActual === './media/video/Rojo/Explorar_0497.mp4'){
            mensajes('Si, me parece necesario continuar avanzando','')
            setTimeout(function(){cambiarVideo('./media/video/Rojo/Explorar_0494.mp4'); stage = 6;},1200)
        }
    
        if (rojo && stage === 7 && videoActual === './media/video/Rojo/Explorar_0494.mp4' ){
            mensajes('Nada, solo una habitacion vacia','')
            setTimeout(function(){
                cambiarPregunta('Ok, continua','a')
                cambiarPregunta('Revisa de nuevo','b')
                stage = 8
            },1200)
        }
    
        if (rojo && stage === 8 && videoActual === './media/video/Rojo/Explorar_0494.mp4' ){
            let numeroAleatorio = aleatorio(1,10)
                console.log('numeroAleatorio: '+ numeroAleatorio)
                if (numeroAleatorio % 3 === 0){     //GANAR RAPIDO 2
                    // cambiarVideo()  VIDEO WIN ROJO
                    // PROGRESO + 10%
                    winner('rojo')
                }
                else {
                    mensajes('Ok','')
                    cambiarVideo('./media/video/Rojo/Explorar_0495.mp4')
                    setTimeout(function(){mensajes('Por que insistes en perder el tiempo? No ves que hay un contador alla arriba...','')},6200)
                }
                
    
        }
    
        // ===================== BLANCO===============================
    
        if ( blanco && stage === 1){
            setTimeout(function(){
                cambiarVideo('./media/video/Blanco/Run - AdiosSweater.mp4')
                setTimeout(function(){
                    cambiarVideo('./media/video/Blanco/Body_0515.mp4')
                    stage = 2
                },15000)
            },800)
        }
    
        if (blanco && videoActual === './media/video/Blanco/Body_0515.mp4' && video.paused){
            setTimeout(function(){
                cambiarVideo('./media/video/Blanco/Cruce_0511.mp4')
            },800)
        }
    
        if (blanco && videoActual === './media/video/Blanco/Cruce_0511.mp4' && video.paused){
            video.currentTime = 2.12
            video.play()
            setTimeout(function(){
                cambiarVideo('./media/video/Blanco/Body_0517.mp4')
            },13000)
        
        }
    
        if (blanco && videoActual === './media/video/Blanco/Pasillo Steady.mp4' && video.ended){
            let numeroAleatorio = aleatorio(0,10)
            if (rojo){
                winner('sweater')
            }
            else if (!rojo && numeroAleatorio % 2 === 0){
                let incompleto = confirm('De alguna forma has conseguido la salida. Pero tu progreso esta incompleto\n Deseas continuar?')
                if (incompleto){
                    winner('sweater')
                }
                else {
                    restart()
                }
            }
            else {
                setTimeout(function(){
                    cambiarVideo('./media/video/Blanco/Run_0505.mp4')
                    setTimeout(function(){
                        cambiarVideo('./media/video/Blanco/Cruce_0511.mp4')
                    },17000)
                },600)
            }
        }
    
    }
    
    video.onload = function(){
        if (videoActual === "./media/video/Intro - Despierta.mp4"){
            document.querySelector('#contenido-chatbox').style.display = 'none'
        }
    }
    
    video.onplay = function(){
        console.log('cargado, trigger: '+trigger)
        trigger=false;
        document.querySelector('footer').style.display = 'none'
        
        if (Number(localStorage.getItem('numWins')) > 0){
            document.querySelector('progreso').textContent = 'Progreso: '+localStorage.getItem('progreso')+'%'
        }
        
        //video.playbackRate = 2.0 // solo para testing

    }

    video.onpause = function(){
        document.querySelector('footer').style.display = 'flex'
        if (videoActual === "./media/video/Intro - Despierta.mp4"){
            document.querySelector('#contenido-chatbox').style.display = 'flex'
        }
    }
    video.onended = function(){
    
    
    
        // =======================ROJO=================================
        if (rojo && videoActual === "./media/video/Intro - Despierta.mp4"){
            if (!trigger){
                mensajes('Que puedes ver?','');
                cambiarPregunta('Me parecio ver a alguien pasar!','a');
                cambiarPregunta('Revisa aquella habitacion.','b');
                elegido = false;
                stage +=1;
                trigger = true
            }
        }
      
    
        if (videoActual === "./media/video/POV_ExplorarR.mp4"){
            if (!trigger){
                mensajes('La verdad no puedo ver nada...', '');
                cambiarVideo('./media/video/Intro - Despierta.mp4');
                video.currentTime = 29.2
                video.play()
                trigger = true;
            }
            
        }
    
        if(stage === 1 && videoActual === "./media/video/Intro - Despierta.mp4"
            && blanco === true && elegido === false){
                cambiarPregunta('Deberias ver esa habitacion.','a')
                cambiarPregunta('Hay alguien detras de ti, ¡Corre!','b')
            }
    
    
    
        if (rojo && videoActual === './media/video/Rojo/Explorar_0493.mp4'){
            if (!trigger){
                stage =3
                trigger = true
            }    
        }
    
        if (rojo && videoActual === './media/video/Rojo/Explorar_0497.mp4' ){
            if(!trigger){
                mensajes('Te dije que no habia nada. Caminare al final del pasillo...','')
                setTimeout(function(){
                    cambiarPregunta('Primero entra en la otra habitacion.','a')
                    cambiarPregunta('Esta bien, tenias razon.','b')
                },2000);
            }
            
            elegido= false;
            trigger= true;
            testarudo = 0;
        }
    
        if (rojo && stage === 6 && videoActual === './media/video/Rojo/Explorar_0494.mp4' ){
            cambiarPregunta('','a')
            cambiarPregunta('Que viste alli atras?','b')
            stage = 7
        }
    
    
        if (rojo && stage === 8 && videoActual === './media/video/Rojo/Explorar_0495.mp4' ){
            cambiarPregunta('','a')
            cambiarPregunta('','b')
            mensajes('Me da igual si no te parece importante. Me quitare el sweater.','')
            setTimeout(function(){
                cambiarVideo('./media/video/Blanco/Pasillo Steady.mp4');
                setTimeout(function(){
                    cambiarVideo('./media/video/Blanco/Body_0515.mp4')
                },12000)
            },2000)
            blanco=true;
            stage =9
        }
    
    
        if (rojo && stage === 2 && videoActual === './media/video/Rojo/Explorar_0496.mp4'){
            mensajes('Ahora tengo calor. Me quito el sweater?','')
            setTimeout(function(){
                cambiarPregunta('Eso no es importante. Busca a tu alrededor','a')
                cambiarPregunta('Ok, señor inconforme. Busca al final del pasillo.','b')
                testarudo = 1
            },1200)
            
        }
    
        //============================== BLANCO =============================
    
        if (blanco && videoActual === "./media/video/Intro - Despierta.mp4"){
            if (!trigger){
                mensajes('Que puedes ver?','');
                setTimeout(function(){
                    cambiarPregunta('Hay alguien detras de ti, ¡Corre!','b');
                    cambiarPregunta('Deberias ver esa habitacion.','a');
                },800)
    
                elegido = false;
                stage +=1;
                trigger = true
            }
        }
    
        if ( blanco && videoActual === './media/video/Blanco/Body_0515.mp4'){
            setTimeout(function(){
                cambiarVideo('./media/video/Blanco/Cruce_0511.mp4')
                
            },600)
        }
    
        if (blanco && videoActual === './media/video/Blanco/Body_0517.mp4'){
            setTimeout(function(){
                cambiarVideo('./media/video/Blanco/Pasillo Steady.mp4')
                setTimeout(function(){
                    mensajes('Mi sweater esta en el piso deberia recogerlo?','')
                    document.querySelector('#preguntas').removeChild(document.querySelector('#pregunta-C'))
                    setTimeout(function(){
                        cambiarPregunta('Esta bien, pero no me interesa si te lo pones o no.','b');
                        cambiarPregunta('NO!. Quieres escapar o que?','a');
                    },600) 
                },11000)
            },600)
        }
    
        console.log('~~~~~~~~~~~~~~~~~~~')
        console.log('videoActual: '+ videoActual)
        console.log('selec: '+seleccionar)
        console.log('eleccion:'+elegido)
        console.log('stage: '+stage)
        console.log('Pausado?:'+video.paused)
        console.log('triggered?: '+trigger)
        console.log('Blanco: '+blanco);
        console.log('Rojo: '+rojo)
        console.log('testarudo: '+testarudo)
    }
    
    

}


//============== Preprocesos ========

if ((!localStorage.getItem('usuario'))||(localStorage.getItem('usuario') === 'null')||(localStorage.getItem('usuario') === 'undefined')){
    localStorage.setItem('usuario', String (prompt('Hola, gracias por ayudarme a escapar de este lugar.\n Por favor introduce tu nombre')))
    if (localStorage.usuario === 'null'){
        alert('Lo siento. El nombre "NULL" no esta permitido')
        location.reload()
    }
    // Verificar nombre logico
}

else{
    alert('Bienvenido de nuevo, '+localStorage.usuario+'!')

    if (localStorage.getItem('repetir') === 'true'){
        escapeIlogico()
    }

    else {
        let continuar = confirm('Deseas continuar con tu progreso?')
        if (continuar){
            progreso = Number(localStorage.progreso)
            escapeIlogico();
        }
        else{
            let borrarDatos = confirm('Se borraran todos los datos guardados. Estas seguro?')
            if (borrarDatos){
                localStorage.clear()
                alert('Datos eliminados exitosamente.')
                location.reload()
            }
            else {
                let salida = confirm ('Deseas salir?')
                if (salida){
                    window.close()
                    alert('Debe cerrar la pestaña manualmente.\n Hasta Luego')
                }
                else {
                    location.reload()
                }
            }
        }
    }

}


// = EJECUCION INICIAL =
escapeIlogico()

// Evento que maneja informacion del video
video.ontimeupdate = function() {
    videotime()
    console.log('Termino?:'+ video.ended+' '+videoActual )
    

}


