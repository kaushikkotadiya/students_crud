import "./App.css";
import "./MyComponents/style.css";

import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Students } from "./MyComponents/Students";
import { AddStudents } from "./MyComponents/AddStudents";
import { About } from "./MyComponents/About";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import React, { useState, useEffect } from "react";
function App() {
  let initStudent;
  if (localStorage.getItem("students") === null) {
    initStudent = [];
  } else {
    initStudent = JSON.parse(localStorage.getItem("students"));
  }
  const onDelete = (student) => {
    setStudent(
      students.filter((e) => {
        return e !== student;
      })
    );
  };
  const addStudent = (rollno, name, desc) => {
    console.log("I am add the students", rollno, name, desc);
    const mystudents = {
      rollno: rollno,
      Name: name,
      Desc: desc,
    };
    console.log(mystudents);
    setStudent([...students, mystudents]);
  };
  const [students, setStudent] = useState(initStudent);
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);
  return (
    <>
      <Router>
        <Header title="Students_Crud" />
        <Switch>
          <Route exact path="/" render={() => {
              return (
                <>
                  <AddStudents addStudent={addStudent} key={students.rollno} />
                  <Students students={students} onDelete={onDelete} />
                </>
              );
            }}
          ></Route>
          <Route exact path="about">
            <About/>
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}
export default App;
