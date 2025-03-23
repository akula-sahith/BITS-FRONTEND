import { FaCheckCircle } from "react-icons/fa"; // Default icon
import "./FeatureCard.css";
import { useNavigate } from "react-router-dom";
function FeatureCard({ name, description, Icon }) {
    const navigate = useNavigate();
    return (
        <div className="feature-card" onClick={()=>navigate("/signup")}>
            <div className="icon-container">{Icon ? <Icon /> : <FaCheckCircle />}</div>
            <p className="feature-name">{name}</p>
            <p className="feature-desc">{description}</p>
        </div>
    );
}

export default FeatureCard;
