import logo from './logo.svg';
import './App.css';
//import {Componente, Componente2} from "./components/Componentes.js"
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home.js';
import Ruta1 from './components/Ruta1.js';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import './styles/style.css';
import ListaCompanieros from './components/ListaCompanieros';

let companieros = ["Brandon","Azael","Carlos","Cristofer","Eduardo","David","Haro","Felipe","Angel"];
let lista = companieros.map((nombre,key)=><ListaCompanieros key={key} name={nombre} age="???" />);

function App() {
  return (
    /*<BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="Ruta1" element={<Ruta1 />} />
      </Routes>
    </BrowserRouter>*/
    <BrowserRouter>
      <div>
        <h1>Mi Primera SPA con React</h1>
        <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/AboutMe">Sobre mi</NavLink></li>
          <li><NavLink to="/Contact">Contacto</NavLink></li>
          <li><NavLink to="/ListaCompanieros">Mis compañeros</NavLink></li>
        </ul>
        <div className="content">
          <Routes>
            <Route index element={<Home />} />
            <Route path="AboutMe" element={<AboutMe />} />
            <Route path="Contact" element={<Contact />} />
            <Route path='ListaCompanieros' element={lista} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
