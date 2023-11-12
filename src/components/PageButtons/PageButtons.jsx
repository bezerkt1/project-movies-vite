import { useHref, NavLink } from "react-router-dom";
import "./PageButtons.css";

const PageButtons = ({ page, total_pages }) => {
  // get current url and dissect to be used later
  let location = useHref().split("/");
  if (location[location.length - 1] === page) {
    location.pop();
  }
  location = location.join("/");

  // limit the pages to 500
  if (total_pages > 500) {
    total_pages = 500;
  }

  return (
    <>
      <div className="PageButtons">
        <div>
          {page > 1 && (
            <NavLink to={`${location}/${parseInt(page) - 1}`}>
              <button>Previous</button>
            </NavLink>
          )}
          <p>
            {page}/{total_pages}
          </p>
          {page < total_pages && (
            <NavLink to={`${location}/${parseInt(page) + 1}`}>
              <button>Next</button>
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};

PageButtons.defaultProps = {
  page: 1,
  total_pages: 1,
};

export default PageButtons;
