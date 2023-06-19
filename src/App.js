import './App.css';
import Contact from './Contact';
import { CryptoGraph } from './CryptoGraph';
import Footer from './Footer';
import { Hero } from './Hero';
import { HeroSmall } from './HeroSmall';
import { Navbar } from './NavBar';
import { Projects } from './Projects';
import { Skills } from './Skills';



function App() {
  return (
    <div className="App max-w-[2000px] overflow-hidden">
      <Navbar/>
      <Hero/>
      <HeroSmall/>
      <Skills/>
      {/* <CryptoGraph/> */}
      <Projects/>
      <Contact></Contact>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
