import { useState } from 'react'
import './App.css'
import { Navbar } from './components';
import { About,Skills, Testimonial,Work,Home,Contact } from './containers';
import Footer from './components/Footer/Footer';
import Story from './containers/Story/Story.jsx';
import Education from './containers/Education/Education.jsx';
import ParallaxBackground from './components/ParralaxBackground/ParallaxBackground.jsx';
import ParallaxStars from './components/ParralaxStars/ParallaxStars.jsx';




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
    <Education/>
    <Testimonial/>
    {/* <PortfolioSlider/> */}
    <Story/>
    <Contact/>
    {/* <Slider/> */}
    {/* <SliderStory/> */}
    {/* <ParallaxBackground/> */}
    <ParallaxStars lineOne={"AVAILABLE"} lineTwo={"FOR FREELANCING"}/>
    <Footer/>

    </>
  )
}

export default App
