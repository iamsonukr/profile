import React,{useRef,useState} from 'react'
import './contact.scss'
import { motion,useInView } from 'framer-motion'
import emailjs from '@emailjs/browser';
import { MotionWrap,AppWrap } from '../../wrapper';

const variants = {
  // initial: {
  //   y: 500,
  //   opacity: 0
  // },
  // animate: {
  //   y: 0,
  //   opacity: 1,
  //   transition: {
  //     duration: 0.5,
  //     staggerChildren: 0.3,
  //   }
  // }
}

const Contact = () => {

  const[error,setError]=useState(null)
  const [sent,setSent]=useState(false)


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_b97o4nr', 'template_4ssguke', formRef.current, {
        publicKey: 'tXr3Y_Rbpt5C9OAeg',
      })
      .then(
        () => {
          setError(false)
          setSent(true)
          console.log('SUCCESS!');
        },
        (error) => {
          setError(true)
          setSent(true)
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <motion.div  className="contact"  id='contact'>
      <motion.div className='textContainer' >
        <h1 className='letsWork'>Let's work <span>together</span></h1>
        <motion.div className="item" >
          <h2>Mail</h2>
          <span> <a href="mailto:thesonukumar357@gmail.com" style={{color:'black',textDecoration:'none'}}>thesonukumar357@gmail.com</a></span>
        </motion.div>
        <motion.div className="item" >
          <h2>Address</h2>
          <span> Manimajra, Chandigarh</span>
        </motion.div>
        <motion.div className="item"  >
          <h2>Phone</h2>
          <span> <a href="tel:+918210490833" style={{color:'black',textDecoration:'none'}}>+91 821 049 0833</a> </span>
        </motion.div>
      </motion.div>

      {/* form starts here */}
      <div className="formContainer">
       
        <motion.form  >
          <input type="text"  placeholder='Name' name='from_name' />
          <input type="email" required placeholder='Email' name="email" />
          <textarea rows={8} placeholder='Message' name='message'/>
          <button onClick={sendEmail}>Submit</button>
          {sent?(error?"Message Failed":"Message Sent Successfully ") :" "}
        </motion.form>
      </div>
    </motion.div>
  )
}

export default AppWrap(
  MotionWrap(Contact, 'app__skills'),
  'contact',
  'app__whitebg',
);