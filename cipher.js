window.cipher = {
  // funcion flecha//
  encode: (sentence,number) => {
    const sentenceCode = "";
    const i = "";
    const result = "";
sentence = sentence.toUpperCase();
number = parseInt(number);
console.log(sentence);

for (const i = 0; i < sentence.length; i++) {
      if (sentence.charCodeAt(i) === 32){
        result += "";
      }
      else{
        wordToCode = ((sentence.charCodeAt(i) - 65 + espacios)) % 26 + 65;
        result += String.fromCharCode(wordToCode);
      }
  

  
}
}
  decode: () => {
      /* Acá va tu código */
    }
}