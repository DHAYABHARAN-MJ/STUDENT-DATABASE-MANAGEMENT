import React from "react";
import { useEffect,useState } from "react";
const StudentAdd=({isOpen})=>{
    const [student,setStudent]=useState({
        rollno:'', name:'', bmail:'', pslevel:'',year:'',cgpa:'',lab:'',pr:'',fr:''
    });
    const Valchange=(e)=>{
        setStudent({...student,[e.target.name]:e.target.value});
        console.log(e.target.value);
    }
    const addStudent=async()=>
        {
    try
    {    const res=await fetch('http://localhost:8081/addStudent',
            {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(student)
            }
        );
        const data=await res.json();
        console.log(data);
        if(res.ok){alert('Successfylly Added');
            setStudent({rollno: '', name: '', bmail: '', pslevel: '', year: '', cgpa: '', lab: '', pr: '', fr: ''});
        }
        else{
            alert('ERROR'+data.error);
            console.log(data.error);
        }
    }
        catch(error){
            console.log(error);
            alert("Catch Error(while submitting data)");
        }
            
        }
return(
    <div className={`student space-y-7 p-16 flex-1 max-w-full outline-none transition-all duration-300 ${isOpen?'ml-64':'ml-0'}`}>
        <input type="text" onChange={Valchange} value={student.name} name="name" placeholder ="  Name" className="outline-none text-black w-full border rounded-full shadow-md h-8" />
        <input type="text" onChange={Valchange} value={student.rollno} name="rollno" placeholder ="  RollNo" className="outline-none text-black bg-white shadow-md rounded-full w-full h-8" />
        <input type="text" onChange={Valchange} value={student.bmail} name="bmail" placeholder ="  Bmail" className="outline-none text-black bg-white shadow-md rounded-full w-full h-8" />
        <input type="text" onChange={Valchange} value={student.year} name="year" placeholder ="  Year" className="outline-none text-black bg-white shadow-md rounded-full w-full h-8" />
        <input type="text" onChange={Valchange} value={student.cgpa} name="cgpa" placeholder ="  CGPA" className="outline-none text-black bg-white shadow-md rounded-full w-full h-8" />
        <input type="text" onChange={Valchange} value={student.lab} name="lab" placeholder ="  Lab" className="outline-none text-black bg-white shadow-md rounded-full w-full h-8" />
        <input type="text" onChange={Valchange} value={student.pr} name="pr" placeholder ="  Placement Rank" className="outline-none text-black bg-white shadow-md rounded-full w-full h-8" />
        <input type="text" onChange={Valchange} value={student.fr} name="fr" placeholder ="  FullStack Rank" className="outline-none text-black bg-white shadow-md rounded-full w-full h-8" />
        <input type="text" onChange={Valchange} value={student.pslevel} name="pslevel" placeholder ="  PS" className="outline-none text-black bg-white shadow-md rounded-full w-full h-8" />
        <center>
            <div className="sbtn text-black text-lg bg-white w-20 h-8 border border-collapse outline-none rounded-lg p-0 hover:bg-gray-100 cursor-pointer" onClick={addStudent}>
                <center>Submit</center>
            </div>
        </center>

    </div>
)
}
export default StudentAdd