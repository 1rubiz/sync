import './App.css'
import { Nav, Portfolio, Blog, Network, About, Carousel, Footer } from './components/pages'

function App() {
  return (
    <div className='bg-[#D9D9D9]'>
      <Nav/>
      <Carousel/>
      <About/>
      <Portfolio/>
      <Network/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
