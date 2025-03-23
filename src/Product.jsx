import FeatureCard from "./FeatureCard";
import { FaClipboardCheck, FaFileAlt, FaBriefcase, FaChartBar, FaLinkedin, FaRobot, FaUserMd, FaFilePdf, FaEnvelopeOpenText, FaRocket } from "react-icons/fa";
import './Product.css'
function Product(){
    return <>
        <div className="features">
            
            <h1 style={{color:"white"}} className="headline">Unlock the Power of AI for Smarter Career Growth</h1>
            <p className="sub-headline">Empower Your Career with AI: Optimize Resumes, Match Jobs, and Ace Interviews</p>
            <div className="feature-items">
            <FeatureCard name="ATS Scoring" description="Analyzes your resume and scores it for ATS compatibility." Icon={FaClipboardCheck} />
            <FeatureCard name="Resume Optimization" description="Optimizes your resume based on job descriptions." Icon={FaFileAlt} />
            <FeatureCard name="Job Recommendations" description="Finds the best jobs for you from LinkedIn." Icon={FaBriefcase} />
            <FeatureCard name="Skill Gap Analysis" description="Identifies missing skills for your target job." Icon={FaChartBar} />
            <FeatureCard name="LinkedIn Optimization" description="Improves your LinkedIn profile for recruiters." Icon={FaLinkedin} />
            <FeatureCard name="AI Interview Practicer" description="Conducts mock AI interviews and feedback." Icon={FaRobot} />
            <FeatureCard name="Interview Questions" description="Get questions for your job interview preparation" Icon={FaRobot} />
            <FeatureCard name="Emotional Support Chatbot" description="AI chatbot for employees' emotional well-being." Icon={FaUserMd} />
            <FeatureCard name="New Resume Generator" description="Creates a brand new resume from scratch." Icon={FaFilePdf} />
            <FeatureCard name="Cover Letter Optimization" description="Enhances your cover letter for job applications." Icon={FaEnvelopeOpenText} />
            <FeatureCard name="One-Click Apply" description="Applies to multiple jobs with a single click." Icon={FaRocket} />
            </div>
        </div>
    </>
}

export default Product;