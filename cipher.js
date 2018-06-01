window.cipher = {
  // funcion flecha//
  encode: (sentence,number) => {
    const sentenceCode = "";
    const i = "";
    const result = "";
sentence = sentence.toUpperCase();// la oracion se pasa a mayuscula//
number = parseInt(number);
console.log(sentence);

for (const i = 0; i < sentence.length; i++) {
      if (sentence.charCodeAt(i) === 32){
        result += "";
      }
      else{
        wordToCode = ((sentence.charCodeAt(i) - 65 + espacios)) % 26 + 65;//formula para ejecutar el cifrado//
        result += String.fromCharCode(wordToCode);//variable que contiene el resultado de la oracion cifrada//
      }
  console.log(result);
}
result()
},
 
decode: () => {
      /* Acá va tu código */
    }
}