import React, { useState } from "react";
import Sidebar from "./component/Sidebar";
import Main from "./component/Main";


const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Main sidebarOpen={sidebarOpen} />
    </div>
  );
};

export default Dashboard;
