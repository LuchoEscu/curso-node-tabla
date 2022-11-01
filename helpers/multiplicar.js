const fs = require('node:fs');
const colors = require('colors');


const crearArchivoPromise = (valor, listar = false) => {
    
    return new Promise ((resolve, reject) => {
        try {
            const nombre = `tabla-${valor}.txt`;
            let salida = '';
            for (let i=0 ; i<=10 ; i++)
                 salida +=`${valor} x ${i} = ${valor * i}\n`;
    
            fs.writeFileSync(`./salida/${nombre}`, salida);
            if(listar){
                console.log('------------------------------------------');
                console.log('Tabla del', colors.blue( valor ) );
                console.log('------------------------------------------');
                console.log(salida);
            }
            resolve(nombre);
        } catch (error){
            reject('No se pudo crear el archivo');
        }
    });
};

const crearArchivoAsync = async (valor, listar = false, hasta = 10) => {
    try {
        const nombre = `tabla-${valor}.txt`;
        let salida = '';
        for (let i=0 ; i<=hasta ; i++)
             salida +=`${valor} x ${i} = ${valor * i}\n`;

        fs.writeFileSync(`./salida/${nombre}`, salida);
        if(listar){
            console.log('------------------------------------------');
            console.log('Tabla del', colors.bold.blue (valor));
            console.log('------------------------------------------');
            console.log(salida);
        }
        return nombre.green;
    } catch (error){
        throw error;
    }
}


module.exports = {
    crearArchivoPromise, //crearArchivoPromise: crearArchivoPromise
    crearArchivoAsync

}


