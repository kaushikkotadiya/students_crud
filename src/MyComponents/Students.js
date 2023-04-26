import React from 'react'
import {Student_info} from "./Student_info";

export const Students = (props) => {
    return (
        <div className="container">
        <h3> Students List : </h3>
        {props.students.length ===0?'No Student recod found!' :
        props.students.map((student)=>{
            return <Student_info student={student} key={student.rollno} onDelete={props.onDelete}/>
        })}
        
        </div>
    )
}