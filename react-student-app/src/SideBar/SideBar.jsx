import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import menu from '../assets/images/menu.png';
const SideBar=({isOpen,toggle})=>
  {
    const history=useNavigate();
    const onstudent=()=>
        {
            history('/StudentAdd');
        }
    const onHome=()=>
        {
            history('/Dashboard');
        }
    const onSp=()=>
        {
            history('/StudentPerformance');
        }
return (    
<div className="container">
  <div
      className={`bg-slate-50 w-64 min-h-screen p-6 fixed top-0 left-0 transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
  >
      <ul className="space-y-5 space-x-1 mt-4 mr-5">
          <li>
              <a onClick={onHome} className="home hover:bg-slate-100 p-2 rounded block shadow rounded">Home</a>
          </li>
          <li>
              <a onClick={onstudent} className="about hover:bg-slate-100 p-2 rounded block shadow rounded">Student</a>
          </li>
          <li>
              <a className="hover:bg-slate-100 p-2 rounded block shadow rounded">Ps</a>
          </li>
          <li>
              <a  onClick={onSp} className="hover:bg-slate-100 p-2 rounded block shadow rounded">Ptac</a>
          </li>
      </ul>
  </div>
  <div className="sidebarbtn absolute top-0 left-0 cursor-pointer z-10" onClick={toggle}>
    <img src={menu} className='w-7 h-7 mx-2 mt-2' alt="" />
     </div>
</div>
)
  }
export default SideBar;