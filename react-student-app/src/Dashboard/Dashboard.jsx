import React, { useState } from "react";
import '../Dashboard/Dashboard.css';

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(true);
    
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="container-dashboard flex">
            <div
                className={`bg-blue-100 text-stone-500 w-64 min-h-screen p-4 fixed top-0 left-0 transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <ul className="space-y-5">
                    <li>
                        <a href="#home" className="home hover:bg-blue-200 p-2 rounded block shadow rounded">Home</a>
                    </li>
                    <li>
                        <a href="#about" className="about hover:bg-blue-200 p-2 rounded block shadow rounded">About</a>
                    </li>
                    <li>
                        <a href="#services" className="services hover:bg-blue-200 p-2 rounded block shadow rounded">Services</a>
                    </li>
                    <li>
                        <a href="#contact" className="contact hover:bg-blue-200 p-2 rounded block shadow rounded">Contact</a>
                    </li>
                </ul>
            </div>

            <div className={` flex-1 p-10 transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-0'} bg-blue-20 relative`}>
                <div className="sidebarbtn absolute top-0 left-0 cursor-pointer z-10" onClick={toggle}>
                    ☰
                </div>
                <h1 className="text-3xl font-bold">Welcome to My Dashboard</h1>
            </div>
        </div>
    );
};

export default Dashboard;
