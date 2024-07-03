import { useState, useEffect, useContext } from "react";
import axios from "axios";
import ContextData from "./Context";
import "./ProblemDisplay.css";

function ProblemDisplay() {
  const [pdfUrls, setPdfUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
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
          setPdfUrls(response.data);
          setLoading(false);
        })
        .catch(() => {
          setError("Error fetching PDFs");
          setLoading(false);
        });
    }
  }, [userSub]);

  const getFileName = (url: string) => {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;
    const fileName = pathname.substring(pathname.lastIndexOf("/") + 1);
    return fileName.replace(/^\d+-/, "");
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  //   return (
  //     <div className="grid">
  //       {pdfUrls.map((url, index) => (
  //         <div key={index} className="pdf-box">
  //           <object
  //             data={url}
  //             type="application/pdf"
  //             width="100%"
  //             height="500px"
  //             aria-label={`PDF ${index + 1}`}
  //           >
  //             <a href={url}>View PDF {index + 1}</a>
  //           </object>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // }

  return (
    <div className="pdf-container">
      {pdfUrls.map((url, index) => (
        <div key={index} className="pdf-card">
          <div className="pdf-header">
            <a>{getFileName(url)}</a>
          </div>
          <div className="pdf-body">
            <iframe
              src={url}
              width="100%"
              height="500px"
              title={getFileName(url)}
              frameBorder="0"
            ></iframe>
          </div>
          <div className="pdf-footer">
            {/* <a href={url} target="_blank" rel="noopener noreferrer">
              Open in new tab
            </a> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProblemDisplay;
