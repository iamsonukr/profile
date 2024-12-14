import { useState } from 'react'
import './App.css'
import { Navbar } from './components';
import { About,Skills, Testimonial,Work,Home,Contact } from './containers';
import Footer from './components/Footer/Footer';
import Story from './containers/Story/Story.jsx';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Home/>
    {/* <ThemeToggle/> */}
 
    <About/>
    <Work/>
    <Skills/>
    <Testimonial/>
    {/* <PortfolioSlider/> */}
    <Story/>
    <Contact/>
    {/* <Slider/> */}
    {/* <SliderStory/> */}
    <Footer/>

    </>
  )
}

export default App
