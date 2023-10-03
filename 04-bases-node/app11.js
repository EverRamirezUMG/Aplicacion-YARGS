
const { crearArchivo} = require('./helpers/multiplicar3');
const argv = require('yargs')
.option('b', {
    alias:'base',
    type:'number',
    demandOption: true
})

.check((argv, options)=>{
if(isNaN(argv.b)){    
    //NaN = Not a number
    throw ' la base tiene que ser un numero'
}
return true;
})
.argv


console.clear();    
console.log(argv);




crearArchivo(argv.b)
                .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
                .catch(err => console.log(err))