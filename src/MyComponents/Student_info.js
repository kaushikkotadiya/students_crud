import React from 'react'

export const Student_info = ({student,onDelete}) => {
    return (
        <div>
        <h4>{student.Name}</h4>
        <p>{student.Desc}</p>
        <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(student)}}>
            Delete</button>
        </div>
    )  
}

