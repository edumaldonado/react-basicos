import React from 'react'
import logo from './logo.svg';
import Componente from './Components/Componente';
import Propiedades from './Components/Propiedades';
import Estado from './Components/Estado';
import RenderizadoCondicional from './Components/RenderizadoCondicional';


import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Editar <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>        
        </section>
      <section>
        <Componente msg ="Hola soy un componente funcional (arrow) desde una prop" />
        <hr />
        <Propiedades 
          cadena ="Esto es una Cadena de texto" 
          numero ="19"
          booleano ={true} 
          arreglo ={[1,2,3]}
          objeto ={{nombre:"Edu",correo:"edumaldonado@gmail.com"}} 
          funcion = {(num) => num * num}
          elementoRact = {<i>Esto es un elemento React</i>}
          componenteRact = {<Componente msg ="Soy un componente pasado como Prop" />}
          />
          <hr/>
          <Estado />
          <hr/>
          <RenderizadoCondicional />
      </section>  
      </header>

    </div>
  );
}

export default App;
