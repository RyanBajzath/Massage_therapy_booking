import React from "react";
import { GoogleLogin } from "react-google-login";
import { GoogleLogout } from "react-google-login";
import axios from "axios";

const HomePage = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };
  const responseFailure = (error) => {
    console.log(error);
  };
  return (
    <>
      <div>
        <h1>HomePage</h1>
      </div>
      <div>
        <GoogleLogin
          clientId="765089730021-2dclaifq7jpcc6miifgr9bkqngc1jt0f.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseFailure}
          cookiePolicy={"single_host_origin"}
          //get refresh tokin

          responseType="code"
          scope="openid email profile https://www.googleapis.com/auth/calendar"
        />
        <GoogleLogout
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Logout"
        />
      </div>
    </>
  );
};

export default HomePage;
