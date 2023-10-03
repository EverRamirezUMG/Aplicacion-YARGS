const argv = require('yargs')
.option('b', {
    alias:'base',
    type:'number',
    demandOption: true
})
.option('l', {
    alias:'listar',
    type:'boolean',
    demandOption: true,
    default: false,
    describe: 'muestra la tabla en consola'
})

//Bandera de limite donde se defini el limite de la tabla 
.option('h', {
    alias:'hasta',
    type:'number',
    demandOption: true
})

.check((argv, options)=>{
if(isNaN(argv.b)){    
    throw ' la base tiene que ser un numero'
}else if(isNaN(argv.h)){    
    throw ' el limite tiene que ser un numero'
}
return true;
})
.argv

module.exports = argv;