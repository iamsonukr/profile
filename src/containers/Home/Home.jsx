import { useState, useEffect } from "react";
// import { Container, Row, div } from "react-bootstrap";
// import headerImg from "../assets/img/header-img.svg";
// import { ArrowRightCircle } from 'react-bootstrap-icons';
// import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { AppWrap, MotionWrap } from "../../wrapper";
import './home.scss'
import ParallaxImage from "../../Parallax/ParallaxImage";
import StatsSection from "../../components/Counter/StatsSection";

const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Full Stack Developer","MERN Stack Developer", ];
  const period = 900;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1) // Deleting text
      : fullText.substring(0, text.length + 1); // Adding text
  
    setText(updatedText);
  
    if (isDeleting) {
      // Speed up deletion phase
      setDelta(prevDelta => Math.max(50, prevDelta / 2)); // Minimum speed of 50ms
    } else {
      // Slow down when typing the full word
      setDelta(prevDelta => Math.max(100, prevDelta)); // Maximum speed of 100ms
    }
  
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period); // Reset to normal speed after typing is done
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200); // Shorter delay before starting the next word
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <div className="banner" id="home">

      <div className="home-content">

        {/* home text content here */}
        <div className="home-text">
          <TrackVisibility>
            {({ isVisible }) =>
              <div>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>Hi! I'm <span className="myName">Sonu</span><br/> <span className="txt-rotate" dataPeriod="500" data-rotate='[ "Web Developer", "Full Stack Developer", "Front-end Developer" ]'><span className="wrap">{text}</span></span></h1>
                <p>Hello, I am Sonu, a seasoned MERN stack developer with over three years of freelancing experience. I excel in crafting responsive and dynamic websites, ensuring seamless user experiences with efficient and scalable back-end solutions.</p>
                <StatsSection/>
                <a href="#contact">
                  <button className="home-button">Let’s Connect</button>
                </a>
              </div>}
          </TrackVisibility>
        </div>

        {/* home image content  */}
        <div className="home-image">
          <TrackVisibility>
            {({ isVisible }) =>
              <div className="profile-image">
                
           
                {/* <ParallaxImage src='./assets/heroIMG.jpg' alt="Header Img" /> */}
                <ParallaxImage src='./assets/heroArt.png' alt="Header Img"  />
              </div>
            }
          </TrackVisibility>
        </div>

      </div>
    </div>
  )
}
export default AppWrap(
  MotionWrap(Home, 'app__testimonial'),
  'home',
  'app__primarybg',
);