import React from 'react'
import {Link,useHistory} from 'react-router-dom'
const LogNav = ({display_form}) => {
  const history = useHistory();
   
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        localStorage.removeItem('log');
        history.push('/')
    };



   const logged_out_nav=(
    <ul className="navbar-nav ms-auto">
    <li className="nav-item mx-4">
              <Link
               
                className="nav-link"
                to="/about"
              >
                About
              </Link>
    </li>
    <li className="nav-item mx-4">
          
              <a className="nav-link" onClick={() => history.push('/')} >Home</a>
    </li>   
    <li className="nav-item mx-4" id="tej" onClick={(e)=>{e.preventDefault();display_form('login')}}>
      <a className="nav-link">SignIn</a>
    </li>
    <li className="nav-item mx-4" onClick={(e)=>{e.preventDefault();display_form('signup')}}>
      <a className="nav-link" >SignUp</a>
    </li>
    
  </ul>
       
   )
   const logged_in_nav=(
   <ul className="navbar-nav ms-auto">       
   <li className="nav-item mx-4">
              
   <a className="nav-link" onClick={() => history.push('/about')} >About</a>
              
    </li>
    <li className="nav-item mx-4">
    <a className="nav-link" onClick={() => history.push('/')} >Home</a>
              
    </li>
   <li className="nav-item mx-4" id="tej" onClick={(e)=>{e.preventDefault();handleLogout()}}>
     <a className="nav-link" >LogOut</a>
   </li>
   
 </ul>
 )
   
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
      <a className="mx-3 navbar-brand" href="/"><h3>StudEval</h3></a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        {localStorage.getItem('log')?logged_in_nav:logged_out_nav}
          
   
 
      </div>
    </nav>
        </div>
    )
}

export default LogNav
