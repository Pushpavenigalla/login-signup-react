import React, { useState } from 'react';
import './LoginSignup.css';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className='wrapper'>
      <form action="">
        {isSignup ? (
          <>
            <h1>Sign Up</h1>
            <div className="input-box">
              <input type="text" placeholder='Username' required />
              <FaUser className='icon'/>
            </div>
            <div className="input-box">
              <input type="email" placeholder='Email' required />
              <MdEmail className='icon'/>
            </div>
            <div className="input-box">
              <input type="password" placeholder='Password' required />
              <FaLock className='icon'/>
            </div>
            <div className="input-box">
              <input type="password" placeholder='Confirm Password' required />
              <FaLock className='icon'/>
            </div>
            <button type="submit">Sign Up</button>
          </>
        ) : (
          <>
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" placeholder='Username' required />
              <FaUser className='icon'/>
            </div>
            <div className="input-box">
              <input type="password" placeholder='Password' required />
              <FaLock className='icon'/>
            </div>
            <div className="remember-forgot">
              <label><input type="checkbox" />Remember me</label>
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit">Login</button>
          </>
        )}

        <div className="register-link">
          <p>
            {isSignup ? 
              `Already have an account? ` : 
              `Don't have an account? `}
            <a href="#" onClick={toggleForm}>
              {isSignup ? 'Login' : 'Register'}
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginSignup;
