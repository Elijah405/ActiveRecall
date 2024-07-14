import { useEffect, useContext, useState } from "react";
import axios from "axios";
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
  const [flag, setFlag] = useState<boolean>(false);
  const [flag2, setFlag2] = useState<boolean>(true);
  const context = useContext(ContextData);

  if (!context) {
    throw new Error("ContextData must be used within a ContextProvider");
  }

  const { userData, setData } = context;

  async function handleCallbackResponse(response: GoogleAuthResponse) {
    try {
      const res = await axios.post("http://localhost:5000/auth/google", {
        token: response.credential,
      });

      if (res.status === 200) {
        const userObject = jwtDecode<userToken>(response.credential);
        setData(userObject);
        setFlag(true);
        setFlag2(true);
      } else {
        console.error("Authentication failed", res.data.message);
        setFlag2(false);
        setFlag(false);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Authentication failed", error.response?.data.message);
      } else {
        console.error("An unexpected error occurred", error);
      }
    }
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
  console.log(userData);
  console.log(flag2);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-orange vh-100 ">
      <div className="background-componet above-center">
        <CenteredText />
      </div>

      <div id="signInDiv"></div>

      {flag && userData && Object.keys(userData).length > 0 ? (
        <div className="foreground-componet">
          <CenteredButton text="/welcome" textDisplay="Proceed" />
        </div>
      ) : null}

      {!flag2 ? (
        <div className="foreground-componet">
          <h3>Authentication Failed. Please Try Again.</h3>
        </div>
      ) : null}
    </div>
  );
}

export default Login;
