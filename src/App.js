import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import StudentTable from './StudentTable';
import CreateStudent from './CreateStudent';
import EditStudent from './EditStudent';
import ViewStudent from './ViewStudent';
import 'bootstrap/dist/css/bootstrap.min.css';
import "font-awesome/css/font-awesome.min.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentTable />}></Route>
        <Route path="/student/create" element={<CreateStudent />}></Route>
        <Route path="/student/edit/:studentId" element={<EditStudent />}></Route>
        <Route path="/student/view/:studentId" element={<ViewStudent />}></Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
