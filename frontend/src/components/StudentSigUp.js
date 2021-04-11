import './new.css'
const StudentSigUp = () => {
    return (
  
            <div className="container bg-dark p-5 mt-5">
        <form>
            <div className="formContainer ">
            <h1 className='text-light'>Student Sign Up </h1>

            <hr/>

            <div><input type="text" placeholder="Enter Username" name="username" required className='input'/></div>
            <div><input type="text" placeholder="Enter Email" name="email" required className='input'/></div>
            <div><input type="password" placeholder="Enter Password" name="password" required className='input'/></div>
            <div><input type="password" placeholder="Repeat Password" name="repeatPassword"
            required className='input'/></div>
     
            <p className="text-light">By creating an account you agree to our <a href="/"
            style={{color:"dodgerblue"}}>Terms & Privacy</a></p>
            <div>
            <button type="submit"  className=' signup button'>Sign Up</button>
            </div>
            </div>
            </form>
     
    </div>
        
    )
}

export default StudentSigUp
