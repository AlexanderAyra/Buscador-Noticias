import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario';

const App = () =>  {

  const [categoria, setCategoria] = useState('')
  const [noticias, setNoticias] = useState([])

  useEffect(() => {

    const consultaAPI = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=c71b76fa85a8424eacccb2592cd88bdd`

      const respuesta = await fetch(url)
      const api = await respuesta.json()
      setNoticias(api.articles);
    }
    consultaAPI()

  }, [categoria])

  return (
    <div>
      <Header titulo='Buscador de Noticias'/>
    
      <div className="container white">
        <Formulario
          setCategoria={setCategoria}
        />
      </div>
    </div>

  );
}

export default App;
