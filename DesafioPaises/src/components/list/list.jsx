import '../list/list.css'
import noFavorite from '../../assets/noFavorite.svg'
import '../list/list.js'

function lista() {

    return (
        <>
            <section className='containerList'>
                <div className='divList'>
                    <div className='txtList'>
                        <h2>Países</h2>
                        <p>População total:</p>
                    </div>
                    <div id='listCards'>
                    </div>
                </div>

                <div className='divList'>
                    <div className='txtList'>
                        <h2>Favoritos</h2>
                        <p>População total: </p>
                    </div>
                    <div  className='listCardFavorite'>

                    </div>
                </div>

            </section>
        </>
    )
}

export default lista;