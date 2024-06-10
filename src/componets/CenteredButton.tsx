import { Link } from "react-router-dom";

const CenteredButton = () => {
  return (
    <div>
      <Link to="/login" className="btn btn-primary">
        Upload Pdf
      </Link>
    </div>
  );
};

export default CenteredButton;
