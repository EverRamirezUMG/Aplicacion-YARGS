const fs = require('fs');
const colors = require('colors')



const crearArchivo = async(base = 5, listar=false, hasta= 10) =>{
  try {

    let salida = '';
    let resultado = '';


    for (let i = 1; i <= hasta; i++) {
      salida += `${base}  x  ${i} =  ${base * i}\n`;
      resultado += `${base}  ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
    }

    if(listar){
        console.log("======================");
        console.log("     Tabla del:".bgBrightCyan, base);
        console.log("======================");
        console.log(resultado);
    }


    fs.writeFileSync(`./Salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt `;
    
  } catch (err) {
    throw err;
  }
}


module.exports = {
    crearArchivo
}