import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, ArrowRight } from 'lucide-react';
import './ATSScoring.css';

function ATSScoring() {
  const [resumeFile, setResumeFile] = useState(null);
  const [jobFile, setJobFile] = useState(null);
  const [fileError, setFileError] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e, setFile) => {
    const file = e.target.files[0];
    setFileError('');

    if (!file) {
      setFile(null);
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setFileError('File size exceeds 5MB limit');
      setFile(null);
      return;
    }

    setFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!resumeFile || !jobFile) {
      setFileError('Please upload both resume and job description');
      return;
    }

    const formData = new FormData();
    formData.append('resume', resumeFile);
    formData.append('jobDescription', jobFile);

    try {
      const response = await fetch('http://localhost:3000/ats-score', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        navigate('/ats-display', { state: { data } });
      } else {
        setFileError(data.message || 'Failed to get ATS score');
      }
    } catch (error) {
      setFileError('Server error. Try again later.');
    }
  };

  return (
    <div className="container-a">
      <div className="left-section-a">
        <h1>ATS Scoring Page</h1>
        <p>Upload your resume and job description to analyze compatibility.</p>
      </div>

      <div className="right-section-a">
        <form onSubmit={handleSubmit}>
          <div className="input-box-a">
            <label>Upload Resume (PDF, DOC, DOCX)</label>
            <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => handleFileChange(e, setResumeFile)} />
          </div>

          <div className="input-box-a">
            <label>Upload Job Description (PDF, DOC, DOCX)</label>
            <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => handleFileChange(e, setJobFile)} />
          </div>

          {fileError && <div className="error-message-a">{fileError}</div>}

          <button type="submit" className="apply-button-a">
            Find Your Score <ArrowRight size={18} className="icon-a" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ATSScoring;
