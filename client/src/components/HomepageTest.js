import React from "react";
import GoogleLogin from "react-google-login";

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

          responseType={"code"}
          accessType={"online"}
          scope={
            "openid email profile https://www.googleapis.com/auth/calendar"
          }
        />
      </div>
    </>
  );
};

export default HomePage;
