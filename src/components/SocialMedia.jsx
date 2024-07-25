import React from 'react';
import {BsInstagram, BsLinkedin ,BsGithub} from 'react-icons/bs';


const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/thesonukr/" target='_blank'> <BsLinkedin /></a>
    </div>
    <div>
      <a href="https://www.github.com/iamsonukr/" target='_blank'> <BsGithub /></a>
    </div>
    <div>
      <a href="https://www.instagram.com/thesonukr/ " target='_blank'> <BsInstagram /></a>
    </div>
  </div>
);

export default SocialMedia;
