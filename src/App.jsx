import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignupPage from "./SignUpPage";
import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard/Dashboard";
import ATSScoring from "./SiteFeatures/ATSScoring";  // Example component
import ResumeOptimization from "./SiteFeatures/ResumeOptimization";
import NewResumeGenerator from "./SiteFeatures/NewResumeGenerator";
import CoverLetterOptimization from "./SiteFeatures/CoverLetterOptimization";
import JobRecommendations from "./SiteFeatures/JobRecommendations";
import SkillGapAnalysis from "./SiteFeatures/SkillGapAnalysis";
import OneClickApply from "./SiteFeatures/OneClickApply";
import AIInterviewPracticer from "./SiteFeatures/AIInterviewPracticer";
import InterviewQuestions from "./SiteFeatures/InterviewQuestions";
import LinkedInOptimization from "./SiteFeatures/LinkedInOptimization";
import EmotionalSupportChatbot from "./SiteFeatures/EmotionalSupportChatbot";
import PersonalizedChatbot from "./SiteFeatures/PersonalizedChatbot";
import ATSdisplay from "./SiteFeatures/ATSdisplay"; 
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/signup" element={<SignupPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/ats-scoring" element={<ATSScoring />} />
          <Route path="/resume-optimization" element={<ResumeOptimization />} />
                <Route path="/new-resume-generator" element={<NewResumeGenerator />} />
                <Route path="/cover-letter-optimization" element={<CoverLetterOptimization />} />
                <Route path="/job-recommendations" element={<JobRecommendations />} />
                <Route path="/skill-gap-analysis" element={<SkillGapAnalysis />} />
                <Route path="/one-click-apply" element={<OneClickApply />} />
                <Route path="/ai-interview-practicer" element={<AIInterviewPracticer />} />
                <Route path="/interview-questions" element={<InterviewQuestions />} />
                <Route path="/linkedin-optimization" element={<LinkedInOptimization />} />
                <Route path="/emotional-support-chatbot" element={<EmotionalSupportChatbot />} />
                <Route path="/personalized-chatbot" element={<PersonalizedChatbot />} />
                <Route path="/ats-display" element={<ATSdisplay />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
