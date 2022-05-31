import React from 'react';
import './sign.css';
import mobile from '../../assets/trade.png';
const Signup = () => {
  return (
    <div className='signup' id='earn'>
      <div className='container'>
        {/* Left */}
        <div className='left'>
          <img src={mobile} alt='mobile' />
        </div>
        {/* Right */}
        <div className='right'>
          <h2>Earn passive income with crypto.</h2>
          <p>
            Earn up to 12% annual rewards on 30+ digital assets. Simply hold
            your assets and automaticly earn rewards at the end of each month
            with no lockups and no limits.
          </p>
          <div className='input-container'>
            <input type='email' placeholder='Enter your Email...' />
            <button className='btn'>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
