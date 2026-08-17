import React from "react";
import "App.css";

const AddJob = ({ onClose }) => {
  return (
    <div className="add-job-container">

      <div className="add-job-modal">

        <h1>Add Job</h1>

        <p className="subtitle">
          Add a new job to your tracker
        </p>

        <form>

          <div className="form-group">
            <label>Job Title</label>
            <input
              type="text"
              placeholder="e.g. Frontend Developer"
            />
          </div>

          <div className="form-group">
            <label>Company</label>
            <input
              type="text"
              placeholder="e.g. Google"
            />
          </div>

          <div className="form-group">
            <label>Job URL</label>
            <input
              type="text"
              placeholder="https://example.com/job"
            />
          </div>

          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              placeholder="e.g. Lagos, Nigeria"
            />
          </div>

          <div className="form-group">
            <label>Status</label>

            <select>
              <option>Applied</option>
              <option>Interview</option>
              <option>Offer</option>
              <option>Rejected</option>
            </select>
          </div>

          <div className="form-group">
            <label>Date Applied</label>
            <input type="date" />
          </div>

          <div className="form-group">
            <label>Notes</label>

            <textarea
              placeholder="Add some notes..."
              rows="4"
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

            <button
              type="submit"
              className="add-btn"
            >
              Add Job
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default AddJob;