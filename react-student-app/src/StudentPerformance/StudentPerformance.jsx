import React, { useState } from "react";
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import CircularProgress from '@mui/joy/CircularProgress';
import student from '../assets/images/student.png';
import { useEffect } from "react";

const StudentPerformance = () => {
  const [data,setData]=useState([]);
  const [cgpa85,setCgpa85]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:8081/cgpa9')
    .then(res=>res.json())
    .then(data=>setData(data))
    .catch(err=>console.log(err))

    //CGPA between 8.5 to 9

    fetch("http://localhost:8081/cgpa8.5")
    .then(res=>res.json())
    .then(data=>setCgpa85(data))
    .catch(err=>console.log(err))

  },[])


  const cgpaAbove9=data.length>0?data[0]["COUNT(cgpa)"]:0;
  const cgpa85to9=cgpa85.length>0?cgpa85[0]["COUNT(cgpa)"]:0;
  return (
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
          <div className="studentimg bg-white w-4/12 border rounded-lg mr-2 flex">
            <div className="text-black text-xl ml-4 mt-2 text-center px-2 w-full">
              PLACED
              <div>
                <CircularProgress color="warning" sx={{
                  "--CircularProgress-size": "90px",
                  "--CircularProgress-trackThickness": "18px",
                  "--CircularProgress-progressThickness": "18px"
                }} determinate value={50}>{"50%"}</CircularProgress>
              </div>
            </div>
          </div>

          <div className="studentimg bg-white w-4/12 border rounded-lg mr-2 flex">
            <div className="text-black text-xl ml-2 mt-2 text-center w-full">IT
              <div>
                <CircularProgress color="neutral" sx={{
                  "--CircularProgress-size": "90px",
                  "--CircularProgress-trackThickness": "18px",
                  "--CircularProgress-progressThickness": "18px"
                }} determinate value={50}>{"50%"}</CircularProgress>
              </div>
            </div>
          </div>

          <div className="studentimg bg-white w-4/12 border rounded-lg mr-2 flex">
            <div className="text-black text-xl ml-4 mt-2 text-center w-full">Core
              <div className="text-black">
                <CircularProgress color="success" sx={{
                  "--CircularProgress-size": "90px",
                  "--CircularProgress-trackThickness": "18px",
                  "--CircularProgress-progressThickness": "18px"
                }} determinate value={50}>{"50%"}</CircularProgress>
              </div>
            </div>
          </div>

          <div className="studentimg bg-white w-4/12 border rounded-lg mr-2 flex">
            <div className="text-black text-xl ml-4 mt-2 text-center w-full">NIP
              <div className="text-black">
                <CircularProgress color="danger" sx={{
                  "--CircularProgress-size": "90px",
                  "--CircularProgress-trackThickness": "18px",
                  "--CircularProgress-progressThickness": "18px"
                }} determinate value={50}>{"50%"}</CircularProgress>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="charts flex space-x-3 h-96">
        <div className="p1 bg-white w-full h-4/5 mt-7 border rounded-2xl flex items-center">
          <div>
            <div className="piechart flex w-full mt-5">
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: cgpaAbove9, label: 'Above 9.0 CGPA' },
                      { id: 1, value: cgpa85to9, label: '8.5 TO 9.0 CGPA' },
                      { id: 2, value: 20, label: '6.5 TO 8.49 CGPA' },
                    ],
                  },
                ]}
                width={550}
                height={200}
              />
            </div>
          </div>
        </div>

        <div className="p1 bg-white w-full h-4/5 mt-7 border rounded-2xl flex items-center">
          <div>
            <div className="piechart flex w-full mt-5 flex items-center">
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: 10, label: 'PR BELOW 10' },
                      { id: 1, value: 15, label: 'BETWEEN 50 TO 11' },
                      { id: 2, value: 20, label: 'BETWEEN 100 TO 50' },
                    ],
                  },
                ]}
                width={550}
                height={200}
              />
            </div>
          </div>
        </div>

        <div className="p2 bg-white w-full h-4/5 mt-7 border rounded-2xl flex items-center">
        <div className="piechart flex w-full mt-5">
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: 10, label: 'FR BELOW 10' },
                      { id: 1, value: 10, label: 'BETWEEN 50 TO 11' },
                      { id: 2, value: 15, label: 'BETWEEN 100 TO 50' },
                    ],
                  },
                ]}
                width={550}
                height={200}
              />
            </div>
        
        </div>
      </div>

      <div className="barchart bg-white w-full h-80 border rounded-2xl mt-5 flex justify-center">
      <div className="subjects text-black text-wrap"></div>
      <BarChart
      xAxis={[{ scaleType: 'band', data: ['PRINCIPLES OF COMMUNICATION', 'COMPUTER NETWORKS', 'INFORMATION CODING TECHNIQUES','INTERNET OF THINGS','SOFTWARE DEFINED NETWORKS','MINI PROJECT'] }]}
      series={[{ data: [100, 100, 100,100,100,100] }]}
      width={1500}
      height={300}
    />
      </div> 
       </div>
  );
}

export default StudentPerformance;
