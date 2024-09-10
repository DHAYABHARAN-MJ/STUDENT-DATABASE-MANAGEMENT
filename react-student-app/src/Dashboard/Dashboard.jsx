import React, { useState } from "react";
import { useEffect } from "react";
import '../Dashboard/Dashboard.css';
import searchIcon from '../assets/images/search.png';
import filtericon from'../assets/images/filterstudents.png';
import { Navigate,useNavigate } from "react-router-dom";

const Dashboard = ({isOpen}) => {
    const [isopen, setIsopen] = useState(false);
    const [fd,setfd]=useState('');
    const toggleopen=()=>
        {
            setIsopen(!isopen);
        }
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('http://localhost:8081/sbdtable')
        .then(res=>res.json())
        .then(data=>setData(data))
        .catch(err=>console.log(err))
    },[])
    const onyear=()=>
        {
            fetch('http://localhost:8081/year')
            .then(res=>res.json())
            .then(data=>setData(data))
            .catch(err=>console.log(err))
            toggleopen();
        }
    const onps=()=>
        {
                fetch('http://localhost:8081/ps')
                .then(res=>res.json())
                .then(data=>setData(data))
                .catch(err=>console.log(err))
                toggleopen();
        }
    const onname=()=>
        {
                fetch('http://localhost:8081/name')
                .then(res=>res.json()).then(data=>setData(data)).catch(err=>console.log(err))
                toggleopen();
        }
    const searchQuery=(e)=>
        {
            setfd(e.target.value);
        }
        const filterData=data.filter(item=>
            item.name.toLowerCase().includes(fd.toLowerCase())||
            item.rollno.includes(fd.toLowerCase())||
            item.bmail.toLowerCase().includes(fd.toLowerCase())||
            item.year.toString().includes(fd.toLowerCase())||
            item.pslevel.toString().includes(fd.toLowerCase())
        
        ) 
        return (
        <div className="container-dashboard flex max-w-screen-lg">
            <div className={`Content flex-1 p-10 transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-0'} bg-blue-20 relative`}>
                
                <div className="search-bar h-5 flex items-center">
                    <input type="search" value={fd} onChange={searchQuery} className="sb w-full shadow rounded border-none focus:outline-none px-2 py-1" placeholder="  Search"/>
                    <div className="filter-icon">
                            <button onClick={toggleopen} class="text-black hover:bg-blue-100 focus:ring-2 focus:outline-none font-extrabold rounded-full px-3 py-2.5 text-center inline-flex items-center" type="button">
                                <img className="w-7 h-7" src={filtericon} alt="" />
                            </button>
                    <div id="dropdown" class={` bg-white divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute mt-2 transition-all duration-300 ease-in-out ${isopen?'max-h-96 opacity-100':'max-h-0 opacity-0'}`}>
                                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                <li>
                                    <a class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={onname}>Name</a>
                                </li>
                                <li>
                                    <a class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600" onClick={onyear}>Year</a>
                                </li>
                                <li>
                                    <a class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={onps}>Ps</a>
                                </li>
                                </ul>
                    </div> 
                    </div>

                </div>
                <div className="studentDB space-y-2 bg-transparent w-full  h-80 text-black p-10 outline-none">
                    <table className="table-auto border-collapse w-full text-center border shadow-2xl rounded-2xl space-y-2">
                        <thead className="w-full border rounded-sm bg-blue-100">
                            <tr>
                                <th className="RollNo border border-gray-950 px-4 py-2 ">Roll No</th>
                                <th className="Name border border-gray-950 px-4 py-2">Name</th>
                                <th className="Bmail border border-gray-950 px-4 py-2">Bmail</th>
                                <th className="PS Level border border-gray-950 px-4 py-2">PS level</th>
                                <th className="Year border border-gray-950 px-4 py-2">Year</th>

                            </tr>
                        </thead>
                        <tbody>
                            {filterData.map((d,i)=>(
                                <tr key={i}>
                                    <td className="border border-gray-950 px-4 py-2">{d.rollno}</td>
                                    <td className="border border-gray-950 px-4 py-2">{d.name}</td>
                                    <td className="border border-gray-950 px-4 py-2">{d.bmail}</td>
                                    <td className="border border-gray-950 px-4 py-2">{d.pslevel}</td>
                                    <td className="border border-gray-950 px-4 py-2">{d.year}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

             </div>
            </div>
        </div>
    );
};

export default Dashboard;
