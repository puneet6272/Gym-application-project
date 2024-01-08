import './App.css';
import Footar_Contact from './Components/Footar_Contact';
import Hero from './Components/Hero';
import Prizing from './Components/Prizing';
import Programs from './Components/Programs';
import Ready_to_level_up from './Components/Ready_to_level_up';
import Testimonials from './Components/Testimonials';

function App() {
  return (
    <div className="App">


      <Hero/>
      <Programs/>
      <Prizing/>
      <Testimonials/>
      <Ready_to_level_up/>
      <Footar_Contact/>
    </div>
  );
}

export default App;
