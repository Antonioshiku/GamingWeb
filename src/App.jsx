import React from 'react'
import Footer from './components/Footer'
import './Footer.css'
import './components/Slider'
import Slider from './components/Slider'
import Blog from './components/Blog'
import './blog.css'
import About from './components/About'
import './glide.css'
import './glidecore.css'
import './Product.css'
import './App.css'
import Products from './components/Products'
import Gamingpj from './components/Gamingpj'
import NavBar from './components/NavBar'
import PSlider from './components/PSlider'
import Gaming from './components/Gaming'
import Showmore from './components/Showmore'


const App = () => {
  return (
    <div>
    <div className='bg-black'>
    <NavBar/>
    <PSlider/>
    
    <Gaming/>
    </div>
    <Showmore/>
      <Gamingpj/>
        <About/>
      <div className='m-20'></div>
      <Blog/>
      <div className='m-20'></div>
      <Products/>
      <div className='m-10'></div>
      <Slider/>
      <div className='m-20'></div>
      <Footer/>
    </div>
  )
}

export default App
