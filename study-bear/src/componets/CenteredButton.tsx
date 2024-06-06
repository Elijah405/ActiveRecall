import { Link } from "react-router-dom";

const CenteredButton = () => {
  return (
    <div className="d flex justify-content-center align-items-center vh-100 ">
      <Link to="/login" className="btn btn-primary">
        Go to new page
      </Link>
    </div>
  );
};

export default CenteredButton;
