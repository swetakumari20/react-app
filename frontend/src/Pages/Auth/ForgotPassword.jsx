import React from 'react'
import { FaKey } from "react-icons/fa";
const ForgotPassword = () => {
  return (
  <>

       <div className="forgot-container">
      <form className="forgot-form">
        <div className='key-container'>
      <FaKey className='key' />
      </div>
        <h2>Forgot Password</h2>
        <label className="forgot-text">Old Password</label>
        <input
          className="signup-input-box"
          type="password"
          placeholder="Enter Email"
          
          
          
        />

        <label className="forgot-text">New Password</label>
        <input
          className="signup-input-box"
          type="password"
          placeholder="Enter Password"
            
          
        />

<label className="forgot-text">Confirm Password</label>
        <input
          className="signup-input-box"
          type="password"
          placeholder="Enter Password"
        />
<div className='btn-container'>
<button type="submit" className='cancel'>
 Cancel
  </button>
  <button type="submit" className="continue">
 Continue
  </button>
        
</div>
        

     
      </form>
    </div>
    </>
  )
}

export default ForgotPassword