import React from 'react';
// import { Route,Routes,useLocation,Router } from 'react-router-dom';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Login from '../src/Login/Login'; // Adjust the path as necessary
import Dashboard from './Dashboard/Dashboard';
const App = () => {
  // const location=useLocation();
  
  return (
    <Router>
      <div className="App">
        {/* <Login /> */}
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/Dashboard' element={<Dashboard />}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;