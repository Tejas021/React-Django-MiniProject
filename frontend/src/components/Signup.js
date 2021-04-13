import React from 'react'
import TeacherSignUp from './TeacherSignUp'
import StudentSigUp from './StudentSigUp'
import {useState} from 'react'
const Signup = () => {
    const [toggler, settoggler] = useState(true)
    const [text,settext]=useState('SignUp as Student ?')


    const ChangeState=()=>{
        settoggler(!toggler)
        let text1=(toggler)?'SignUp as Teacher ?':'SignUp as Student ?'
    
        settext(text1)
    
    }
    

    return (
        <div>
           
            
            {(toggler)?<TeacherSignUp/>:<StudentSigUp/>}
            
            {/* <TeacherSignUp/>
            <StudentSigUp/> */}
             <button className='btn btn-outline-success mt-3' onClick={ChangeState}>{text}</button>
        </div>
    )
}

export default Signup

