import React from 'react'
import '../styles/signin.css'
const Login = () => {
  return (
    <div>
        <div className='container'>
       
        <div className='row'>
        <div className='col-5 content-container'>
                <div class='content-text'>
                     <span>Login here!</span>
                </div>
            </div>
            <div className='col-7 signin-container'>
                <h1>Log In<span class="dot">.</span></h1>
                <form className="mx-1 mx-md-4">
  
                    
  
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input type="email" id="form3Example3c" className="form-control" />
                        <label className="form-label" for="form3Example3c">Your Email</label>
                      </div>
                    </div>
  
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input type="password" id="form3Example4c" className="form-control" />
                        <label className="form-label" for="form3Example4c">Password</label>
                      </div>
                    </div>
  
                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="button" className="btn btn-primary btn-lg">Login</button>
                    </div>
  
                  </form>
  
            </div>
            
        </div>
        
    </div>
    </div>
  )
}

export default Login