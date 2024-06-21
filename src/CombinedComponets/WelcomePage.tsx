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
        <CenteredButton text="/upload" textDisplay="Upload Pdf" />
      </div>

      <div className="foreground-componet">
        <CenteredButton text="/view" textDisplay="Uploads" />
      </div>

      <div className="foreground-componet">
        <CenteredButton text="/study" textDisplay="Study" />
      </div>
    </div>
  );
}

export default WelcomePage;
