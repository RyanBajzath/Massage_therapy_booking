import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { withAuthenticationRequired } from "@auth0/auth0-react";

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
    <div>
      DeleteUsePage<button onClick={userHandleDelete}>delete profile</button>
    </div>
  );
};

export default withAuthenticationRequired(DeleteUsePage, {
  // Show a message while the user waits to be redirected to the login page.
  onRedirecting: () => <div>Redirecting you to the login page...</div>,
});
