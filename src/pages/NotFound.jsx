import { useRouteError } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <>
      <div>
        <h2>NOTFOUND</h2>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </>
  );
};

export default NotFound;
