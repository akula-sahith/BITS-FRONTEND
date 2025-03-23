import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./LoginPage.css";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
function SignUpPage() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const saveUserToDatabase = async (userData) => {
  //   try {
  //     await axios.post("http://localhost:3000/createAccount", userData); // Update with your API URL
  //   } catch (error) {
  //     console.error("Failed to save user data:", error);
  //   }
  // };

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user details in MongoDB
      await fetch("http://localhost:3000/createAccount", {
        // Replace with your backend URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`,
          email: user.email,
          password: password, // Replace with a secure password
          authProvider: "Email",
        }),
      });
      //Saving the data to the database

      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  const googleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" }); // Force account selection
      await signInWithPopup(auth, provider);
      alert("Signup Successful!");
      //After showing the pop up
      navigate("/dashboard");
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
    textAlign: "center",
    transition: "0.3s ease",
  };

  const googleButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#ffffff",
    border: "1px solid #006EDC",
    color: "#006EDC",
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
    textAlign: "left",
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
    color: "#006EDC",
  };

  const textStyle = {
    fontSize: "14px",
    marginTop: "5px",
    color: "black",
  };

  return (
    <div className="signup-page">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <div style={containerStyle}>
          <h2 style={{ marginTop: "0", fontWeight: "600", fontSize: "24px" }}>
            Sign up
          </h2>
          <button style={googleButtonStyle} onClick={googleSignIn}>
            Continue with Google
          </button>
          <br />
          <span>OR</span>
          <br />
          <label style={labelStyle}>First Name</label>
          <input
            type="text"
            placeholder="Enter your first name"
            name="firstName"
            value={firstName}
            style={inputStyle}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />

          <label style={labelStyle}>Last Name</label>
          <input
            type="text"
            placeholder="Enter your last name"
            name="lastName"
            value={lastName}
            style={inputStyle}
            onChange={(e) => setLastName(e.target.value)}
            required
          />

          <label style={labelStyle}>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={email}
            style={inputStyle}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label style={labelStyle}>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            style={inputStyle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button style={loginButtonStyle} onClick={handleSignup}>
            Sign Up
          </button>

          <hr />
          <p style={textStyle}>Already have an account?</p>
          <button style={signupButtonStyle} onClick={() => navigate("/login")}>
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
