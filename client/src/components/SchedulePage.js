import React, { useState } from "react";
import Calendar from "react-calendar";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { useAuth0 } from "@auth0/auth0-react";

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
    <div>
      <form onSubmit={handleSubmit}>
        <Calendar onChange={onChange} value={value} />
        <button>Create Appointment</button>
      </form>
    </div>
  );
};

export default withAuthenticationRequired(SchedulePage, {
  // Show a message while the user waits to be redirected to the login page.
  onRedirecting: () => <div>Redirecting you to the login page...</div>,
});
