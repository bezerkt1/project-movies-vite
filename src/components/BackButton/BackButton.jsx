import { useNavigate } from "react-router-dom";
import "./BackButton.css";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <>
      <button class="backButton" onClick={() => navigate(-1)}>
        &lt;&nbsp;Back
      </button>
    </>
  );
};

export default BackButton;
