import Header from './components/Header'
import About from './components/About'
import Features from './components/Features'
import Products from './components/Products'
import Reviews from './components/Reviews'
import Contact_us from './components/Contact-Us'
import Footer from './components/Footer'

function App(){
  return <main className='main'>
    <Header />

    <section className='main_section'>
      <About />
      <Features />
      <Products />
      {/**<Reviews />**/}
    </section>

    <section className="footer_section">
      <Contact_us />
      <Footer />
    </section>

  </main>
}

export default App