import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.scss';
import Footer from './components/footer/Footer';
import IndexContainer from './components/IndexContainer/IndexContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        hola
          <Routes>
            <Route path="/habilidades" element={<h1>Habilidades</h1>}/>
            <Route path="/desarrolloWeb" element={<h1>Proyectos de desarrollo web</h1>}/>
            <Route path="/diseño" element={<h1>Diseño</h1>}/>
            <Route path="/contacto" element={<h1>Contacto</h1>}/>
            <Route path="/" element={<IndexContainer/>}/>
          </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
