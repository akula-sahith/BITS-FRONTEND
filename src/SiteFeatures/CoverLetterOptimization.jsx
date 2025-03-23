import React, { useState } from "react";
import "./CoverLetterOptimization.css"; // Updated CSS filename

const CoverLetterOptimization = () => {
  const [fileName, setFileName] = useState("No file chosen");

  const handleFileChange = (event) => {
    setFileName(event.target.files[0] ? event.target.files[0].name : "No file chosen");
  };

  return (
    <div className="container-C">
      {/* Left Section - Header & Description */}
      <div className="left-section-C">
        <div className="text-content-C">
          <h1>Cover Letter Generator</h1>
          <p>
            Craft a personalized cover letter effortlessly.  
            Upload your resume, enter the job description,  
            and generate a compelling cover letter in seconds.  
            Stand out to employers with a tailored introduction!  
          </p>
        </div>
      </div>

      {/* Right Section - Input Form */}
      <div className="right-section-C">
        <div className="input-container-C">
          <h2>Generate Your Cover Letter</h2>

          {/* Resume Upload */}
          <div className="input-group-C">
            <label>Upload Your Resume</label>
            <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
            <p className="file-name-C">{fileName}</p>
          </div>

          {/* Job Description */}
          <div className="input-group-C">
            <label>Job Description</label>
            <textarea placeholder="Paste the job description here" rows="5"></textarea>
          </div>

          {/* Submit Button */}
          <button className="generate-button-C">Generate Cover Letter</button>
        </div>
      </div>
    </div>
  );
};

export default CoverLetterOptimization;