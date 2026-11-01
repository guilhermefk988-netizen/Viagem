const maisMenos = document.querySelector(".mais__menos")
const lugares = document.querySelector(".lugares")

const chave = "4odVi0G3lyg9PiIXIHxGP_eLDIEA4wInCiq1nl9kpdQ" //Unsplash
const chaveSecreta = "7LzIR7kanhXi7NiBuOV0PNjQBe6cluKCz9urRzrknos" //Unsplash

const areaPesquisa = document.querySelector(".pesquisa__area")
const butao = document.querySelector(".input button")
const sairButao = document.querySelector(".sair__Informações button")
const fundoImagem = document.querySelector(".fundo__img")

const butonSugestão = document.querySelectorAll(".card__Sugestão")
const lugarSugestão = document.querySelector(".lugaresda__pesquisa")

const CorpoInput = document.querySelector(".input ")
const input = document.querySelector(".input input")
const ButonInput = document.querySelector(".input button")

const inputSessao2 = document.querySelector(".Pesquise input")
const ButonInputSessão = document.querySelector(".Pesquise button")

fetch(`https://api.unsplash.com/photos?per_page=8&client_id=${chave}`)
    .then(res => res.json())
    .then(dados => {
        console.log(dados)

        dados.forEach(card => {

            lugares.innerHTML += `
<div class="card">
<div class="flip">
                <div class="frente">
            <div class="imagem">
                <img src=${card.urls.regular} alt="${card.alt_description}">
            </div>
            <div class="gradiente__diferente">

            </div>
            <div class="coração">
                <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/ffffff/hearts.png" alt="hearts" />
            </div>
            <div class="conteudo">
                <h3>${card.user.location}</h3>
                <p>França</p>
                <p>⭐4.8(12.4k)</p>
                <button>
                    <img width="50" height="50" src="https://img.icons8.com/ios/50/ffffff/circled-left-2.png"
                        alt="voltar" />
                </button>
            </div>
        </div>
              <div class="tras">
                    <div class="tras__texto">
                     <h3>MAIS SOBRE</h3>
                     <h2>${card.short_description}</h2>
                     <p>${card.description || "Descrição não disponível"}</p>
                     
                        </div>
                        <div class="texto__informções__tras">
                      <h4>Informações da foto</h4> 
                     </div>
                      <div class="grid__informaçõesSobre">

                        <div class="informações__sobreCard">
                            <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/ff0000/hearts.png" alt="hearts"/>
                            <div>
                                <p>Curtida</p>
                                <h5>${card.likes}</h5>
                            </div>
                        </div>     
                                           </div>
                  <div class="autor">
                        <h3>AUTOR DA FOTOGRAFIA</h3>

                        <div class="user__autor">
                        <img width="30" height="30" src=${card.user.profile_image.medium} alt="hearts"/>
                         <div>
                           
                        <h4>${card.user.username}</h4>
                            <a href="${card.user.links.html}">${card.user.username}</a>
                         </div>
                       
                            </div>

                    </div>
                   </div>
                   
                  </div>
                  
                </div>
`});
        fundoImagem.innerHTML = `
                <img src=${dados[2].urls.full} alt="${dados[2].alt_description}">
`
    }



    )


maisMenos.addEventListener('click', function () {
    if (lugares.style.height === "100vh" || lugares.style.height === "auto") {
        lugares.style.height = "150vh"
    } else { lugares.style.height = "100vh" }
})

butao.addEventListener('click', function () {
    areaPesquisa.style.display = "flex"
    document.body.style.overflow = "hidden"
    CorpoInput.style.opacity = 0
})
sairButao.addEventListener('click', function () {
    areaPesquisa.style.display = "none"
    document.body.style.overflow = ""
    CorpoInput.style.opacity = ""
})

butonSugestão.forEach(botao => {
    botao.addEventListener('click', function (event) {
        const oDestino = event.currentTarget.dataset.destino

        fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(oDestino)}&per_page=32&client_id=${chave}`)
            .then(res => res.json())
            .then(dado => {
                console.log(dado)
                lugarSugestão.innerHTML = ""

                dado.results.forEach(dadoSugestão => {
                    lugarSugestão.innerHTML += `
                <div class="card__da__sugestão">
                <img src=${dadoSugestão.urls.regular} alt="${dadoSugestão.alt_description}">
            </div>
                `
                })



            })
    })
})

ButonInput.addEventListener('click', function () {
    fetch(`https://api.unsplash.com/search/photos?query=${input.value}&per_page=30&client_id=${chave}`)
        .then(res => res.json())
        .then(pesquisa => {

            lugarSugestão.innerHTML = ""
            pesquisa.results.forEach(fotos =>
                lugarSugestão.innerHTML += `
            <div class="card__da__sugestão">
                <img src=${fotos.urls.regular} alt="${fotos.alt_description}">
            </div>
`
            )
        })
})
ButonInputSessão.addEventListener('click', function () {
    fetch(`https://api.unsplash.com/search/photos?query=${inputSessao2.value}&per_page=30&client_id=${chave}`)
        .then(res => res.json())
        .then(pesquisa => {

            lugarSugestão.innerHTML = ""
            pesquisa.results.forEach(fotos =>
                lugarSugestão.innerHTML += `
            <div class="card__da__sugestão">
                <img src=${fotos.urls.regular} alt="${fotos.alt_description}">
            </div>
`
            )
        })
})