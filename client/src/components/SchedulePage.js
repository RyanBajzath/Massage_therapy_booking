import React, { useState } from "react";
import Calendar from "react-calendar";
import { withAuthenticationRequired } from "@auth0/auth0-react";

const SchedulePage = () => {
  const [value, onChange] = useState(new Date());
  console.log(value);

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default withAuthenticationRequired(SchedulePage, {
  // Show a message while the user waits to be redirected to the login page.
  onRedirecting: () => <div>Redirecting you to the login page...</div>,
});
