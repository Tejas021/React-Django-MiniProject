import React from 'react'
import Navbar from './Navbar'
const Login = () => {
    return (

      <div >
        <Navbar />
<h1
      style={{
        textAlign: 'center',
        
        marginTop: '10px',
        marginBottom: '0px'
      }}
    >
      Login
    </h1>


<div style={{marginTop: '40px'}} className="container login-container">
        <div className="row">
          <div className="col-md-6 login-form-1">
            <h3>Teachers</h3>
            <form method="post" action="loginTeacher">
          
              <div className="form-group my-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email *"
                  id="username"
                  name="username"
                />
              </div>
              <div className="form-group my-2">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Your Password *"
                  id="password"
                  name="password"
                />
              </div>
              <div className="form-group my-2">
                <input
                  type="submit"
                  className="btnSubmit"
                  value="Login"
                  id="submit1"
                />
              </div>
              <div className="form-group my-2">
                <a href="/" className="ForgetPwd">Forget Password?</a>
              </div>
            </form>
          </div>
          <div className="col-md-6 login-form-2 my-2">
            <h3>Students</h3>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email *"
                  id="username2"
                />
              </div>
              <div className="form-group my-2" >
                <input
                  type="password"
                  className="form-control"
                  placeholder="Your Password *"
                  id="password2"
                />
              </div>
              <div className="form-group my-2">
                <input
                  type="button"
                  className="btnSubmit"
                  value="Login"
                  id="submit2"
                />
              </div>
              <div className="form-group">
                <a href="/" className="ForgetPwd" value="Login">Forget Password?</a>
              </div>
            </form>
          </div>
        </div>
      </div>


      </div>
    )
}

export default Login
