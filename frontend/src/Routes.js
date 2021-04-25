import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // Redirect,
} from "react-router-dom";



import Login from './components/Login'
import About from './components/About'
import StudentUI from './components/Student/StudentUI'
import TeacherUI from './components/Teacher/TeacherUI'
import StudentSigUp from './components/StudentSigUp';
import TeacherSignup from './components/TeacherSignUp'
import Loginer from './components/Loginer';
const Routes = () => {
    return (
        <div>
            <Router>

<Switch>

{/* <Route exact path='/' component={StudentSigUp}></Route> */}
<Route path='/signup' component={StudentSigUp}></Route>
<Route path='/signupteach' component={TeacherSignup}></Route>
<Route path='/student' component={StudentUI}></Route>
 <Route path='/teacher' component={TeacherUI}></Route>
 <Route path='/login' component={Login}></Route>
 <Route exact path='/' component={Loginer}></Route>
 <Route path= '/about' component ={About}></Route>
 </Switch>


</Router>
        </div>
    )
}

export default Routes
