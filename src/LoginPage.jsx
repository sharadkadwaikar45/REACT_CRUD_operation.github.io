import React, { useEffect, useState } from 'react'
import { Form, InputGroup, Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate ,useParams} from 'react-router-dom';
import './App.css';

export default function LoginPage() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [viewPass, setViewPass] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginData = { name, password };
    if(loginData.name === "Admin" &&  loginData.password === "12346" ){
        alert('Login successfully');
        navigate("/list");
    }else{
        alert('Unvalid user details');
        window.location.reload();
    }

//     fetch("http://localhost:8000/students/"+studentId, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(studentData),
//     })
//       .then((res) => {
//         res.json();
//         alert('Student data updated successfully');
//         navigate("/")
//   })
//       .then((data) => console.log("Saved:", data))
//       .catch((err) => console.error(err));
  };

  return (
    <div className="container mt-4">
      <Card className="col-md-5 mx-auto shadow" style={{ width: "40%" }}>
        <Card.Body>
          <Card.Title className="text-center align-content-center heading">
            Login
          </Card.Title>
          <form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name<span className='text-danger'>*</span> </Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password<span className='text-danger'>*</span></Form.Label>
              <div className="d-flex align-items-center">
                <Form.Control
                  type={viewPass ? "text" : "password"} 
                  name="password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex-grow-1"
                />
                <Link
                  onClick={() => setViewPass(!viewPass)}
                  className="ms-2  rounded"
                  style={{ cursor: "pointer" }}
                >
                  <i
                    className={`fa ${
                      viewPass ? "fa-eye-slash" : "fa-eye"
                    } text-primary`}
                  ></i>
                </Link>
              </div>
            </Form.Group>

            <div className="d-flex mt-4 justify-content-start">
              <button className="btn btn-primary me-2"> Login</button>
            </div>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
}
