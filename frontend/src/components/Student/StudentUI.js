import {useState,useEffect} from 'react'
// import Navbar from '../Navbar'
import LogNav from '../LogNav'
import StudentTable from './StudentTable'
import Evaluation from './Evaluation'
import AddForm from './AddForm'
const StudentUI = () => {
const [displayForm, setdisplayForm] = useState(false)
    const [subject, setsubject] = useState([])

    useEffect(() => {
        const getSubject= async()=>{
            const subjects=await fecthSubject()
            setsubject(subjects)
        }   
    getSubject()
    }, [])
    

    const fecthSubject = async()=>{
        const data =fetch('http://localhost:8000/api/studenttable').then((res)=>res.json())
        return data
    }

    const addNewSubject = async(sub)=>{
        const res =await fetch('http://localhost:8000/api/studenttable/',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(sub)
        })
        const data=await res.json()
       
        setsubject([...subject,data])
    }

    const toggler=(e)=>{
        setdisplayForm(!displayForm)
    }

    let result=2
    return (
        <div>
            <LogNav/>
            <h1 className="Title" style={{textAlign:'left'}}>Welcome To StudEval</h1>

<br/>

            <h3 style={{margin:'20px',textAlign:'left'}}>Your Records</h3>
<br/>
            
            {displayForm&&<AddForm onAdd={addNewSubject}/>}

            <StudentTable subject={subject} add={toggler} showAdd={displayForm} />
            <Evaluation result={result}/>
        </div>
    )

    }
export default StudentUI