import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css';
import { Link } from 'react-router-dom';

export default function ViewStudent() {
  const { studentId } = useParams();
  const [studentData, setStudentData] = useState({})
  useEffect(()=>{
    fetch('http://localhost:8000/students/'+studentId)
    .then((res)=>res.json())
    .then((data)=>{
      setStudentData(data)
    }).catch((err)=>{
      console.log(err.message)
    })
  },[])
  return (
    <div className="container mt-4">
      <Card className="col-md-5 mx-auto shadow" style={{ width: "60%" }}>
        <Card.Body>
          <Card.Title className="text-center align-content-center heading">Student Details</Card.Title>
          { studentData && <div>
            <p><strong>Name : </strong>{studentData.name}</p>
            <p><strong>Email : </strong>{studentData.email}</p>
            <p><strong>Phone : </strong>{studentData.phone}</p>
            <p><strong>Place : </strong>{studentData.place}</p>
          </div>}
          <div className="d-flex mt-4 justify-content-start">
          <Link className="btn btn-primary me-2" to={`/student/edit/${studentId}`}>
                Edit
              </Link>
              <Link className="btn btn-danger" to="/list">
                Back
              </Link>
            </div>
        </Card.Body>
      </Card>
    </div>
  );
}
