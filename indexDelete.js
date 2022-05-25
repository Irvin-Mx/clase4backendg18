//delete
const fs = require('fs');

function deleteArchivo(archivo){
    let path = `./${archivo}`
    
    fs.unlink(path, (err)=>{
        if(err){
            console.log('archivo no encontrado')
        }else{
            console.log('archivo eliminado')
        }
    })
}

deleteArchivo('random.txt')
