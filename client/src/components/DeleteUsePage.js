import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { LogoutButton } from "./LogoutButton";

const DeleteUsePage = () => {
  const { user } = useAuth0();
  const { logout } = useAuth0();

  const userHandleDelete = (e) => {
    e.preventDefault();
    fetch(`/profiles/${user.email}`, {
      method: "DELETE",
    })
      // .then((res) => res.json()) // or res.json()
      .then((res) => {
        res.status === 404 && Swal.fire("Already Deleted, Logging out.");
        res.status === 204 && Swal.fire("Profile Deleted, Logging out.");
        console.log(res.status);
      })
      // .then(() => logout({ returnTo: window.location.origin }));
      .then(
        setTimeout(() => logout({ returnTo: window.location.origin }), 5000)
      );
  };

  return (
    <DeleProfileContainer>
      <ButtonDiv>
        <PandaSad src="https://media.giphy.com/media/AcfLX2WCoOue5grXMo/giphy.gif" />
        <Button onClick={userHandleDelete}>delete profile</Button>
        <h1>You can always create a new Profile</h1>
      </ButtonDiv>
    </DeleProfileContainer>
  );
};

const DeleProfileContainer = styled.div`
  display: flex;
  /* align-content: center; */
  flex-direction: column;
  background-color: mistyrose;
  height: 90vh;
  border-right: black solid 4px;
  border-left: black solid 4px;
  border-bottom: black solid 4px;
`;
const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin-top: 30px; */

  align-items: center;
`;

const Button = styled.button`
  /* text-decoration: none; */
  border-radius: 18px;
  font-size: 50px;
  border: 3px black solid;
  background-color: RGB(149, 125, 173);
  max-height: 10vh;
  &:active {
    transform: translateY(4px);
  }
`;

const PandaSad = styled.img`
  height: 50vh;
`;

export default withAuthenticationRequired(DeleteUsePage, {
  // Show a message while the user waits to be redirected to the login page.
  onRedirecting: () => <div>Redirecting you to the login page...</div>,
});
