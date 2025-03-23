import { useNavigate } from "react-router-dom";
import { useState } from "react"; // ✅ Import useState
import { auth } from "./firebase";  
import { signInWithEmailAndPassword , GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import './LoginPage.css'
function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fetchUserDetails = async (userEmail) => {
    try {
      const response = await fetch(`http://localhost:3000/users/email/${email}`);
      if (!response.ok) {
        throw new Error("Failed to fetch user details");
      }
      const userData = await response.json();
      console.log("User Details:", userData); // ✅ Log user details
      return userData;
    } catch (error) {
      console.error("Error fetching user details:", error);
      alert("Error fetching user details!");
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const userData = await fetchUserDetails(email); // Fetch user details after login
      navigate("/dashboard", { state: { user: userData } }); // Pass user data to dashboard
    } catch (error) {
      console.error("Login Error:", error.message);
      alert(error.message);
    }
  };

  const googleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' }); 
      const result = await signInWithPopup(auth, provider);
      const email = result.user.email;
      const userData = await fetchUserDetails(email);
      alert("Signup Successful!");
      navigate("/dashboard", { state: { user: userData } }); 
    } catch (error) {
      alert(error.message);
    }
  };

  const containerStyle = {
    width: "420px",
    backgroundColor: "white",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "30px",
    justifyContent: "center",
    fontFamily: "'Poppins', sans-serif",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    borderRadius: "6px",
    border: "none",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "10px",
    textAlign:"center",
    transition: "0.3s ease",
  };

  const googleButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#ffffff",
    border: "1px solid  #006EDC",
    color: " #006EDC",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "5px 0 15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
  };

  const labelStyle = {
    width: "100%",
    textAlign: "left", // Left-align the labels
    fontWeight: "500",
    marginBottom: "5px",
    fontSize: "14px",
  };

  const loginButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#006EDC",
    color: "white",
  };

  const signupButtonStyle = {
    ...buttonStyle,
    backgroundColor: "white",
    border: "1px solid #006EDC",
    color: " #006EDC",
  };

  const textStyle = {
    fontSize: "14px",
    marginTop: "5px",
    color: "black",
  };

  return (
    <div className="login-page">
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <div style={containerStyle}>
        <h2 style={{ marginTop: "0", fontWeight: "600", fontSize: "24px" }}>Log in</h2>
        <button style={googleButtonStyle} onClick={googleSignIn}>Continue with Google</button>
        <br />
        <span>OR</span>
        <br />
        <label style={labelStyle}>Email Address</label>
        <input type="email" placeholder="Enter your email" name="email" style={inputStyle} onChange={(e) => setEmail(e.target.value)}/>
        <label style={labelStyle}>Password</label>
        <input type="password" placeholder="Enter your password" name="password" style={inputStyle} value={password} onChange={(e) => setPassword(e.target.value)}/>
        
        {/* This button need to be given firebase logic */}
        <button style={loginButtonStyle} onClick={handleLogin}>Log in</button>
        {/* This button need to be given firebase logic */}
        
        <hr />
        <p style={textStyle}>Don't have an account?</p>
        <button style={signupButtonStyle} onClick={() => navigate("/signup")}>
          Sign Up
        </button>
      </div>
    </div>
    </div>
  );
}

export default LoginPage;
