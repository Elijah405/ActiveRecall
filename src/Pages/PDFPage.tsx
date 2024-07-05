import ProblemDisplay from "../componets/ProblemDisplay";
import CenteredButton from "../componets/CenteredButton";
import CenteredText from "../componets/CenteredText";
import "./PDFPage.css";

function PDFPage() {
  return (
    <div className="   justify-content-center align-items-center bg-orange vh-600 ">
      <div className="background-componet above-center">
        <CenteredText />
      </div>

      <div>
        <CenteredButton text="/welcome" textDisplay="Home" />
      </div>
      <div>
        <ProblemDisplay />
      </div>
    </div>
  );
}

export default PDFPage;
