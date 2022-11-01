const argv = require('yargs')
                            .option('b', {
                                alias: 'base',
                                type: 'number', //tipo
                                demandOption: false, //obligamos al usuario a ingresar algo despues del nombre
                                description: 'Base para la multiplicación'
                            })
                            .option('l', {
                                alias: 'listar',
                                type: 'boolean',
                                default: false,
                                description: 'Listar el resultado de la multiplicación'
                            })
                            .option('h', {
                                alias: 'hasta',
                                type: 'number',
                                default: 10,
                                description: 'Multiplica del 0 hasta el valor dado'
                            })
                            .check( (argv, options) => {
                                if ( isNaN(argv.b) ){
                                    throw 'La base debe ser un numero.';
                                }
                                if ( isNaN(argv.h) || argv.h < 0 ){
                                    throw 'Debe ser un número mayor a 0';
                                }
                                return true;
                            } )
                            .argv;



module.exports = argv;
