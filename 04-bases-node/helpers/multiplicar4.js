const fs = require('fs');
const colors = require('colors')



const crearArchivo = async(base = 5, listar=false) =>{
  try {

    let salida = '';

    for (let i = 1; i <= 10; i++) {
      salida += `${base}  ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
    }

    if(listar){
        console.log("======================");
        console.log("     Tabla del:", base);
        console.log("======================");
    }


    fs.writeFileSync(`tabla-${base}.txt`, salida);

    return `tabla-${base}.txt `;
    
  } catch (err) {
    throw err;
  }
}


module.exports = {
    crearArchivo
}