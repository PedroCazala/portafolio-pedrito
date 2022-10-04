import './App.scss';
import Button1 from './components/buttons/Button1/Button1';
import TextButton from './components/buttons/TextButton/TextButton';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <h1>HOLA</h1>
      <p>PORTAFOLIO DE PEDRO</p>
      lals
      <Button1 text='Enviar'/>
      <TextButton text='habilidades'/>
      <TextButton text='desarrollos web'/>
      <TextButton text='Diseños'/>
      <TextButton text='contacto'/>
      <Footer/>
    </div>
  );
}

export default App;
