import { useState } from "react";
import { BrowserRouter, Route, Link, useParams } from "react-router-dom";

const Saludo = () => {
  //let valor = props.nombre;
  
  const { nombre } = useParams();

  return (
    <h1>
      Hola {nombre}
    </h1>
  );
};

function App() {
  const [nombre, setNombre] = useState("");

  const handleInput = (e) => { 
    setNombre(e.target.value)
  }
  

  return (
    <BrowserRouter>
      <header>
        <Link exact to="/">Inicio</Link>
      </header>

      <Route exact path="/">
        <input type="text" value={nombre} onChange={handleInput} />
         
        <Link exact to={`/saludo/${nombre}`}>
          <p>Saludar</p>
        </Link>
      </Route>
      
      <Route exact path="/saludo/:nombre">
        <Saludo />
      </Route>
    </BrowserRouter>
  );
}

export default App;