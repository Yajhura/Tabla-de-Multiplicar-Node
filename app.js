const {crearArchvio} = require('./helper/multiplicar');
const argv = require('./config/yargs');
require('colors');



console.clear();
// console.log(argv);

 crearArchvio(argv.b,argv.l,argv.h)
   .then((nombreArchivo) => console.log(nombreArchivo.yellow,"creado".yellow))
   .catch((error) => console.log(error));