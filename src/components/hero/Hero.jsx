import React from 'react';
import './hero.css';
import Crypto from '../../assets/hero-img.png';
const Hero = () => {
  return (
    <div className='hero' id='home'>
      <div className='container'>
        {/* Left Sside */}
        <div className='left'>
          <p>Buy & Sell Crypto 24/7 using your retirement account</p>
          <h1>Invest in Crypto currency with Your IRA</h1>
          <p>Buy, Sell and store hundreds of Crypto currency</p>
          <div className='input-container'>
            <input type='email' placeholder='Enter your Email' />
            <button className='btn'>Learn More</button>
          </div>
        </div>

        {/* Right Side */}
        <div className='right'>
          <div className='img-container'>
            <img src={Crypto} alt='crypto' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
