const fs = require('fs')

function crearArchivo(nombre,contenido){
    let message='';
    fs.writeFile(nombre,contenido, (err)=>{
        if(err){
            console.log(err)
        }else{
            console.log(`Archivo con el nombre: ${nombre} fué creado.`)
        }
    })
}

crearArchivo('otroArchivo.txt','Soy el nuevo contenido')
