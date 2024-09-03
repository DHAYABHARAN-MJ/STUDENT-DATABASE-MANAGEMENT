import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Login from '../src/Login/Login'; 
import Dashboard from './Dashboard/Dashboard';
import { GoogleOAuthProvider } from '@react-oauth/google';
const App = () => {
  const CLIENT_ID='238970835426-f88bu0tpphgd6cc8rkfrq70sdea6qcb7.apps.googleusercontent.com';
  return (
<GoogleOAuthProvider clientId={CLIENT_ID}>
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/Dashboard' element={<Dashboard />}/>
        </Routes>
      </div>
    </Router>
    </GoogleOAuthProvider>
  );
};

export default App;