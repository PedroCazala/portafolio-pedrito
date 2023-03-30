import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
// import AlgoVideo from './algo';


import './App.scss';
import Footer from './components/footer/Footer';
import IndexContainer from './components/pages/IndexContainer/IndexContainer';
import ProyectosDesarrolloWebContainer from './components/pages/Proyectos/ProyectosDesarrolloWebContainer/ProyectosDesarrolloWebContainer';
import "bootstrap-icons/font/bootstrap-icons.css"
import Header from './components/Header/Header';
//------ Pages ------ 
import SobreMi from './components/pages/SobreMi/SobreMi';
import Curriculum from './components/pages/Curriculum/Curriculum';
import Contacto from './components/pages/Contacto/Contacto';
// import ProyectoItem from './components/pages/ProyectoItem/ProyectoItem';
import Educacion from './components/pages/Educación/Educacion';

import "bootswatch/dist/quartz/bootstrap.min.css";
import ProyectoItem from './components/pages/ProyectoItem/ProyectoItem';
import Habilidades from './components/pages/Habilidades/Habilidades';
// import "bootswatch/dist/minty/bootstrap.min.css";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Header/>
          <main>
            <Routes>
              <Route path="/proyectos" element={<ProyectosDesarrolloWebContainer/>}/>
              <Route path="/proyecto/:id" element={<ProyectoItem/>}/>
              <Route path="/habilidades" element={<Habilidades/>}/>
              <Route path="/desarrolloWeb" element={<ProyectosDesarrolloWebContainer/>}/>
              <Route path="/diseño" element={<h1>Diseño</h1>}/>
              <Route path="/educacion" element={<Educacion/>}/>
              <Route path="/sobre-mi" element={<SobreMi/>}/>
              <Route path="/contacto" element={<Contacto/>}/>
              <Route path="/curriculum" element={<Curriculum/>}/>
              <Route path="/sitio-no-disponible" element={<>
                  <p>Proyecto no disponible. </p>
                  <p> Puede que todavía esté en proceso o que el desarrollador aún no desee compartirlo.</p>
              </>
              }/>
              <Route path="/" element={<IndexContainer/>}/>
              <Route path="*" element={<><p>La página que estas buscando no existe</p><button type="button" className="btn btn-primary"><Link to="/">Volver a la pagina principal</Link></button></>}/>
            </Routes>
          </main>
        <Footer/>
      </div>
    </BrowserRouter>
        // <AlgoVideo/>
  );
}

export default App;
