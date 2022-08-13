import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";
import FetchProfilePage from "./FetchProfilePage";
import { NavLink } from "react-router-dom";

function HomePage() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return <div></div>;
}

export default HomePage;
