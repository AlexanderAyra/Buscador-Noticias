import React from 'react'
import propTypes from 'prop-types'
import Noticia from './Noticias'

const ListadoNoticias = ({noticias}) => {
    return(
        <div className="row">
            {noticias.map(noticia => (
                <Noticia
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}
        </div>
    )
}

ListadoNoticias.propTypes={
    noticias: propTypes.array.isRequired
}

export default ListadoNoticias