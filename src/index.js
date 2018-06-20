window.onload = function () {
	
	const botonCodifica = document.getElementById("codifica"); // variable que trae el valor del boton codifica true or false
	const botonDecodifica = document.getElementById("decodifica"); // variable que trae el valor del boton decodifica true or false
// se crea el evento por medio de addEvenlistener por medio del clik
	botonCodifica.addEventListener('click', function () { // Evento que se hace por medio del click
		let texto = "";
		texto = document.getElementById("oracion").value; //guardo en una variable el valor que el usuario ingresó en la caja.
		let numero = document.getElementById("posicion").value;  //guardo en una variable el valor que el usuario ingresó del numero de posiciones.
		document.getElementById("result").innerHTML = "El Mensaje Codificado es: " + window.cipher.encode(texto, numero);//creo una variable para guardar el valor que retorna al llamar a la función
	})
	botonDecodifica.addEventListener('click', function () {
		let texto = "";
		texto = document.getElementById("oracion").value;
		let numero = document.getElementById("posicion").value;
		document.getElementById("result").innerHTML = "El Mensaje Decodificado es: " + window.cipher.decode(texto, numero);
	})
}