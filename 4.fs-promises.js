const fs = require('node:fs/promises');

console.log('Leyendo el primer archivo');
fs.readFile('./archivo.txt', 'utf-8')
.then( text => {
  console.log('Primer texto: ',text);
})

console.log('Haciendo cosas mientras lee archivo')

fs.readFile('./archivo2.txt', 'utf-8')
.then( text2 => {
  console.log('Segundo texto: ',text2);
})