import React, { useState } from "react";
import AddJob from "./AddJob";

const Main = ({ sidebarOpen }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className={sidebarOpen ? "main" : "main wide"}>
        <div className="top">
          <div>
            <h1>Dashboard</h1>
            <p>Keep track of your job applications.</p>
          </div>

          <button onClick={() => setShowModal(true)} className="add-button">
            + Add Job
          </button>
        </div>

        <div className="stats">
          <div className="card">
            <p>Total Jobs</p>
            <h2>0</h2>
          </div>

          <div className="card">
            <p>Interviews</p>
            <h2>0</h2>
          </div>

          <div className="card">
            <p>Offers</p>
            <h2>0</h2>
          </div>
        </div>

        <div className="jobs">
          <h2>My Jobs</h2>

          <div className="empty">
            <div className="empty-icon">+</div>

            <h3>No jobs there yet</h3>

            <p>
              Start tracking your job applications by adding your first job.
            </p>

            <button onClick={() => setShowModal(true)} className="add-button">
              + Add Job
            </button>
          </div>
        </div>
      </div>

      {/* Add Job Modal */}
      {showModal && <AddJob onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Main;
