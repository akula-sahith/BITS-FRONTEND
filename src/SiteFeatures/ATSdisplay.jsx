import React from 'react';
import { useLocation } from 'react-router-dom';
import './ATSdisplay.css';

function ATSdisplay() {
  const location = useLocation();
  const { data } = location.state || {};

  if (!data) {
    return <div className="error-container">No data available. Please submit your resume first.</div>;
  }

  return (
    <div className="ats-container">
      <h1 className="ats-title">ATS Score Report</h1>
      <div className="ats-score-box">
        <h2>Your ATS Score: <span className="score-highlight">{data.atsScore}%</span></h2>
      </div>

      <div className="score-breakdown">
        <h3>Score Breakdown:</h3>
        <ul>
          <li><strong>Keyword Match Score:</strong> {data.scores.keywordMatchScore}%</li>
          <li><strong>Experience Score:</strong> {data.scores.experienceScore}%</li>
          <li><strong>Skills Match Score:</strong> {data.scores.skillsMatchScore}%</li>
          <li><strong>Job Title Match Score:</strong> {data.scores.jobTitleMatchScore.toFixed(2)}%</li>
          <li><strong>Education Match Score:</strong> {data.scores.educationMatchScore}%</li>
          <li><strong>Formatting Score:</strong> {data.scores.formattingScore}%</li>
        </ul>
      </div>

      <p className="ats-message">{data.message}</p>
    </div>
  );
}

export default ATSdisplay;
