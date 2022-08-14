import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import styled from "styled-components";

const DeleteUsePage = () => {
  const { user } = useAuth0();

  const userHandleDelete = (e) => {
    e.preventDefault();
    fetch(`/profiles/${user.email}`, {
      method: "DELETE",
    })
      .then((res) => res.json()) // or res.json()
      .then((res) => {
        res.status === 404 && alert("already deleted");
        res.status === 200 && alert("Profile Deleted");
        console.log(res.status);
      });
  };

  return (
    <DeleProfileContainer>
      <ButtonDiv>
        <PandaSad src="https://media.giphy.com/media/AcfLX2WCoOue5grXMo/giphy.gif" />
        <Button onClick={userHandleDelete}>delete profile</Button>
        <h1>You can always create a new file after!</h1>
      </ButtonDiv>
    </DeleProfileContainer>
  );
};

const DeleProfileContainer = styled.div`
  display: flex;
  /* align-content: center; */
  flex-direction: column;
  background-color: mistyrose;
  height: 100vh;
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
`;

const PandaSad = styled.img`
  height: 50vh;
`;

export default withAuthenticationRequired(DeleteUsePage, {
  // Show a message while the user waits to be redirected to the login page.
  onRedirecting: () => <div>Redirecting you to the login page...</div>,
});
