import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";
import FetchProfilePage from "./FetchProfilePage";

function HomePage() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <div>
      HomePage
      <div>
        <Profile />
        {/* <FetchProfilePage /> */}
        {user ? <LogoutButton /> : <LoginButton />}
      </div>
    </div>
  );
}

export default HomePage;
