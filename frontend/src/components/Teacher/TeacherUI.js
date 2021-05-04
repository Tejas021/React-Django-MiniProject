import React from "react";
// import Navbar from "../Navbar";
import TeacherTable from "./TeacherTable";
import SortedTable from './SortedTable'
import AddForm from './AddFormTeach'
import EditForm from './EditForm'
import PieChart from './PieChart'
import DeleteForm from './DeleteForm'
import LogNav from '../LogNav'
import {useState,useEffect} from 'react'
const TeacherUI = () => {
  const [displayForm, setdisplayForm] = useState(false)
  const [updateForm, setupdateForm] = useState(false)
  const [deleteForm, setdeleteForm] = useState(false)
  const [student, setStudent] = useState([])
  const [sortList, setsortList] = useState([])
 
  useEffect(() => {
    
      const getMarks = async () => {
        const tasksFromServer = await fetchStudents()
        setStudent(tasksFromServer)
      }
      getMarks()

      const fetchSorted=async()=>{
        const sorted= await getSortList()
        setsortList(sorted)
    }
      fetchSorted()

    }, [])

    const fetchStudents = async () => {
      
      const data =await fetch('http://localhost:8000/api/teacher?owner='+localStorage.getItem('id')).then((res)=>res.json())
      return data
    }

    
    const getSortList= async()=>{
      const sortlist=await fetch('http://localhost:8000/api/sort?owner='+localStorage.getItem('id')).then((res)=>res.json())
      return sortlist
  }



const addFormThere=()=>{setdisplayForm(!displayForm)}
const EditFormThere=()=>{setupdateForm(!updateForm)}
const DeleteFormThere=()=>{console.log("delete");setdeleteForm(!deleteForm)}

const addStudent=async (newstudent)=>{
  const res= await fetch('http://localhost:8000/api/teachertable/',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(newstudent)

  })
  const data = await res.json()
  console.log(student)
  setStudent([...student,data])
  const fetchSorted=async()=>{
    const sorted= await getSortList()
    setsortList(sorted)
}
  fetchSorted()
}

 
const deleteStudent=(studentId)=>{

 fetch('http://localhost:8000/api/teachertable/'+studentId, { method: 'DELETE' })
//  const getMarks = async () => {
//   const tasksFromServer = await fetchStudents()
//   setStudent(tasksFromServer)
// }
  //getMarks()
}

const updateStudent=()=>{

}

  return (
    <div>
      <LogNav/>
    
      <h1 className="Title" style={{textAlign:'left'}}>Welcome To StudEval</h1>

      <h3 style={{marginLeft: '20px',textAlign:'left'}}>Your Student Records:</h3>
      <br />

      <br />
      {displayForm&&<AddForm onAdd={addStudent}/>}
      {updateForm&&<EditForm onUpdate={updateStudent}/>}
      {deleteForm&&<DeleteForm onDelete={deleteStudent}/>}
      

    
      <TeacherTable marks={student} renderForm={addFormThere} addForm={displayForm} updateForm={updateForm} EditFormThere={EditFormThere} DeleteFormThere={DeleteFormThere} deleteForm={deleteForm}/>
{/* {console.log(owner)} */}
      <SortedTable sortList={sortList}/>
      <PieChart sortList={sortList}/>
    </div>
  );
};
export default TeacherUI;
