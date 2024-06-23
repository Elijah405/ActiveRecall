import { useEffect, useContext } from "react";
import { jwtDecode } from "jwt-decode";
import CenteredButton from "../componets/CenteredButton";
import CenteredText from "../componets/CenteredText";
import ContextData, { userToken } from "./Context";

declare global {
  interface Window {
    google: any;
  }
}

interface GoogleAuthResponse {
  credential: string;
}

function Login() {
  const context = useContext(ContextData);

  if (!context) {
    throw new Error("ContextData must be used within a ContextProvider");
  }

  const { userData, setData } = context;

  function handleCallbackResponse(response: GoogleAuthResponse) {
    console.log("Encoded JWT ID token: " + response.credential);
    const userObject = jwtDecode<userToken>(response.credential);
    console.log(userObject);
    setData(userObject);
    console.log({ userData });
  }

  useEffect(() => {
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
        {userData && Object.keys(userData).length > 0 ? (
          <div className="foreground-componet">
            <CenteredButton text="/welcome" textDisplay="Proceed" />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Login;
