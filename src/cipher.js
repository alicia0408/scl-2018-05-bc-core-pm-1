window.cipher = {
  encode: (oracion, posicion) => {

    oracion = oracion.toUpperCase();// se procede a colocar las letras en mayuscula
    posicion = parseInt(posicion);
    
    for (i = 0; i < oracion.length; i++){
      if (oracion.charCodeAt(i)) {
        result += ' ';
      }
      else {
        oracionCode = ((oracion.charCodeAt(i) - 65 + posicion)) % 26 + 65;//se utiliza la forma
        result += String.fromCharCode(oracionCode);
      }
    } 
    return result;
  }, 
  
  decode: (oracion, posicion) => {
    let result = "", i, oracionCode;
    oracion = oracion.toUpperCase();
    espacios = parseInt(posicion);
    
    for (i = 0; i < oracion.length; i++){
      if (oracion.charCodeAt(i) === 32){
        result += ' ';
      }
      else {
        oracionCode = (oracion.charCodeAt(i) + 65 - (posicion)) % 26 + 65;// se utiliza la formula 
        result += String.fromCharCode(oracionCode);
      }
    }  
    return result;
  }
}