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
import { FiPhone } from "react-icons/fi";

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
        {user && (
          <StyledNavLink to="/fetchprofilepage">
            <FiUser size="3vw" />
            <IconName>See profile</IconName>
          </StyledNavLink>
        )}

        <StyledNavLink to="/editprofilepage">
          <FiUsers size="3vw" />
          <IconName>Update profile</IconName>
        </StyledNavLink>
        <StyledNavLink to="/aboutuspage">
          <FiPhone size="3vw" />
          <IconName>About Us</IconName>
        </StyledNavLink>
        <StyledNavLink to="/scheduleappointment">
          <FiCalendar size="3vw" />
          <IconName>Appointment</IconName>
        </StyledNavLink>

        {/* <FetchProfilePage /> */}
        {user ? <LogoutButton /> : <LoginButton />}
      </NavBarContainer>
    </div>
  );
};

const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* width: 80vw; */
  /* background-color: rgba(0, 0, 0, 0.05); */
  background-color: rgba(183, 246, 247, 0.5);

  border: 3px black solid;
  height: 10vh;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  font-weight: bold;
  padding: 15px;
  &:hover {
    cursor: pointer;
    outline: solid black 3px;
  }
`;

const IconName = styled.p`
  color: grey;
  margin-left: 0.25vw;
  /* font-size: 20px; */
`;

export default NavBar;
