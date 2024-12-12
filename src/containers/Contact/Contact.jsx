import React, { useRef, useState } from 'react';
import './contact.scss';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { MotionWrap, AppWrap } from '../../wrapper';

const Contact = () => {
  const [formName,setFormName]=useState();
  const [formEmail,setFormEmail]=useState();
  const [formMessage,setFormMessage]=useState();
  const [sentMessage,setSentMessage]=useState("Write me a message !")
  const formRef = useRef(); 
  const [error, setError] = useState(null);
  const [sent, setSent] = useState(false);
  const [msgColor,setMsgColor]=useState('gray')


  const sendEmail = (e) => {
    e.preventDefault();
    setSentMessage('Sending...')

    emailjs
      .sendForm(
        'service_b97o4nr', // Your Service ID
        'template_4ssguke', // Your Template ID
        formRef.current,
        'tXr3Y_Rbpt5C9OAeg' // Your Public Key
      )
      .then(
        () => {
          setError(false);
          setSent(true);
          setFormName('')
          setFormEmail('')
          setFormMessage('')
          console.log('SUCCESS!');
          setSentMessage("Message Sent Successfully.")
          setMsgColor('green')
        },
        (error) => {
          setError(true);
          setSent(true);
          setMsgColor('red')
          console.log('FAILED...', error.text);
          setSentMessage("Message Sending Failed.")
        }
      );
  };

  return (
    <motion.div className="contact" id="contact">
      <motion.div className="textContainer">
        <h1 className="letsWork">
          Let's work <span>together</span>
        </h1>
        <motion.div className="item">
          <h2>Mail</h2>
          <span>
            <a href="mailto:thesonukumar357@gmail.com" style={{ textDecoration: 'none' }}>
              thesonukumar357@gmail.com
            </a>
          </span>
        </motion.div>
        <motion.div className="item">
          <h2>Address</h2>
          <span> Manimajra, Chandigarh</span>
        </motion.div>
        <motion.div className="item">
          <h2>Phone</h2>
          <span>
            <a href="tel:+918210490833" style={{  textDecoration: 'none' }}>
              +91 821 049 0833
            </a>
          </span>
        </motion.div>
      </motion.div>

      {/* form starts here */}
      <div className="formContainer">
        <motion.form ref={formRef} onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="from_name" onChange={(e)=>setFormName(e.target.value)} value={formName} />
          <input type="email" required placeholder="Email" name="sender_email" onChange={(e)=>setFormEmail(e.target.value)} value={formEmail} />
          <textarea rows={8} placeholder="Message" name="message" onChange={(e)=>setFormMessage(e.target.value)} value={formMessage} />
          <button type="submit" >Submit</button>
          {/* {sent ? (error ? "<h2>Message Failed</h2>" : "Message Sent Successfully") : " "} */}
          <h3 style={{color:msgColor}}>{sentMessage}</h3>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default AppWrap(
  MotionWrap(Contact, 'app__skills'),
  'contact',
  'app__primarybg'
);
