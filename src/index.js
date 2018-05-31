Window.onload = function() {
	//Se crean dos variables que llaman los valores de los botones//
	const buttonEncrypting = document.getElementById("cifrando");
	const buttonDecoded = document.getElementById("descifrando");
  
	// se crea una una funcion y variables para guardar los valores ingresados por el usuarios y lo que retorna.//
	buttonEncrypting.addEventListener('click',function(){
		let sentence = "";
		sentence = document.getElementById("oración").value;
		let number = document.getElementById("posición").value;
		document.getElementById("texto").innerHTML = window.cipher.encode(sentence,number);
	})

	buttonDecoded.addEventListener('click',function(){
		let sentence = "",
		sentence = document.getElementById("oración").value;
		let number = document.getElementById("posición").value;
		document.getElementById("texto").innerHTML = window.cipher.decode(sentence,number);
		
	})

}
