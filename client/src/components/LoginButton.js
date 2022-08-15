import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <StyledLoginButton onClick={() => loginWithRedirect()}>
      Log In
    </StyledLoginButton>
  );
};

const StyledLoginButton = styled.button`
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
export default LoginButton;
