const multer = require ('multer')
const storage = multer.diskStorage({
destination:(req,file,cb)=>{
    cb(null, './uploads/')
},
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname)
    }
})

let upload = multer({
    storage: storage,
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
limits:{fileSize:170000}

}).single("image")

module.exports = {upload,multer}