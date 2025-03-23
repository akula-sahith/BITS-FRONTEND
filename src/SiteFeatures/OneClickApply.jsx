import React, { useState } from "react";
import "./OneClickApply.css";

const OneClickJobApply = () => {
  const [jobUrl, setJobUrl] = useState("");
  const [linkedInEmail, setLinkedInEmail] = useState("");
  const [linkedInPassword, setLinkedInPassword] = useState("");
  const [resumeFile, setResumeFile] = useState(null);
  const [fileError, setFileError] = useState("");

  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
  const ALLOWED_TYPES = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        setFileError("File size must be less than 5MB");
        setResumeFile(null);
        return;
      }
      if (!ALLOWED_TYPES.includes(file.type)) {
        setFileError("File type must be PDF or Word document");
        setResumeFile(null);
        return;
      }
      setFileError("");
      setResumeFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resumeFile) {
      alert("Please upload a resume file.");
      return;
    }

    const formData = new FormData();
    formData.append("jobUrl", jobUrl);
    formData.append("email", linkedInEmail);
    formData.append("password", linkedInPassword);
    formData.append("resumeFile", resumeFile); // ✅ Send file properly

    try {
      const response = await fetch("http://127.0.0.1:5000/oneclickapply", {
        method: "POST",
        body: formData, // ✅ Don't set content-type for FormData
      });

      const result = await response.json();
      console.log("API Response:", result);

      alert(result.message || "Application submitted successfully!");
    } catch (error) {
      console.error("Request failed:", error);
      alert("Something went wrong! Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="left-section">
        <div className="header">
          <h1>ONE CLICK JOB APPLY</h1>
          <p className="description">
            Streamline your job application process with our innovative One Click Job Apply feature. 
            Simply paste the URL of the job you're interested in, enter your LinkedIn credentials, 
            and upload your resume. Our system will automatically fill out applications using your information,
            saving you time and effort.
          </p>
        </div>
      </div>

      <div className="right-section">
        <div className="input-container">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="jobUrl">Enter your interested job URL</label>
              <input
                id="jobUrl"
                type="url"
                placeholder="https://company.com/careers/job-title"
                value={jobUrl}
                onChange={(e) => setJobUrl(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="linkedInEmail">LinkedIn Email</label>
              <input
                id="linkedInEmail"
                type="email"
                placeholder="your.email@example.com"
                value={linkedInEmail}
                onChange={(e) => setLinkedInEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="linkedInPassword">LinkedIn Password</label>
              <input
                id="linkedInPassword"
                type="password"
                placeholder="Your password"
                value={linkedInPassword}
                onChange={(e) => setLinkedInPassword(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="resumeUpload">Upload Resume (PDF or Word, max 5MB)</label>
              <input
                id="resumeUpload"
                type="file"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className="file-input"
              />
              {fileError && <div className="error-message">{fileError}</div>}
              {resumeFile && (
                <div className="file-info">
                  File size: {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                </div>
              )}
            </div>

            <div className="privacy-notice">
              <p>
                By uploading your resume, you agree to our{" "}
                <a href="#">Privacy Policy</a> and{" "}
                <a href="#">Terms of Service</a>.
              </p>
            </div>

            <button type="submit" className="apply-button-form">
              Apply Job
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OneClickJobApply;
