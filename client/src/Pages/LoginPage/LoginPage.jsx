import React from 'react'
import "./LoginPage.css"
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className='login-page-container'>
        <div className='login-page'>
          <div className="login-page-head">
            Login
          </div>
          <div className='login-page-email'>
            <label>Email</label>
            <input type={"email"} />
          </div>
          <div className='login-page-password'>
            <label>Password</label>
            <input type={'password'} />
          </div>
          <div className='login-page-button'>
             <Link to="/" style={{textDecoration : "none"}}>
               <button className='login-page-button-element'>Login</button>
             </Link>
          </div>
          <div className="login-page-not">
            Not Subscribed ? 
            <Link className='login-page-not-register' to="/signup"> Regsiter </Link>
          </div>
        </div>
    </div>
  )
}

export default LoginPage