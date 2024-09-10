import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/Login/Login'; 
import Dashboard from './Dashboard/Dashboard';
import StudentAdd from './StudentAdd/StudentAdd';
import SideBar from './SideBar/SideBar';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css'; // Assuming you have a CSS file for your App styles

const App = () => {
  const CLIENT_ID = '238970835426-f88bu0tpphgd6cc8rkfrq70sdea6qcb7.apps.googleusercontent.com';
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <Router>
        <div className="App">
          <SideBar/>
          <div className="main-content">
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/Dashboard' element={<Dashboard isOpen={isOpen} />} />
              <Route path='/StudentAdd' element={<StudentAdd />} />
            </Routes>
          </div>
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;
