import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";
import FetchProfilePage from "./FetchProfilePage";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <div>
      <div>
        <NavLink to="/"> Home Page </NavLink>
        <NavLink to="/fetchprofilepage"> See profile </NavLink>
        <NavLink to="/createprofilepage"> Create Profile </NavLink>
        <NavLink to="/editprofilepage"> Update profile </NavLink>
        <NavLink to="/deleteprofilepage"> Delete profile </NavLink>
        <NavLink to="/scheduleappointment"> Appointment </NavLink>
        <Profile />
        {/* <FetchProfilePage /> */}
        {user ? <LogoutButton /> : <LoginButton />}
      </div>
    </div>
  );
};

export default NavBar;
