
const { crearArchivo} = require('./helpers/multiplicar3');

console.clear();


console.log(process.argv);



const [, , arg3 = 'base=5'] = process.argv;
const [ , base=5] = arg3.split('=')
console.log(base);