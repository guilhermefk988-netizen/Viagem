const maisMenos = document.querySelector(".mais__menos")
const lugares = document.querySelector(".lugares")

const chave = "4odVi0G3lyg9PiIXIHxGP_eLDIEA4wInCiq1nl9kpdQ" //Unsplash
const chaveSecreta = "7LzIR7kanhXi7NiBuOV0PNjQBe6cluKCz9urRzrknos" //Unsplash

fetch(`https://api.unsplash.com/search/photos?query=paris&per_page=30&client_id=${chave}`)
.then(res=> res.json())
.then(dados=> {console.log(dados)

dados.results.forEach(card => {
    


lugares.innerHTML += `
<div class="card">
            <div class="imagem">
                <img src=${card.urls.regular} alt="${card.alt_description}">
            </div>
            <div class="gradiente__diferente">

            </div>
            <div class="coração">
                <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/ffffff/hearts.png" alt="hearts" />
            </div>
            <div class="conteudo">
                <h3>${card.user.name}}</h3>
                <p>França</p>
                <p>⭐4.8(12.4k)</p>
                <button>
                    <img width="50" height="50" src="https://img.icons8.com/ios/50/ffffff/circled-left-2.png"
                        alt="voltar" />
                </button>
            </div>
        </div>
`});
}
)


maisMenos.addEventListener('click', function(){
    if(lugares.style.height === "100vh"|| lugares.style.height === "auto"){
        lugares.style.height = "150vh"
    }else{lugares.style.height = "100vh"}
})