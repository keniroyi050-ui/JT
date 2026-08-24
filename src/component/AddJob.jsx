// import React, { useState } from "react";
// import "App.css";

const AddJob = ({ onClose }) => {
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [jobUrl, setJobUrl] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("Applied");
  const [dateApplied, setDateApplied] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <div className="add-job-container">
      <div className="add-job-modal">
        <h1>Add Job</h1>

        <p className="subtitle">
          Add a new job to your tracker
        </p>

        <form>
          {/* Job Title */}
          <div className="form-group">
            <label>Job Title</label>

            <input
              value={jobTitle}
              type="text"
              placeholder="e.g. Frontend Developer"
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Company</label>

            <input
              value={company}
              type="text"
              placeholder="e.g. Google"
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>

          
          <div className="form-group">
            <label>Job URL</label>

            <input
              value={jobUrl}
              type="text"
              placeholder="https://example.com/job"
              onChange={(e) => setJobUrl(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Location</label>

            <input
              value={location}
              type="text"
              placeholder="e.g. Lagos, Nigeria"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          {/* Status */}
          <div className="form-group">
            <label>Status</label>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>Applied</option>
              <option>Interview</option>
              <option>Offer</option>
              <option>Rejected</option>
            </select>
          </div>

          <div className="form-group">
            <label>Date Applied</label>

            <input
              value={dateApplied}
              type="date"
              onChange={(e) => setDateApplied(e.target.value)}
            />
          </div>

          
          <div className="form-group">
            <label>Notes</label>

            <textarea
              value={notes}
              placeholder="Add some notes..."
              rows="4"
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
          </div>

          
          <div className="button-group">
            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>

            <button type="submit" className="add-btn">
              Add Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default AddJob;