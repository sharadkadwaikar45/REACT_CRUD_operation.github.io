import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

export default function StudentTable() {
const [students, setStudents]= useState('')
const navigate = useNavigate();

  useEffect(()=>{
    fetch('http://localhost:8000/students')
    .then((res)=>res.json())
    .then((data)=>{
      setStudents(data)
    }).catch((err)=>{
      console.log(err.message)
    })
  },[])

  const removeData = (id)=>{
    if(window.confirm("Are you sure to remove student data ?")){
      fetch("http://localhost:8000/students/"+id, {
        method: "DELETE",
      })
        .then((res) => {
          res.json();
          alert('Student data removed successfully');
          window.location.reload();
    })
    }
  }

  const logOut =()=>{
    if(window.confirm("Are you sure to logout ?")){
      navigate("/");
    }
  }
  return (

    // json-server --watch db.json --port 8000    use this command to get table data


    <div className="container mt-4">
      <Card className="col-md-5 mx-auto shadow" style={{ width: "80%" }}>
        <Card.Body>
          <Card.Title className="text-center align-content-center heading">
            Students List
          </Card.Title>
          <div className="d-flex justify-content-end">
            <Link className="btn btn-primary me-2" to="/student/create/">
              Add Student
            </Link>
            <button className="btn btn-danger" onClick={logOut}>
              Logout
            </button>
          </div>
          <div className="table-responsive mt-4">
            <Table className="table table-bordered">
              <thead>
                <tr className="ttt">
                  <th>Sr. No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Place</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {students &&
                  students.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.place}</td>
                      <td className="align-middle">
                        <div className="d-flex justify-content-center gap-2">
                          <Link to={`/student/view/${item.id}`}>
                            <i className="fa fa-eye"></i>
                          </Link>
                          <Link to={`/student/edit/${item.id}`}>
                            <i className="fa fa-pencil text-warning"></i>
                          </Link>
                          <Link onClick={() => removeData(item.id)}>
                            <i className="fa fa-trash text-danger"></i>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
