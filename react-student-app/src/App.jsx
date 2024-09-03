import React from 'react';
// import { Route,Routes,useLocation,Router } from 'react-router-dom';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Login from '../src/Login/Login'; // Adjust the path as necessary
import Dashboard from './Dashboard/Dashboard';
// import { SidebarWithBurgerMenu } from './SideBar/SideBar';
import { GoogleOAuthProvider } from '@react-oauth/google';
const App = () => {
  // const location=useLocation();
  const CLIENT_ID='238970835426-f88bu0tpphgd6cc8rkfrq70sdea6qcb7.apps.googleusercontent.com';
  return (
<GoogleOAuthProvider clientId={CLIENT_ID}>
    <Router>
      <div className="App">
        {/* <Login /> */}
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/Dashboard' element={<Dashboard />}/>
          <Route path='/SidebarWithBurgerMenu' element={<SidebarWithBurgerMenu />}/>
        </Routes>
      </div>
    </Router>
    </GoogleOAuthProvider>
  );
};

export default App;