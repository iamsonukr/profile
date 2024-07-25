import { useState } from 'react'
import './App.css'
import { Navbar } from './components';
import { About,Skills, Testimonial,Work,Home,Contact } from './containers';
// import Contact from './containers/Contact/Contact';
import Footer from './components/Footer/Footer';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Work/>
    <Skills/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
