import React, { useState } from "react";
import '../Dashboard/Dashboard.css';
import searchIcon from '../assets/images/search.png';

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(true);
    
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="container-dashboard flex">
            <div
                className={`bg-blue-100 w-64 min-h-screen p-6 fixed top-0 left-0 transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <ul className="space-y-5 space-x-1">
                    <li>
                        <a href="#home" className="home hover:bg-blue-200 p-2 rounded block shadow rounded">Home</a>
                    </li>
                    <li>
                        <a href="#about" className="about hover:bg-blue-200 p-2 rounded block shadow rounded">Student</a>
                    </li>
                    <li>
                        <a href="#services" className="services hover:bg-blue-200 p-2 rounded block shadow rounded">Ps</a>
                    </li>
                    <li>
                        <a href="#contact" className="contact hover:bg-blue-200 p-2 rounded block shadow rounded">Ptac</a>
                    </li>
                </ul>
            </div>

            <div className={`Content flex-1 p-10 transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-0'} bg-blue-20 relative`}>
                <div className="sidebarbtn absolute top-0 left-0 cursor-pointer z-10" onClick={toggle}>
                    ☰
                </div>
                <div className="search-bar h-5 flex items-center">
                    <input type="search" className="sb w-full shadow rounded border-none focus:outline-none px-2 py-1" placeholder="  Search"/>
                    <div className="search-icon ml-2 mx-2 cursor-pointer">
                    <img className="w-5 h-5 outline-none text-white" src={searchIcon} alt="" />
                    </div>
    
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
