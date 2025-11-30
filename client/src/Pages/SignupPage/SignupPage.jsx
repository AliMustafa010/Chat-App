import React from 'react'
import "./SignupPage.css"
import { Link } from 'react-router-dom'

const SignupPage = () => {
  return (
    <div className='signup-page-container'>
        <div className='signup-page'>
          <div className="signup-page-head">
            Register
          </div>
          <div className='signup-page-username'>
            <label>Username</label>
            <input type={'text'} />
          </div>
          <div className='signup-page-email'>
            <label>Email</label>
            <input type={"email"} />
          </div>
          <div className='signup-page-password'>
            <label>Password</label>
            <input type={'password'} />
          </div>
          <div className='signup-page-tel'>
            <label>Phone</label>
            <input type={"tel"} />
          </div>
          <div className='signup-page-button'>
            <button onClick={() => {console.log("Clicked")}}>Register</button>
          </div>
          <div className="signup-page-already">
            Already Subscribed ? 
            <Link className='signup-page-already-register' to="/login"> Login </Link>
          </div>
        </div>
    </div>
  )
}

export default SignupPage