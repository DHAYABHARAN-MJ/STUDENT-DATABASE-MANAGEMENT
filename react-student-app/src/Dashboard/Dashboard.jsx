import React from "react";
const Dashboard=()=>{
return(
    <div className="container">
        <div class="bg-blue-500 text-white p-4">
  Tailwind CSS is working!
</div>

        <div className="sidebar">
            <h2 className="text-3xl font-bold underline">BIT DASHBOARD</h2>
        </div>
        <div className="content">
            <div className="header">
                <div className="search-container">
                    <input type="text" className="search-box" placeholder="Search"/>
                </div>
            </div>
        </div>
    </div>
);
};
export default Dashboard