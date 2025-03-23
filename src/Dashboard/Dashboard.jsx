import React from "react";
import { useLocation } from "react-router-dom";
import EachFeature from "./EachFeature";
import "./Dashboard.css";

const features = {
    resume: [
        { icon: "📄", title: "ATS Scoring", description: "Analyzes your resume and scores it for ATS compatibility." },
        { icon: "🚀", title: "Resume Optimization", description: "Optimizes your resume based on job descriptions." },
        { icon: "📝", title: "New Resume Generator", description: "Creates a brand new resume from scratch." },
        { icon: "✉️", title: "Cover Letter Optimization", description: "Enhances your cover letter for job applications." }
    ],
    jobs: [
        { icon: "🔍", title: "Job Recommendations", description: "Finds the best jobs for you from LinkedIn." },
        { icon: "📊", title: "Skill Gap Analysis", description: "Identifies missing skills for your target job." },
        { icon: "⚡", title: "One Click Apply", description: "Applies to multiple jobs with a single click." }
    ],
    interview: [
        { icon: "🤖", title: "AI Interview Practicer", description: "Conducts mock AI interviews and feedback." },
        { icon: "❓", title: "Interview Questions", description: "Get questions for your job interview preparation." }
    ],
    others: [
        { icon: "💼", title: "LinkedIn Optimization", description: "Improves your LinkedIn profile for recruiters." },
        { icon: "🧠", title: "Emotional Support Chatbot", description: "AI chatbot for employees' emotional well-being." },
        { icon: "🤝", title: "Personalized Chatbot", description: "Create a chatbot based on your experience & resume." }
    ]
};
const categoryColors = {
    resume: "#ffebee", 
    jobs: "#e3f2fd",   
    interview: "#e8f5e9", 
    others: "#fff3e0"  // Light Orange
};

const Dashboard = () => {
    const location = useLocation();
    const data = location.state || {}; // Default to an empty object if state is undefined
    const fullName = data.user?.name || "Guest";
    
    // Ensure safe splitting
    const nameParts = fullName.split(" ");
    const fname = nameParts[0] || "Guest";
    const lname = nameParts[1] || "";

    return (
        <div className="dashboard">
            <div className="name-dp">
                <img 
                    src={`https://ui-avatars.com/api/?name=${fname}+${lname}`} 
                    alt="User Avatar"  
                    className="dp"
                />
                <h2>Welcome back, {fullName} 👋</h2>
            </div>

            <div className="dashboard-content">
                {Object.entries(features).map(([category, items]) => (
                    <div key={category} className={category}>
                        <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                        <div className="feature-grid">
                            {items.map((feature, index) => (
                                <EachFeature key={index} {...feature} backgroundColor={categoryColors[category]} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
