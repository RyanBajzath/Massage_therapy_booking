import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const DeleteUsePage = () => {
  const { user } = useAuth0();

  const userHandleDelete = (e) => {
    e.preventDefault();
    fetch(`/profiles/${user.email}`, {
      method: "DELETE",
    })
      .then((res) => res.text()) // or res.json()
      .then((res) => console.log(res));
  };

  return (
    <div>
      DeleteUsePage<button onClick={userHandleDelete}>delete profile</button>
    </div>
  );
};

export default DeleteUsePage;
