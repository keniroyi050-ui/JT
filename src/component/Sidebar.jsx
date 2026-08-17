import React from 'react'

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
          <div className={sidebarOpen ? "sidebar" : "sidebar small"}>

        <h2>Job Tracker</h2>

        <button className="menu active">
          Dashboard
        </button>

        <button className="menu">
          Applications
        </button>

        <button className="collapse" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? "←" : "→"}
        </button>

      </div>
  )
}

export default Sidebar