import React from 'react';
import './ParallaxStars.scss';

const ParallaxStars = ({lineOne,lineTwo}) => {
  return (
    <div className="main" >
      <div className="stars-container">
      <div class="stars-container">
    <div class="star-layer" id="stars1"></div>
    <div class="star-layer" id="stars2"></div>
    <div class="star-layer" id="stars3"></div>
    <div class="star-layer" id="stars4"></div>
    <div class="star-layer" id="stars5"></div>
    <div class="star-layer" id="stars6"></div>
    <div class="star-layer" id="stars7"></div>
    <div class="star-layer" id="stars8"></div>
    <div class="star-layer" id="stars9"></div>
    <div class="shooting-star"></div>
    <div class="shooting-star"></div>
    <div class="shooting-star"></div>
  </div>
        <div id="title">
          <span>{lineOne} </span>
          <span>{lineTwo}</span>
        </div>
      </div>
    </div>
  );
};

export default ParallaxStars;
