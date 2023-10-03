const fs = require('fs');

const base = 14
let salida = '';

console.clear();
console.log('=====================');
console.log(`     Tabla del: ${base}       `);
console.log('=====================');

for(let i = 1; i <=10; i++){
    salida += `${base} x ${i} = ${base * i}\n`;
}

console.log(salida);


fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    if (err)  throw err;

    console.log(`tabla-${base}.txt creado con writeFile`);
})