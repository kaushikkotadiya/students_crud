import React, { useState } from "react";

export const AddStudents = ({ addStudent }) => {
  const [rollno, setRollno] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!rollno || !name || !desc) {
      alert("Please fill all Field");
    } else {
      addStudent(rollno, name, desc);
      setRollno("");
      setName("");
      setDesc("");
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="alert alert-success m-2" role="alert">
            Add a Student
          </div>
          <form onSubmit={submit}>
            <div className="mb-3">
              <label htmlFor="Studentrollno" className="form-label">
                Enter Student Rollno
              </label>
              <input
                type="text"
                className="form-control"
                id="rollno"
                aria-describedby="rollnouse"
                value={rollno}
                onChange={(e) => setRollno(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="studentsname" className="form-label">
                Enter Student Name
              </label>
              <input
                type="text"
                className="form-control"
                id="studentname"
                aria-describedby="studentsname"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Studentdesc" className="form-label">
                Enter Student Description
              </label>
              <input
                type="text"
                className="form-control"
                id="Studentdesc"
                aria-describedby="Studentdesc"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-success">
              Add Students
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
