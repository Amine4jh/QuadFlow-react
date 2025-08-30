import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div id="NotFound">
      <Link to="/">
        <button id="primary">
          <IoArrowBack /> Home
        </button>
      </Link>
      <h1>404</h1>
      <h3>Page Not Found</h3>
    </div>
  );
};

export default NotFoundPage;
