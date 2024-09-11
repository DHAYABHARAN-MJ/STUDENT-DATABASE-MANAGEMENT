import React from "react";
import { PieChart } from '@mui/x-charts/PieChart';
import student from '../assets/images/student.png';
const StudentPerformance=()=>
    {
        return(

<div className="StudentPerformance w-screen h-screen">
  <div className="studentyear w-full h-40 flex space-x-3">
    <div className="year w-6/12 bg-white h-32 mt-5 border rounded-2xl flex items-center">
      <label className="text-lg">Select Year: <br /></label>
      <select className="bg-white border border-gray-300 rounded-md w-9/12 outline-none">
      <option className="bg-white outline-none">I</option>
      <option value="">II</option>
      <option value="">III</option>
      <option value="">IV</option>
      </select>
    </div>
    <div className="students w-8/12 bg-white h-32 mt-5 border rounded-2xl flex-1">
    <img src={student} className="w-24 mt-3" alt="" />
    </div>
  </div>
<div className="charts flex space-x-3 h-96">
  <div className="p1 bg-white w-full h-4/5 mt-7 border rounded-2xl">
  
  </div>
  <div className="p2 bg-white w-full h-4/5 mt-7 border rounded-2xl"></div>
</div>
<div className="barchart bg-white w-full h-80 border rounded-2xl">
</div>
</div>
        )
    }
export default StudentPerformance;