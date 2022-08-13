import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";
import FetchProfilePage from "./FetchProfilePage";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { AiFillCalendar } from "react-icons/ai";

import { FiUser } from "react-icons/fi";
import { FiUserCheck } from "react-icons/fi";
import { FiUserX } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import { FiHome } from "react-icons/fi";

const NavBar = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <div>
      <NavBarContainer>
        {/* <p>Welcome, {user.name}!</p> */}
        <StyledNavLink to="/">
          <FiHome size="3vw" />
          <IconName>Home Page</IconName>
        </StyledNavLink>
        <StyledNavLink to="/fetchprofilepage">
          <FiUser size="3vw" />
          <IconName>See profile</IconName>
        </StyledNavLink>
        <StyledNavLink to="/createprofilepage">
          <FiUserCheck size="3vw" />
          <IconName>Create Profile</IconName>
        </StyledNavLink>
        <StyledNavLink to="/editprofilepage">
          <FiUsers size="3vw" />
          <IconName>Update profile</IconName>
        </StyledNavLink>
        <StyledNavLink to="/deleteprofilepage">
          <FiUserX size="3vw" />
          <IconName>Delete profile</IconName>
        </StyledNavLink>
        <StyledNavLink to="/scheduleappointment">
          <FiCalendar size="3vw" />
          <IconName>Appointment</IconName>
        </StyledNavLink>

        {/* <FetchProfilePage /> */}
        {user ? <StyledLogoutButton /> : <LoginButton />}
      </NavBarContainer>
    </div>
  );
};

const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80vw;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  font-weight: bold;
  &:hover {
    color: red;
    cursor: pointer;
  }
`;

const IconName = styled.p`
  color: grey;
  margin-left: 0.5vw;
  /* font-size: 20px; */
`;

const StyledLogoutButton = styled(LogoutButton)`
  border: none;
`;
export default NavBar;
