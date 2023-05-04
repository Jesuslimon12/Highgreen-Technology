import Header from './components/Header'
import About from './components/About'
import Features from './components/Features'
import Products from './components/Products'
import Reviews from './components/Reviews'
import Contact_us from './components/Contact-Us'
import Footer from './components/Footer'
import './index.css'
import './styles/Buttons.css'
import './styles/Typography.css'



function App(){

  /**CLASSES
  main
  main__sections
  main__footer-section
  
  
  
  
  **/
  return <main className='main'>
      <Header />

      <section className='main__sections'>
        <About />
        <Features />
        <Products />
        {/**<Reviews />**/}
        <Contact_us />
      </section>

      
      <Footer />
      
  </main>
}

export default App