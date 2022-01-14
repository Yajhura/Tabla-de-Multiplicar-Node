require('colors');
const argv = require('yargs')
                    .option('b',{
                        alias : "base".red,
                        type : "number",
                        demandOption : true,
                        describe : "es la base de la tabla de multiplicar".blue
                    })
                    .option('l',{
                        alias : "listar".red,
                        type : "boolean",
                        default : false,
                        describe : "Para imprimir las tablas en consola".blue
                    })
                    .option('h',{
                        alias : "hasta".red,
                        type : "number",
                        default : 10,
                        describe : "hasta que numero quieres multiplicar".blue
                    })
                    .check((argv , options) =>{
                        
                        if (isNaN(argv.b)) {
                            throw "la base tiene que ser un numero";
                        }
                        return true;
                        
                    })
                    .argv;

module.exports = argv;