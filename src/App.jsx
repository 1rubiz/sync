import './App.css'
import { Nav, Loading, Portfolio, Blog, Network, About, Carousel, Footer } from './components/pages'
import {useState, useEffect} from "react"
function App() {
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  })
  return (
    <div className='bg-[#D9D9D9]'>
      {
        loading && (<Loading/>)
        }
        <div className="fixed z-10 top-0 left-0 w-full h-screen bg-[#D9D9D9] text-black flex flex-col items-center justify-center md:hidden">
            <p className="text-xl">This is only available on desktop</p><br/>
            <p className="text-sm">Open the website on a desktop to enjoy</p>
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
