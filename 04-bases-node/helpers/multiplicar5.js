const fs = require('fs');
const colors = require('colors')



const crearArchivo = async(base = 5, listar=false, hasta= 10) =>{
  try {

    let salida = '';

    for (let i = 1; i <= hasta; i++) {
      salida += `${base}  x  ${i} =  ${base * i}\n`;
    }

    if(listar){
        console.log("======================");
        console.log("     Tabla del:".bgBlue, base);
        console.log("======================");
        console.log(salida.rainbow);
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