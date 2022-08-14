import React, { useState } from "react";
import Calendar from "react-calendar";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";

const SchedulePage = () => {
  const [value, onChange] = useState(new Date());
  console.log(value);
  const { user } = useAuth0();

  const handleSubmit = (e) => {
    // e.preventDefault();
    fetch(`/profiles/${user.email}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        appointment: value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <ScheduleDiv>
        <StyledCalendar onChange={onChange} value={value} />
        <ButtonDiv>
          <Button>Create Appointment</Button>
          <PandaMilk src="https://media.giphy.com/media/PeGgFlioo8EbstEQH4/giphy.gif" />
        </ButtonDiv>
      </ScheduleDiv>
    </form>
  );
};

const ScheduleDiv = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  align-items: center;
  background-color: mistyrose;
  height: 100vh;
  border-right: black solid 4px;
  border-left: black solid 4px;
  border-bottom: black solid 4px;
`;
const ButtonDiv = styled.div`
  display: flex;
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

const PandaMilk = styled.img`
  height: 30vh;
`;

const StyledCalendar = styled(Calendar)`
  margin-top: 40px;

  outline: 10px solid black;
`;

export default withAuthenticationRequired(SchedulePage, {
  // Show a message while the user waits to be redirected to the login page.
  onRedirecting: () => <div>Redirecting you to the login page...</div>,
});
