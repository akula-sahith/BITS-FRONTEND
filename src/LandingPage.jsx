import { useRef } from "react";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";
import Product from "./Product";
import './Product.css'
function LandingPage() {
    const navigate = useNavigate();
    return (
        <>
            {/* First Section */}
            <div className="first-section">
                {/* Navigation Bar */}
                <div className="nav-bar">
                    <div className="logo"><p>SAASFLOWS</p></div>
                    <nav className="nav-one">
                        <button className="nav-one-button">Product</button>
                        <button className="nav-one-button">FAQ</button>
                        <button className="nav-one-button">Contact</button>
                    </nav>
                    <nav className="nav-two">
                        <button className="login-btn" onClick={()=>navigate("/login")}>
                            LOGIN
                        </button>
                        <button className="signup-btn" onClick={()=>navigate("/signup")}>
                            SIGN UP
                        </button>
                    </nav>
                </div>

                {/* Hero Section */}
                <div className="hero-section">
                    <button className="demo-button">Watch Demo</button>
                    <p>Experience the Next-Gen AI powered Resume Optimization and Interview Preparation</p>
                    <p>Supercharge Your Job Search: Smart resume optimization, job matching, and AI-powered interview prep!</p>
                    <button className="try-now" onClick={()=>{navigate("/signup")}}>
                        Try Now
                        </button>
                </div>

            </div>

            {/* Placeholder for Additional Sections */}
            <div className="second-section">
                <Product/>
            </div>
            <div className="third-section"></div>
            <div className="fourth-section"></div>
            <div className="fifth-section"></div>
        </>
    );
}

export default LandingPage;
