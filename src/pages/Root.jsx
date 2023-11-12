import { NavLink } from "react-router-dom";
import "./Root.css";

const Root = () => {
  return (
    <>
      <NavLink to="/popular">
        <h1>Popular</h1>
      </NavLink>
      <NavLink to="/top_rated">
        <h1>Top Rated</h1>
      </NavLink>
      <NavLink to="/now_playing">
        <h1>Now Playing</h1>
      </NavLink>
      <NavLink to="/upcoming">
        <h1>Upcoming</h1>
      </NavLink>
    </>
  );
};

export default Root;
