import React, { useState } from "react";
import AddJob from "./AddJob";

const Main = ({ sidebarOpen }) => {
  const [showModal, setShowModal] = useState(false);
  const [jobs, setJobs] = useState([]);

  const handleJobs = (job) => {
    setJobs([...jobs, job]);
    setShowModal(false);
  };

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
            <h2>{jobs.length}</h2>
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

          {jobs.length === 0 ? (
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
          ) : (
            <div>
              {jobs.map((job, index) => (
                <div className="card" key={index}>
                  <h3>{job.jobTitle}</h3>
                  <p>{job.company}</p>
                  <p>{job.location}</p>
                  <p>{job.status}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <AddJob onClose={() => setShowModal(false)} handleJobs={handleJobs} />
      )}
    </div>
  );
};

export default Main;
