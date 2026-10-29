const maisMenos = document.querySelector(".mais__menos")
const lugares = document.querySelector(".lugares")

const chave = "4odVi0G3lyg9PiIXIHxGP_eLDIEA4wInCiq1nl9kpdQ" //Unsplash
const chaveSecreta = "7LzIR7kanhXi7NiBuOV0PNjQBe6cluKCz9urRzrknos" //Unsplash

fetch(`https://api.unsplash.com/search/photos?query=paris&per_page=50&client_id=${chave}`)
.then(res=> res.json())
.then(dados=> console.log(dados),


)


maisMenos.addEventListener('click', function(){
    if(lugares.style.height === "100vh"|| lugares.style.height === "auto"){
        lugares.style.height = "150vh"
    }else{lugares.style.height = "100vh"}
})