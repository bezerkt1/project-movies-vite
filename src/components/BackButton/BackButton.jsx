import { useNavigate, NavLink } from "react-router-dom";
import "./BackButton.css";

const BackButton = ({ text, link }) => {
  const navigate = useNavigate();

  return (
    <>
      {link === "back" ? (
        <button className="backButton" onClick={() => navigate(-1)}>
          &lt;&nbsp;{text}
        </button>
      ) : (
        <NavLink to={link}>
          <button className="backButton">&lt;&nbsp;{text}</button>
        </NavLink>
      )}
    </>
  );
};

BackButton.defaultProps = {
  text: "Main",
  link: "/",
};

export default BackButton;
