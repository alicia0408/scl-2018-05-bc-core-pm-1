window.cipher = {
  encode: (oracion, posicion) => {/* funcion o metodo del objeto cipher, funcion flecha*/
    let i, oracionCode, result = "";
    oracion = oracion.toUpperCase();//pasamos la frase a mayusculas
    posicion = parseInt(posicion);
    
    for (i = 0; i < oracion.length; i++){
      if (oracion.charCodeAt(i) === 32) {
        result += ' ';
      }
      else {
        oracionCode = ((oracion.charCodeAt(i) - 65 + posicion)) % 26 + 65;//ciframos segun la formula
        result += String.fromCharCode(oracionCode);//llenamos la variable con los caracteres ya cifrados
      }
    } //cierre del for
    return result;
  }, //cierre funcion encode
  
  decode: (oracion, posicion) => {
    let result = "", i, oracionCode;
    oracion = oracion.toUpperCase();//pasamos la frase a mayusculas
    espacios = parseInt(posicion);
    
    for (i = 0; i < oracion.length; i++){
      if (oracion.charCodeAt(i) === 32){
        result += ' ';
      }
      else {
        oracionCode = (oracion.charCodeAt(i) + 65 - (posicion)) % 26 + 65;//deciframos segun la formula
        result += String.fromCharCode(oracionCode);
      }
    }  
    return result;
  }
}