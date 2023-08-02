import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ScrollToTop from "./components/ScrollToTop";
import Main from './components/Main'
import Haaga from './components/Haaga'
import Naamco from './components/Naamco'
import Footer from './components/Footer'
import './index.css'
import './styles/Buttons.css'
import './styles/Typography.css'
import './styles/Header.css'



function App(){

  /**CLASSES
  main
  main__sections
  main__footer-section
  
  
  
  
  **/
  return <main className='main'>
    

      <Router>
        <ScrollToTop />
        <Routes>
            <Route path="/" element={ <Main /> } />
            <Route path="/haaga" element={ <Haaga /> } />
            <Route path="/naamco" element={ <Naamco /> } />
        </Routes>
      </Router>

     {/* <section className='main__sections'>
        <About />
        <Features />
        <Products />
     
        <Contact_us />
      </section>*/ }
      
      

      
      <Footer />
      
  </main>
}

export default App