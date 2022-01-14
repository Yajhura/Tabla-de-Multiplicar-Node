const fs = require("fs");
var colors = require('colors');

const crearArchvio = async(base = 5,listar = false,hasta = 10) => {
  try {
    let salida,consola = "";

    for (let i = 0; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i} \n`;
      consola += `${base} ${"x".green} ${i} ${"=".green} ${base * i} \n`;
    }
    if (listar) {
      console.log("========================".rainbow);
      console.log(`  Tabla del ${base}  `.inverse);
      console.log("========================".rainbow);
      
      console.log(consola); 
    }
    
    
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `tabla de la ${base} creada`;

  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchvio,
};
