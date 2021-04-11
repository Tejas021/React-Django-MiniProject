import React from "react";
import Navbar from "../Navbar";
import TeacherTable from "./TeacherTable";
import SortedTable from './SortedTable'
import AddForm from './AddFormTeach'
import {useState,useEffect} from 'react'
const TeacherUI = () => {
  const [displayForm, setdisplayForm] = useState(false)
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
      const data = await fetch('http://localhost:8000/api/teachertable/').then((res)=>res.json())
      return data
    }

    
    const getSortList= async()=>{
      const sortlist= fetch('http://localhost:8000/api/sort').then((res)=>res.json())
      return sortlist
  }



const addFormThere=()=>{setdisplayForm(!displayForm)}

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

 

  return (
    <div>
      <Navbar />
    
      <h1 className="Title" style={{textAlign:'left'}}>Welcome To StudEval</h1>

      <br />
      {displayForm&&<AddForm onAdd={addStudent}/>}
<h3 style={{marginLeft: '20px',textAlign:'left'}}>Your Student Records:</h3>
      <br />
    
      <TeacherTable marks={student} renderForm={addFormThere} addForm={displayForm}/>

      <SortedTable sortList={sortList}/>
    </div>
  );
};
export default TeacherUI;
