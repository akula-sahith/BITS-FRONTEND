import React, { useState } from "react";
import "./ResumeOptimization.css"; // Ensure you have this CSS file

const ResumeOptimizationR = () => {
  const [fileName, setFileName] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="container-R">
      {/* Left Section */}
      <div className="left-section-R">
        <div className="text-content-R">
          <h1>Resume Optimization</h1>

          <br /><br />

          <p>
            Get your resume fine-tuned for better job matches and improved ATS rankings.  
            Our AI-powered tool analyzes job descriptions and suggests modifications  
            to enhance your resume’s visibility.  
            Upload your resume, enter the job description, and get tailored feedback.  
            Optimize your career path with ease!
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section-R">
        <div className="input-container-R">
          <div className="input-group-R">
            <label>Upload Your Resume</label>
            <div className="file-upload-container-R">
              <input
                type="file"
                id="resumeUpload-R"
                className="file-input-R"
                onChange={handleFileUpload}
              />
              <label htmlFor="resumeUpload-R" className="file-upload-button-R">
                Choose File
              </label>
              <span className="file-name-R">{fileName || "No file chosen"}</span>
            </div>
          </div>

          <div className="input-group-R">
            <label>Job Description</label>
            <textarea
              className="text-area-R"
              rows="4"
              placeholder="Enter job description here..."
            ></textarea>
          </div>

          <button className="apply-button-R">Enhance Resume</button>
        </div>
      </div>
    </div>
  );
};

export default ResumeOptimizationR;