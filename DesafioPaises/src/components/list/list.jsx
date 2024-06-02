import '../list/list.css'
import noFavorite from '../../assets/noFavorite.svg'

function lista() {
    return (
        <>
            <section className='containerList'>
                <div className='divList'>
                    <div className='txtList'>
                        <h2>Países</h2>
                        <p>População total:</p>
                    </div>
                    <div className='listCards'>
                        <div className='card'>
                            <div className='cardTxt'>
                                <h2>Nome</h2>
                                <h3>Capital</h3>
                                <h3>População</h3>
                            </div>
                            <div className='cardImgs'>
                                <div className='divFlag'>
                                    <img src="https://flagcdn.com/ao.svg" alt="" />
                                </div>
                                <div className='divFavorite'>
                                    <img src={noFavorite} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className='card'>
                            <div className='cardTxt'>
                                <h2>Nome</h2>
                                <h3>Capital</h3>
                                <h3>População</h3>
                            </div>
                            <div className='cardImgs'>
                                <div className='divFlag'>
                                    <img src="https://flagcdn.com/ao.svg" alt="" />
                                </div>
                                <div className='divFavorite'>
                                    <img src={noFavorite} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className='card'>
                            <div className='cardTxt'>
                                <h2>Nome</h2>
                                <h3>Capital</h3>
                                <h3>População</h3>
                            </div>
                            <div className='cardImgs'>
                                <div className='divFlag'>
                                    <img src="https://flagcdn.com/ao.svg" alt="" />
                                </div>
                                <div className='divFavorite'>
                                    <img src={noFavorite} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='divList'>
                    <div className='txtList'>
                        <h2>Favoritos</h2>
                        <p>População total</p>
                    </div>
                    <div>

                    </div>
                </div>

            </section>
        </>
    )
}

export default lista;