import React from "react";
import { PieChart } from '@mui/x-charts/PieChart';
const StudentPerformance=()=>
    {
        return(

<div className="StudentPerformance w-screen h-screen">
<PieChart
  series={[
    {
      data: [
        { id: 0, value: 2, label: 'Above 9.5 CGPA' },
        { id: 1, value: 6, label: ' 8.5 To 9.4 CGPA' },
        { id: 2, value: 2 , label: '5.0 to 8.49 CGPA ' },
      ],
    },
  ]}
  width={400}
  height={200}
/>
</div>
        )
    }
export default StudentPerformance;