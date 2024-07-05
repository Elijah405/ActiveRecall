import { useState, useEffect, useContext } from "react";
import axios from "axios";
import ContextData from "./Context";
import "./StudyDisplay.css";

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function StudyDisplay() {
  const [pdfUrls, setPdfUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const context = useContext(ContextData);

  if (!context) {
    throw new Error("ContextData must be used within a ContextProvider");
  }

  const { userData } = context;
  const userSub = userData?.sub;

  useEffect(() => {
    if (userSub) {
      axios
        .get("http://localhost:5000/api/pdfs", {
          headers: {
            "user-sub": userSub,
          },
        })
        .then((response) => {
          setPdfUrls(shuffleArray(response.data));
          setLoading(false);
        })
        .catch(() => {
          setError("Error fetching PDFs");
          setLoading(false);
        });
    }
  }, [userSub]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pdfUrls.length);
  };

  const getFileName = (url: string) => {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;
    const fileName = pathname.substring(pathname.lastIndexOf("/") + 1);
    return fileName.replace(/^\d+-/, "");
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (pdfUrls.length === 0) return <div>No PDFs found</div>;

  const pdfUrl = pdfUrls[currentIndex];
  const displayUrl = `${pdfUrl}#page=1&zoom=page-fit`;

  return (
    <div className="pdf-container">
      <div className="pdf-card">
        <div className="pdf-header">
          <a>{getFileName(pdfUrl)}</a>
        </div>
        <div className="pdf-body">
          <iframe
            src={displayUrl}
            width="100%"
            height="750px"
            title={getFileName(pdfUrl)}
            frameBorder="0"
          ></iframe>
        </div>
        <div className="pdf-footer">
          <button onClick={handleNext}>Next PDF</button>
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
            Open in new tab
          </a>
        </div>
      </div>
    </div>
  );
}

export default StudyDisplay;
