const multer = require ('multer')
const armazenamento = multer.diskStorage({
destination:(req,file,cb)=>{
    cb(null, './uploads/')
},
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname)
    }
})

var upload = multer({
    storage: armazenamento,
    fileFilter: (req,file,cb)=>{
        if(
            file.mimetype == "image.png" ||
            file.mimetype == "image.jpeg" ||
            file.mimetype == "image.jpg" ||
            file.mimetype == "image.webp" 
        ){
            cb(null, true)
        }else{
            cb(null, true)
            return cb(new Error("Tipo de arquivo inválido"))
        }
 },
limits:{fileSize:17000}

}).single("imagem")

module.exports = upload