import React, { useState } from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario';

const App = () =>  {

  const [categoria, setCategoria] = useState('')

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
