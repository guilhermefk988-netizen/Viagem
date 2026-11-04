

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

const cardExperiencias__IMG = document.querySelector(".parte2__experiencias")

const Lugar3D = document.querySelector(".Terra__3D")

const carrosel = document.querySelector(".cards__carrosel")

const buttonLinksCelular = document.querySelector(".links__celular button")
const links = document.querySelector(".links__aqui")

fetch(`https://api.unsplash.com/photos?query=travel%20destinations&per_page=9&client_id=${chave}`)
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
                <h3>${card.user.location || "Nome não disponível"}</h3>
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

fetch(`https://api.unsplash.com/search/photos?query=travel%20destinations&per_page=30&client_id=${chave}`)
    .then(res => res.json())
    .then(IMGs => {
        const imagens = IMGs.results;


        cardExperiencias__IMG.innerHTML = `
            <div class="card__experiencias">
                <div class="gradiente"></div>
                <div class="card__img">
                    <img src=${imagens[2].urls.regular} alt="">
                </div>
                <h3>Viagens Personalizadas</h3>
                <p>Roteiros feitos sob medida para os seus sonhos.</p>
            </div>

            <div class="card__experiencias">
                <div class="gradiente"></div>
                <div class="card__img">
                    <img src=${imagens[10].urls.regular} alt="">
                </div>
                <h3>Destinos Incríveis</h3>
                <p>Conheça os lugares mais belos do planeta.</p>
            </div>

            <div class="card__experiencias">
                <div class="gradiente"></div>
                <div class="card__img">
                    <img src=${imagens[20].urls.regular} alt="">
                </div>
                <h3>Momentos Únicos</h3>
                <p>Viva experiências que ficarão para sempre.</p>
            </div>

            <div class="card__experiencias">
                <div class="gradiente"></div>
                <div class="card__img">
                    <img src=${imagens[5].urls.regular} alt="">
                </div>
                <h3>Aventuras Sem Limites</h3>
                <p>Explore, descubra e se surpreenda.</p>
            </div>`
    })

/* */
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { MeshoptDecoder } from "three/addons/libs/meshopt_decoder.module.js";

const loader = new GLTFLoader();
loader.setMeshoptDecoder(MeshoptDecoder);


const Cena = new THREE.Scene()
const Camera = new THREE.PerspectiveCamera(75, Lugar3D.clientWidth / Lugar3D.clientHeight, 0.1, 1000)
const Renderizador = new THREE.WebGLRenderer({ antialias: true, alpha: true })
Renderizador.setSize(Lugar3D.clientWidth, Lugar3D.clientHeight)
Lugar3D.appendChild(Renderizador.domElement)
const luzAmbiente = new THREE.AmbientLight(0xffffff, 2);
Cena.add(luzAmbiente);

// Iluminação natural
const luzHemisferica = new THREE.HemisphereLight(
    0xffffff,
    0x526078,
    1.5
);
Cena.add(luzHemisferica);

Camera.position.z = 2

const luzSolar = new THREE.DirectionalLight(0xffffff, 3);
luzSolar.position.set(5, 3, 5);
Cena.add(luzSolar);
let modulo = null;

loader.load('./Terra.glb', (gltf) => {
    modulo = gltf.scene;
     const nuvens = modulo.getObjectByName("ATM_0");

    if (nuvens) {
        nuvens.visible = false;
    }

    Cena.add(modulo);
})

function animação() {
    requestAnimationFrame(animação)
    Renderizador.render(Cena, Camera)
   if (modulo) {
        modulo.rotation.y += 0.01;
        modulo.rotation.x += 0.001;
    }
    
}
animação()
window.addEventListener('resize', function () {
    Camera.aspect = Lugar3D.clientWidth / Lugar3D.clientHeight
    Camera.updateProjectionMatrix()
    Renderizador.setSize(Lugar3D.clientWidth, Lugar3D.clientHeight)
})


fetch(`https://api.unsplash.com/search/photos?query=travel%20destinations&per_page=10&client_id=${chave}`)
    .then(resposta => resposta.json())
    .then(fotos => {

        fotos.results.forEach((foto,index)=>{
            carrosel.innerHTML += `
            <div class="card__carrosel" style="--delay:${index * 4}s">
                <img src=${foto.urls.regular} alt="">
            </div>
            `
        })
    })

    buttonLinksCelular.addEventListener('click', function(){
       if(links.style.display === "none"){
        (links.style.display = "flex")
       }else{(links.style.display = "none")}
    })