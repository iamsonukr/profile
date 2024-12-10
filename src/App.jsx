import { useState } from 'react'
import './App.css'
import { Navbar } from './components';
import { About,Skills, Testimonial,Work,Home,Contact } from './containers';
// import Contact from './containers/Contact/Contact';
import Footer from './components/Footer/Footer';
// import PortfolioSlider from './components/Slider/PortfolioSlider.jsx'
import Story from './containers/Story/Story.jsx';
import SliderStory from './SliderStory/SliderStory.jsx';
import ThemeToggle from './ThemeToggle/ThemeToggle.jsx';


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
