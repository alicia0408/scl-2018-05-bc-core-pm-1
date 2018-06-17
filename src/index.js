window.onload = function () {

	const btnCodifica = document.getElementById("codifica"); //creo una variable que trae el valor del boton codifica true or false
	const btnDecodifica = document.getElementById("decodifica"); //creo una variable que trae el valor del boton decodifica true or false

	// se crea el evento por medio de addEvenlistener por medio del clik
	btnCodifica.addEventListener('click', function () { //en el evento click del boton codifica
		let texto = "";
		texto = document.getElementById("oracion").value; //guardo en una variable el valor que el usuario ingresó en el text area
		let n = document.getElementById("posicion").value;  //guardo en una variable el valor que el usuario ingresó del numero de espacios
		document.getElementById("result").innerHTML = "El Mensaje Codificado es: " + window.cipher.encode(texto, n);//creo una variable para guardar el valor que retorna al llamar a la función
	})
	btnDecodifica.addEventListener('click', function () {
		let texto = "";
		texto = document.getElementById("oracion").value;
		let n = document.getElementById("posicion").value;
		document.getElementById("result").innerHTML = "El Mensaje Decodificado es: " + window.cipher.decode(texto, n);
	})
}