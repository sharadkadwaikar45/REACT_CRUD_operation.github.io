import React, { useEffect, useState } from 'react'
import { Form, InputGroup, Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate ,useParams} from 'react-router-dom';
import './App.css';

export default function EditStudent() {
  const { studentId } = useParams();
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [place, setPlace] = useState('');
  const navigate = useNavigate();

  useEffect(()=>{
    fetch('http://localhost:8000/students/'+studentId)
    .then((res)=>res.json())
    .then((data)=>{

      setId(data.id)
      setName(data.name)
      setEmail(data.email)
      setPhone(data.phone)
      setPlace(data.place)
    }).catch((err)=>{
      console.log(err.message)
    })
  },[])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const studentData = { name, email, phone, place };

    fetch("http://localhost:8000/students/"+studentId, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(studentData),
    })
      .then((res) => {
        res.json();
        alert('Student data updated successfully');
        navigate("/list")
  })
      .then((data) => console.log("Saved:", data))
      .catch((err) => console.error(err));
  };

  
  return (
    <div className="container mt-4">
      <Card className="col-md-5 mx-auto shadow" style={{ width: "60%" }}>
        <Card.Body>
          <Card.Title className="text-center align-content-center heading">
            Edit Student Details
          </Card.Title>
          <form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name<span className='text-danger'>*</span></Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email<span className='text-danger'>*</span></Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="name@example.com"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone<span className='text-danger'>*</span> </Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={phone}
                required
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>

            <Form.Label>Place<span className='text-danger'>*</span> </Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="place"
              value={place}
              required
              onChange={(e) => setPlace(e.target.value)}
            >
              <option>Open this select menu</option>
              <option value="Chakan">Chakan</option>
              <option value="Pune">Pune</option>
              <option value="Bhosari">Bhosari</option>
            </Form.Select>

            <div className="d-flex mt-4 justify-content-start">
              <button className="btn btn-primary me-2"> Update</button>
              <Link className="btn btn-danger" to="/list">
                {" "}
                Back
              </Link>
            </div>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
}
