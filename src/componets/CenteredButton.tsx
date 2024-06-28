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

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/')
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//     cb(null, file.fieldname + '-' + uniqueSuffix)
//   }
// })

// const upload = multer({ storage })

// app.post('/api/upload', upload.single('file'), (req, res) => {
//   console.log('Received file upload request');
//     res.json(req.file);
// });
