import { Link } from "react-router-dom";
import "../NotFound/NotFound.css"

const NotFound = () => {
  return (
    <div>
      <div className="container notfoundContainer">
        <h2>Page Not Found</h2>
        <Link to="/" className="NFbtn">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;