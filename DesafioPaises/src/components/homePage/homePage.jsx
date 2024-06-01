import '../homePage/homePage.css'
import img from '../../assets/imgHomePage.png'

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
        </>
    )
}

export default homePage;