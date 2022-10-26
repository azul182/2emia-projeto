document.addEventListener("DOMContentLoaded",()=>{
    
    const fileInput = document.querySelector("#post-input")
    const btn = document.querySelector("#post-btn")
    const img = document.querySelector("#post-img-preview")
    const previewGroup = document.querySelector("#preview-group")
    const post_group = document.querySelector(".post-group")

    fileInput.addEventListener("change",loadImage)
    
    function loadImage (){
        let file = fileInput.files[0]
        if(!file)return
        img.src = URL.createObjectURL(file)
        post_group.style.display = "none"
        previewGroup.style.display = "flex"
    }
    
    btn.addEventListener("click",()=>{
        fileInput.click()
        loadImage()
    })
})


