import React from "react";

const JobDetails = ({ job, onBack }) => {
  return (
    <div className="job-details-container">
      {/* Header */}
      <div className="job-details-header">
        <button className="back-button" onClick={onBack}>
          ← Back to Jobs
        </button>

        <div className="job-actions">
          <button className="edit-button">Edit</button>

          <button className="delete-button">Delete</button>
        </div>
      </div>

      {/* Job Header Card */}
      <div className="job-header-card">
        <div>
          <h1>{job.jobTitle}</h1>

          <p className="company-name">{job.company}</p>

          <p className="job-location">📍 {job.location}</p>
        </div>

        <div className="status-badge">{job.status}</div>
      </div>

      {/* Main Content */}
      <div className="job-details-grid">
        {/* Left Side */}
        <div>
          {/* Application Overview */}
          <div className="details-card">
            <h2>Application Overview</h2>

            <div className="details-row">
              <div>
                <span>Status</span>
                <strong>{job.status}</strong>
              </div>

              <div>
                <span>Date Applied</span>
                <strong>{job.dateApplied || "Not added"}</strong>
              </div>

              <div>
                <span>Location</span>
                <strong>{job.location || "Not added"}</strong>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="details-card">
            <h2>Application Timeline</h2>

            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>

                <div>
                  <h3>Application Created</h3>
                  <p>{job.dateApplied || "Date not added"}</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>

                <div>
                  <h3>Applied</h3>
                  <p>Application submitted to {job.company}</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot empty-dot"></div>

                <div>
                  <h3>Next Step</h3>
                  <p>Waiting for an update</p>
                </div>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="details-card">
            <h2>Notes</h2>

            <p className="notes">{job.notes || "No notes added yet."}</p>
          </div>
        </div>

        {/* Right Side */}
        <div>
          {/* Job Information */}
          <div className="details-card">
            <h2>Job Information</h2>

            <div className="info-item">
              <span>Company</span>
              <strong>{job.company}</strong>
            </div>

            <div className="info-item">
              <span>Location</span>
              <strong>{job.location}</strong>
            </div>

            <div className="info-item">
              <span>Status</span>
              <strong>{job.status}</strong>
            </div>

            <div className="info-item">
              <span>Date Applied</span>
              <strong>{job.dateApplied || "Not added"}</strong>
            </div>
          </div>

          {/* Job Link */}
          <div className="details-card">
            <h2>Job Posting</h2>

            {job.jobUrl ? (
              <a
                href={job.jobUrl}
                target="_blank"
                rel="noreferrer"
                className="job-link"
              >
                View Job Posting →
              </a>
            ) : (
              <p>No job URL added.</p>
            )}
          </div>

          {/* Next Action */}
          <div className="details-card">
            <h2>Next Action</h2>

            <p className="next-action">Follow up with {job.company}</p>

            <button className="action-button">+ Add Follow-up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
