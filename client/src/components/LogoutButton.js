import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <StyledLogoutButton
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Log Out
    </StyledLogoutButton>
  );
};

const StyledLogoutButton = styled.button`
  border: none;
  background-color: rgb(255, 255, 186);
  padding: 10px;
  border-radius: 10px;
  font-weight: bold;
  border: 3px black solid;
  &:active {
    transform: translateY(4px);
  }
`;

export default LogoutButton;
