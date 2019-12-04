
document.oncontextmenu = function(){return false}       //Dehabilita el click derecho






// ===================== ZONA DE VARIABLES GLOBALES ============================
//
var chatbox = document.querySelector('#caja-chat');
var intentos = 0


//============================== MENSAJES CHATBOX =========================
function mensajes(msj='Pregunta', clase='user'){
    const mensaje = document.createElement('p');
    mensaje.setAttribute('class', clase);
    mensaje.textContent = msj;
    chatbox.appendChild(mensaje);
    chatbox.scrollIntoView(false);

}
//================

document.querySelector('#contenido-chatbox').style.display = 'none'
document.querySelector('#ayudar').style.display = 'none'

var acceso = document.getElementById('acceso');
var ayudarBoton = document.getElementById('login');
 acceso.onclick = function(){
	alert("Usuario/Contraseña Invalida!");
	
	if ((!localStorage.getItem('accesos'))||(localStorage.getItem('accesos') === 'null')||(localStorage.getItem('accesos') === 'undefined')){
		localStorage.setItem('accesos','0')
	}
	localStorage.accesos = Number(localStorage.accesos) + 1;

	if (Number(localStorage.accesos) > 3){
		alert('Tal vez deberias tener paciencia...')
	}
	else { location.reload()}
	
}

setTimeout(function(){
            document.querySelector('#contenido-chatbox').style.display = 'flex'
			setTimeout(function(){
				mensajes("¡AYUDA!","")
				setTimeout(function(){
					mensajes("Estoy atrapado dentro de este programa.","")

					setTimeout(function(){
						mensajes("Por favor ayudame a escapar","")
						setTimeout(function(){

			               let ayuda = confirm ('Me ayudaras a escapar?')
                				if (ayuda){
									document.querySelector('#ayudar').style.display = 'flex'
									localStorage.setItem('accesos','0')
                			}
               				else {
								mensajes("Es una pena que no quieras ayudarme","")
								localStorage.setItem('accesos','0')
								setTimeout(function(){location.reload()},5000)
               				 }						
	

						},5000)
					},1500)			
				},1500)

			},1500)


	
},25000);
