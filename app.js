const { crearArchivoPromise, crearArchivoAsync } = require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear();

crearArchivoAsync (argv.b, argv.l, argv.h)
                    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
                    .catch(err => console.log(err));


