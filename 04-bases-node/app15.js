
const { crearArchivo} = require('./helpers/multiplicar5')
const colors = require('colors')
const argv = require('./config/yargs3')


console.clear();    
console.log(argv);




crearArchivo(argv.b, argv.l, argv.h)
                .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'.bgGreen))
                .catch(err => console.log(err)) 
                