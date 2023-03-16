import { BrowserRouter, Route, Routes} from 'react-router-dom';
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

import "bootswatch/dist/quartz/bootstrap.min.css";
// import "bootswatch/dist/lux/bootstrap.min.css";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Header/>
          <main>
            <Routes>
              <Route path="/proyectos" element={<ProyectosDesarrolloWebContainer/>}/>
              <Route path="/habilidades" element={<div>
                <h1>Habilidades</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus beatae nemo rem amet qui ab veniam laudantium ducimus, placeat tempore numquam. Distinctio nam adipisci numquam, pariatur illum blanditiis! Cumque, temporibus! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, ut dolorum. Possimus, ex aspernatur. Sunt consectetur perferendis, animi odio, corporis delectus iusto hic dolore est blanditiis laborum? Inventore, iusto a! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore earum totam laboriosam perspiciatis voluptates fuga, iure voluptatum recusandae reprehenderit incidunt accusamus qui illum ratione rerum! Voluptatum amet excepturi doloribus possimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aspernatur voluptates itaque, quasi ex sint repudiandae, voluptatum aut tempore laudantium labore omnis odio ducimus deserunt reprehenderit exercitationem in culpa ullam.</p>
              </div>}/>
              <Route path="/sobre-mi" element={<SobreMi/>}/>
              <Route path="/desarrolloWeb" element={<ProyectosDesarrolloWebContainer/>}/>
              <Route path="/diseño" element={<h1>Diseño</h1>}/>
              <Route path="/contacto" element={<Contacto/>}/>
              <Route path="/curriculum" element={<Curriculum/>}/>
              <Route path="/" element={<IndexContainer/>}/>
            </Routes>
          </main>
        <Footer/>
      </div>
    </BrowserRouter>
        // <AlgoVideo/>
  );
}

export default App;
