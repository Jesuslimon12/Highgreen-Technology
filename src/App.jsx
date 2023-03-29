import Header from './components/Header'
import About from './components/About'
import Features from './components/Features'
import Products from './components/Products'
import Reviews from './components/Reviews'
import Contact_us from './components/Contact-Us'

function App(){
  return <main className='main'>
    <Header />

    <div className='main_sections'>
      <About />
      <Features />
      <Products />
      {/**<Reviews />**/}
      <Contact_us />
    </div>

  </main>
}

export default App