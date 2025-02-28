import React, { useEffect, useState } from 'react'
import { Form, InputGroup, Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

export default function CreateStudent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [place, setPlace] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const studentData = {  name, email, phone, place };

    fetch("http://localhost:8000/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(studentData),
    })
      .then((res) => {
        res.json();
        alert('Student data saved successfully');
        navigate("/")
  })
      .then((data) => console.log("Saved:", data))
      .catch((err) => console.error(err));
  };
  return (
    <div className="container mt-4">
      <Card className="col-md-5 mx-auto shadow" style={{ width: "60%" }}>
        <Card.Body>
          <Card.Title className="text-center align-content-center heading">Create Student</Card.Title>
          <form onSubmit={handleSubmit}>

            <Form.Group className="mb-3">
              <Form.Label>Name </Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
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
              <Form.Label>Phone </Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={phone}
                required
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>

            <Form.Label>Place </Form.Label>
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
              <button className="btn btn-primary me-2"> Save</button>
              <Link className="btn btn-danger" to="/">
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
