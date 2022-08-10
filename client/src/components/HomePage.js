import React from "react";
import LoginButton from "./LoginButton";
import Profile from "./Profile";

function HomePage() {
  return (
    <div>
      HomePage
      <div>
        <Profile />
        <LoginButton />
      </div>
    </div>
  );
}

export default HomePage;
