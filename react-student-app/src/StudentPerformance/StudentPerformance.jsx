import React from "react";
import { PieChart } from '@mui/x-charts/PieChart';
import CircularProgress from '@mui/joy/CircularProgress';
import student from '../assets/images/student.png';
const StudentPerformance=()=>
    {
        return(

<div className="StudentPerformance w-screen h-screen">
  <div className="studentyear w-full h-40 flex space-x-3">
    <div className="year w-4/12 bg-white h-32 mt-5 border rounded-2xl flex items-center">
      <label className="text-lg">Select Year: <br /></label>
      <select className="bg-white border border-gray-300 rounded-md w-9/12 outline-none">
      <option className="bg-white outline-none">I</option>
      <option value="">II</option>
      <option value="">III</option>
      <option value="">IV</option>
      </select>
    </div>
    <div className="students w-8/12 h-32 mt-5 border rounded-2xl flex">
    <div className="studentimg bg-white w-4/12 border rounded-lg mr-2 flex"><img src={student} className="w-24 h-24 mt-2" alt="" />
    <div className="text-black text-xl ml-4 mt-2 text-center px-2 w-full">IT
    <div>
      <CircularProgress color="neutral" sx={{
      "--CircularProgress-size":"90px",
      "--CircularProgress-trackThickness":"18px",
      "--CircularProgress-progressThickness":"18px"
        }} determinate value={50}>{"50%"}</CircularProgress>
    </div>
    </div>
    </div>
    <div className="studentimg bg-white w-4/12 border rounded-lg mr-2 flex"><img src={student} className="w-24 h-24 mt-2" alt="" />
    <div className="text-black text-xl ml-4 mt-2 text-center w-full">Core
    <div className="text-black">  <CircularProgress color="success" sx={{
    "--CircularProgress-size":"90px",
    "--CircularProgress-trackThickness":"18px",
    "--CircularProgress-progressThickness":"18px"
  }} determinate value={50}>{"50%"}</CircularProgress></div>

    </div>
    </div>  
    <div className="studentimg bg-white w-4/12 border rounded-lg mr-2 flex"><img src={student} className="w-24 h-24 mt-2" alt="" />
    <div className="text-black text-xl ml-4 mt-2 text-center w-full">NIP
    <div className="text-black">  <CircularProgress color="danger" sx={{
    "--CircularProgress-size":"90px",
    "--CircularProgress-trackThickness":"18px",
    "--CircularProgress-progressThickness":"18px"
  }} determinate value={50}>{"50%"}</CircularProgress></div>

    </div>
    </div>
    </div>
  </div>
<div className="charts flex space-x-3 h-96">
  <div className="p1 bg-white w-full h-4/5 mt-7 border rounded-2xl">
  <CircularProgress sx={{
    "--CircularProgress-size":"200px",
    "--CircularProgress-trackThickness":"18px",
    "--CircularProgress-progressThickness":"18px"
  }} determinate value={50}>{"50%"}</CircularProgress>
  </div>
  <div className="p2 bg-white w-full h-4/5 mt-7 border rounded-2xl"></div>
</div>
<div className="barchart bg-white w-full h-80 border rounded-2xl">
</div>
</div>
        )
    }
export default StudentPerformance;