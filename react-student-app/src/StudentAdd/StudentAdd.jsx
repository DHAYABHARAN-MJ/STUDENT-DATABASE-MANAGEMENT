import React from "react";
import { useEffect,useState } from "react";
const StudentAdd=()=>{
return(
    <div className="student space-y-7 p-16 flex-1 max-w-full outline-dashed">
        <input type="text" placeholder ="  Name" className="outline-none text-black w-full border rounded-full shadow-md h-8" />
        <input type="text" placeholder ="  RollNo" className="outline-none text-black bg-white shadow-md rounded-full w-full h-8" />
        <input type="text" placeholder ="  Bmail" className="outline-none text-black bg-white shadow-md rounded-full w-full h-8" />
        <input type="text" placeholder ="  Year" className="outline-none text-black bg-white shadow-md rounded-full w-full h-8" />
        <input type="text" placeholder ="  CGPA" className="outline-none text-black bg-white shadow-md rounded-full w-full h-8" />
        <input type="text" placeholder ="  Lab" className="outline-none text-black bg-white shadow-md rounded-full w-full h-8" />
        <input type="text" placeholder ="  Placement Rank" className="outline-none text-black bg-white shadow-md rounded-full w-full h-8" />
        <input type="text" placeholder ="  FullStack Rank" className="outline-none text-black bg-white shadow-md rounded-full w-full h-8" />
        <input type="text" placeholder ="  PS" className="outline-none text-black bg-white shadow-md rounded-full w-full h-8" />
        <center>
            <div className="sbtn text-black text-lg bg-white w-20 h-8 border border-collapse outline-none rounded-lg p-0 hover:bg-gray-100 cursor-pointer">
                <center>Submit</center>
            </div>
        </center>

    </div>
)
}
export default StudentAdd