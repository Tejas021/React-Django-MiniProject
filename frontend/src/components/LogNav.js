import React from 'react'
import {Redirect,Link} from 'react-router-dom'
import {useState} from 'react'
const LogNav = ({display_form}) => {
   const [move, setmove] = useState(false)
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        localStorage.removeItem('log')
        setmove(true)
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
              <Link
               
                className="nav-link"
                to="/"
              >
                Home
              </Link>
    </li>   
    <li className="nav-item mx-4" id="tej" onClick={(e)=>{e.preventDefault();display_form('login')}}>
      <a className="nav-link" href="/">SignIn</a>
    </li>
    <li className="nav-item mx-4" onClick={(e)=>{e.preventDefault();display_form('signup')}}>
      <a className="nav-link" href="/">SignUp</a>
    </li>
    
  </ul>
       
   )
   const logged_in_nav=(
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
              <Link
               
                className="nav-link"
                to="/"
              >
                Home
              </Link>
    </li>
   <li className="nav-item" id="tej" onClick={(e)=>{e.preventDefault();handleLogout()}}>
     <a className="nav-link" href="/">LogOut</a>
   </li>
   
 </ul>
 )
   
    return (
        <div>
           { !move?
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
    </nav>:
    <Redirect to='/'></Redirect>
    // <h1>adf</h1>
           }
        </div>
    )
}

export default LogNav
