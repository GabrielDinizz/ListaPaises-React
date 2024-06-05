import noFavorite from '../../assets/noFavorite.svg'
import Favorite from '../../assets/favorite.svg'
    
fetch('/paises.json').then(res=>{
    res.json().then(dados=>{
        mostraDados(dados);
        });
}).catch(erro=>{
    console.log(erro+" erro na requisição")
});
    
function mostraDados(dados){
        var id = 0;
        const listCard =document.querySelector('#listCards');

        dados.slice(0,5).forEach(acesso => {
        id++
        listCard.innerHTML+= `
        <div class='card' id='card_${id}'>
            <div class='cardTxt'>
                <h2>${acesso.name}</h2>
                <h3>${acesso.capital}</h3>
                <h3>${acesso.population}</h3>
            </div>
            <div class='cardImgs'>
                <div class='divFlag'>
                    <img src="${acesso.flags.svg}" alt="" />
                </div>
                <div class='divFavorite'>
                    <img src="${noFavorite}" alt="" class="coracaoFavorito" onclick="favoritoId(${id})"/>
                </div>
            </div>
        </div>
        `
        });

}

//tornando essa função disponível para outros módulos(funções).
window.favoritoId = function(id) {
    //No DOM, os IDs não podem começar com um número
    const cardFavoritado = document.querySelector(`#card_${id}`);
    const imgFavorito = cardFavoritado.querySelector('.coracaoFavorito')
    imgFavorito.src = Favorite


    const listFavoritos =document.querySelector('.listCardFavorite');
    //porque appendChield funciona e '.innerhtml' nao.
    listFavoritos.appendChild(cardFavoritado);
};