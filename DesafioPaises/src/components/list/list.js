import noFavorite from '../../assets/noFavorite.svg'
import Favorite from '../../assets/favorite.svg'
    
fetch('/paises.json').then(res=>{
    res.json().then(dados=>{
        mostraDados(dados);
        });
}).catch(erro=>{
    console.log(erro+" erro na requisição")
});
    
function mostraDados(dados) {
    var id = 0;
    const listCard = document.querySelector('#listCards');

    dados.slice(0, 50).forEach((acesso, index) => {
        id++;
        listCard.innerHTML += `
        <div class='card' id='card_${id}' data-index='${index}'>
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
        `;
    });
}


window.favoritoId = function (id) {
    const cardFavoritado = document.querySelector(`#card_${id}`);
    const imgFavorito = cardFavoritado.querySelector('.coracaoFavorito');
    const listFavoritos = document.querySelector('.listCardFavorite');
    const listCard = document.querySelector('#listCards');

    if (imgFavorito.src.includes(noFavorite)) {
        // Adiciona o país à lista de favoritos
        imgFavorito.src = Favorite;
        listFavoritos.appendChild(cardFavoritado);
    } else {
        // Remove o país da lista de favoritos e retorna para a posição original
        imgFavorito.src = noFavorite;
        const indexOriginal = cardFavoritado.getAttribute('data-index');
        
        // Encontra a posição correta na lista principal
        const cards = listCard.children;
        if (cards.length === 0 || indexOriginal >= cards.length) {
            listCard.appendChild(cardFavoritado);
        } else {
            listCard.insertBefore(cardFavoritado, cards[indexOriginal]);
        }
    }
};

