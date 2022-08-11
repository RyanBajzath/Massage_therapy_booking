import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";

const SchedulePage = () => {
  return <div>SchedulePage</div>;
};

export default withAuthenticationRequired(SchedulePage, {
  // Show a message while the user waits to be redirected to the login page.
  onRedirecting: () => <div>Redirecting you to the login page...</div>,
});
