window.cipher = { // conexion con el evento
  encode: (oracion, posicion) => {// funcion flecha 
    let result = "";

   oracion = oracion.toUpperCase();//pasamos la frase a mayusculas
    posicion = parseInt(posicion);
    for ( let i = 0; i < oracion.length; i++) {
      if (oracion.charCodeAt(i) === 32) {
        result += ' ';
      }
      else {
        let workToCode = ((oracion.charCodeAt(i) - 65 + posicion)) % 26 + 65;//se cifra segun la formula
        result += String.fromCharCode(workToCode);//procedemos a que el dato cifrado se almecene en la variable.
      }
    }
    return result;
  },


  decode: (oracion, posicion) => {
     let result = "";
   
     oracion = oracion.toUpperCase();//pasamos la frase a mayusculas
     posicion = parseInt(posicion);
       for ( let i = 0; i < oracion.length; i++) {
          if (oracion.charCodeAt(i) === 32) {
            result += ' ';
      }
      else {
       let workToCode = (oracion.charCodeAt(i) + 65 - (posicion)) % 26 + 65;//deciframos segun la formula
        result += String.fromCharCode(workToCode);
      }
    }
    return result;
  }//cierre de decode
}