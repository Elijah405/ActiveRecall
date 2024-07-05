import CenteredText from "../componets/CenteredText";
import FileUpload from "../componets/FileUpload";
import CenteredButton from "../componets/CenteredButton";

const UploadPage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-orange vh-100 ">
      <div className="background-componet above-center">
        <CenteredText />
      </div>

      <div className="foreground-componet">
        <FileUpload />
      </div>
      <div>
        <CenteredButton text="/welcome" textDisplay="Home" />
      </div>
    </div>
  );
};

export default UploadPage;
