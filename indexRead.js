//read
const fs = require('fs')

function leerArchivo(nombre){
    let message='';
    fs.readFile(nombre,'utf8',(err,data)=>{
        if(err){
            console.log(err)
        }else{
            console.log(data)
            message=data
        }
    })
    return  `El contenido del archivo es lo siguiente: ${message}`
}

console.log(leerArchivo('Welcome.txt'))
