import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const SideBar=({isOpen,toggle})=>
  {
    const history=useNavigate();
    const onstudent=()=>
        {
            history('/StudentAdd');
        }
return (    
<div className="container">
  <div
      className={`bg-blue-100 w-64 min-h-screen p-6 fixed top-0 left-0 transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
  >
      <ul className="space-y-5 space-x-1">
          <li>
              <a href="#home" className="home hover:bg-blue-200 p-2 rounded block shadow rounded">Home</a>
          </li>
          <li>
              <a onClick={onstudent} className="about hover:bg-blue-200 p-2 rounded block shadow rounded">Student</a>
          </li>
          <li>
              <a className="services hover:bg-blue-200 p-2 rounded block shadow rounded">Ps</a>
          </li>
          <li>
              <a href="#contact" className="contact hover:bg-blue-200 p-2 rounded block shadow rounded">Ptac</a>
          </li>
      </ul>
  </div>
  <div className="sidebarbtn absolute top-0 left-0 cursor-pointer z-10" onClick={toggle}>
    ☰
     </div>
</div>
)
  }
export default SideBar;