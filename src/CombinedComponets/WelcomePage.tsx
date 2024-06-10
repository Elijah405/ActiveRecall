import CenteredText from "../componets/CenteredText";
import CenteredButton from "../componets/CenteredButton";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WelcomePage.css";

function WelcomePage() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-orange vh-100 ">
      <div className="background-componet above-center">
        <CenteredText />
      </div>

      <div className="foreground-componet">
        <CenteredButton />
      </div>
    </div>
  );
}

export default WelcomePage;
