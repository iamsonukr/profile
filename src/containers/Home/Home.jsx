import { useState, useEffect } from "react";
// import { Container, Row, div } from "react-bootstrap";
// import headerImg from "../assets/img/header-img.svg";
// import { ArrowRightCircle } from 'react-bootstrap-icons';
// import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { AppWrap, MotionWrap } from "../../wrapper";
import './home.scss'

const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

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
                <img src='./assets/hero2.png' alt="Header Img" />
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