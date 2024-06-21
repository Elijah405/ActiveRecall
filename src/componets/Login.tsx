import { useEffect, useState, createContext } from "react";
import { jwtDecode } from "jwt-decode";
import CenteredButton from "../componets/CenteredButton";
import CenteredText from "../componets/CenteredText";

declare global {
  interface Window {
    google: any;
  }
}

interface GoogleAuthResponse {
  credential: string;
}

function Login() {
  const [user, setUser] = useState({});

  // const UserContext = createContext({});

  function handleCallbackResponse(response: GoogleAuthResponse) {
    console.log("Encoded JWT ID token: " + response.credential);
    const userObject = jwtDecode(response.credential);
    console.log(userObject);
    setUser(userObject);
  }

  useEffect(() => {
    /* global google */
    window.google.accounts.id.initialize({
      client_id:
        "656618212378-gbundb830lj2bksfpbvppi0tsktfc1fc.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    window.google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {
        theme: "outline",
        size: "large",
      }
    );
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-orange vh-100 ">
      <div className="background-componet above-center">
        <CenteredText />
      </div>

      <div id="signInDiv"></div>

      <div>
        {Object.keys(user).length > 0 ? (
          <div className="foreground-componet">
            <CenteredButton text="/welcome" textDisplay="Proceed" />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Login;
