import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { withAuthenticationRequired } from "@auth0/auth0-react";

const EditProfilePage = () => {
  const { user } = useAuth0();
  const [userInfo, setUserInfo] = useState({
    name: "",
    // email: "",
    phone: "",
    medication: "",
    head: false,
    shoulders: false,
    arms: false,
    upperback: false,
    loweback: false,
  });

  const handleUserChange = (e) => {
    // e.preventDefault();
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    fetch(`/profiles/${user.email}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...userInfo,

        name: e.target.name.value,
        // email: e.target.email.value,
        phone: e.target.phone.value,
        medication: e.target.medication.value,
        head: e.target.head.checked,
        shoulders: e.target.shoulders.checked,
        arms: e.target.arms.checked,
        upperback: e.target.upperback.checked,
        loweback: e.target.loweback.checked,
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
      EditProfilePage
      <div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleUserChange}
            placeholder="Name here"
            name="name"
            type="text"
            required
          />
          {/* <input
            onChange={handleUserChange}
            placeholder="Email"
            name="email"
            type="email"
          /> */}
          <input
            onChange={handleUserChange}
            placeholder="phone Number"
            name="phone"
            type="number"
            required
          />
          <input
            onChange={handleUserChange}
            placeholder="Medication"
            name="medication"
            type="text"
            required
          />
          <div>
            Head
            <input
              type="checkbox"
              name="head"
              value="tension"
              onChange={handleUserChange}
            />
            shoulders
            <input
              type="checkbox"
              name="shoulders"
              value="tension"
              onChange={handleUserChange}
            />
            arms
            <input
              type="checkbox"
              name="arms"
              value="tension"
              onChange={handleUserChange}
            />
            upperback
            <input
              type="checkbox"
              name="upperback"
              value="tension"
              onChange={handleUserChange}
            />
            lowerback
            <input
              type="checkbox"
              name="loweback"
              value="tension"
              onChange={handleUserChange}
            />
          </div>
          <button>update profile</button>
        </form>
      </div>
    </div>
  );
};

export default withAuthenticationRequired(EditProfilePage, {
  // Show a message while the user waits to be redirected to the login page.
  onRedirecting: () => <div>Redirecting you to the login page...</div>,
});
