import { useState, ChangeEvent, useContext } from "react";
import axios from "axios";
import ContextData from "./Context";

const FileUpload: React.FC = () => {
  const context = useContext(ContextData);
  if (!context) {
    throw new Error("ContextData must be used within a ContextProvider");
  }
  const { userData } = context;

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }

    if (!userData || !userData.sub) {
      alert("User data is not available.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("sub", userData.sub);

    axios
      .post("http://localhost:5000/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("File uploaded successfully:", response.data);
      })
      .catch((error) => {
        console.error("There was an error uploading the file:", error);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button className="btn btn-primary" onClick={handleUpload}>
        Upload
      </button>
    </div>
  );
};

export default FileUpload;
