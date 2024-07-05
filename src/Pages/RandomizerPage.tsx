import StudyDisplay from "../componets/StudyDisplay";
import CenteredButton from "../componets/CenteredButton";
import CenteredText from "../componets/CenteredText";

const RandomizerPage = () => {
  return (
    <div className="   justify-content-center align-items-center bg-orange vh-600 ">
      <div className="background-componet above-center">
        <CenteredText />
      </div>
      <div>
        <CenteredButton text="/welcome" textDisplay="Home" />
      </div>
      <div>
        <StudyDisplay></StudyDisplay>
      </div>
    </div>
  );
};

export default RandomizerPage;
