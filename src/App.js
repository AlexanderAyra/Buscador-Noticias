import React from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario';

function App() {
  return (
    <div>
      <Header titulo='Buscador de Noticias'/>
    
      <div className="container white">
        <Formulario />
      </div>
    </div>

  );
}

export default App;
