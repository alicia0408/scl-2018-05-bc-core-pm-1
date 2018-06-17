window.cipher = {
  encode: (oracion, posicion) => {// funcion flecha 
    let i, fraseCod, result = "";
    oracion = oracion.toUpperCase();//pasamos la frase a mayusculas
    posicion = parseInt(posicion);
    for (i = 0; i < oracion.length; i++) {
      if (oracion.charCodeAt(i) === 32) {
        result += ' ';
      }
      else {
        fraseCod = ((oracion.charCodeAt(i) - 65 + posicion)) % 26 + 65;//ciframos segun la formula
        result += String.fromCharCode(fraseCod);//llenamos la variable con los caracteres ya cifrados
      }
    }
    return result;
  },


  decode: (oracion, posicion) => {
    let result = "", i, fraseDecod;
    oracion = oracion.toUpperCase();//pasamos la frase a mayusculas
    posicion = parseInt(posicion);
    for (i = 0; i < oracion.length; i++) {
      if (oracion.charCodeAt(i) === 32) {
        result += ' ';
      }
      else {
        fraseDecod = (oracion.charCodeAt(i) + 65 - (posicion)) % 26 + 65;//deciframos segun la formula
        result += String.fromCharCode(fraseDecod);
      }
    }  //cierre del for
    return result;
  }//cierre de decode
}