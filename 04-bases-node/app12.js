
const { crearArchivo} = require('./helpers/multiplicar4');
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
    default: false
})

.check((argv, options)=>{
if(isNaN(argv.b)){    
    throw ' la base tiene que ser un numero'
}
return true;
})
.argv


console.clear();    
console.log(argv);




crearArchivo(argv.b, argv.l)
                .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
                .catch(err => console.log(err))