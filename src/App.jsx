import './App.css'
import { Nav, Portfolio, Blog, Network, About, Carousel, Footer } from './components/pages'

function App() {
  return (
    <div className='bg-[#D9D9D9]'>
        <div className="absolute top-0 left-0 w-full h-screen bg-[teal] flex items-center justify-center md:hidden">
            <p className="text-lg text-white">This is only available in desktop applications</p>
            <p className="text-white text-sm">Open the website on a desktop to enjoy</p>
        </div>
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
