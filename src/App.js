import './App.css';
import { Main } from './Components/Main';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import StudentLogin from './Components/StudentLogin';
import AdminLogin from './Components/AdminLogin';
import RegisterStudent from './Components/RegisterStudent';
import Header from './Components/Header';

function App() {



  const loginStudent = (email, pass) => {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        pass: pass
      })
    };
    fetch('/portal/login', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.studentId) {
          alert("Welcome " + data.studentName);
        } else {
          alert("Username/Password not correct");
        }
      });


  }
  const loginAdmin = (name, pass) => {
  }

  const registerStudent = (student) => {
  }

  return (
    <Router>
      <Header title="Online Exam Portal" searchBar={false}/>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/student-login' element={<StudentLogin loginStudent={loginStudent} />} />
        <Route path='/admin-login' element={<AdminLogin loginAdmin={loginAdmin} />} />
        <Route path='/register-student' element={<RegisterStudent registerStudent={registerStudent} />} />
      </Routes>
    </Router>
  );
}

export default App;
