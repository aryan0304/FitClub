import './App.css';
import Hero from './Components/Hero/Hero'
import PLans from './Components/Plans/PLans';
import Program from './Components/Programs/Program';
import Reasons from './Components/Reasons/Reasons';
import Testimonial from './Components/Testimonial/Testimonial';

import Join from './Components/Join/Join';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Hero/>
      <Program/>
      <Reasons/>
      <PLans/>
      <Testimonial/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
