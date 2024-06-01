import '../homePage/homePage.css'
import img from '../../assets/imgHomePage.svg'

function homePage() {
    return (
        <>
            <section className='containerHomePage'>
                <div className='textHomePage'>
                    <h1>LISTA PAISES</h1>
                    <p>Nesta página, você encontrará uma lista completa de 250 países em ordem alfabética,
                        com informações sobre a população e a capital de cada um. Além disso, você tem a opção
                        de favoritar seus países preferidos e visualizar a soma total das populações desses países favoritos.</p>
                    <button>Vizualizar</button>
                </div>
                <div className='divImgHomePage'>
                    <img src={img} alt="" />
                </div>
            </section>
            <section className='containerDesafio'>
                <div>
                    <h2>Desafio para você!</h2>
                    <p>Consegue atingir uma população total de mais de 1 bilhão de pessoas selecionando
                    apenas três países? Boa sorte e divirta-se explorando!</p>
                </div>
            </section>
        </>
    )
}

export default homePage;