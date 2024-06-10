import { Link } from "react-router-dom";

interface CenteredButtonProps {
  text: string;
  textDisplay: string;
}

const CenteredButton = ({ text, textDisplay }: CenteredButtonProps) => {
  return (
    <div>
      <Link to={text} className="btn btn-primary">
        {textDisplay}
      </Link>
    </div>
  );
};

export default CenteredButton;
