
const { crearArchivo} = require('./helpers/multiplicar4');
const argv = require('./config/yargs2')


console.clear();    
console.log(argv);




crearArchivo(argv.b, argv.l)
                .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
                .catch(err => console.log(err))




                //este es una prueba de  mi nuevo teclado keychron lo uso para programar en visual studio code