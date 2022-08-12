import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { withAuthenticationRequired } from "@auth0/auth0-react";

const CreateProfilePage = () => {
  const { user } = useAuth0();
  console.log(user);
  // const [userName, setUserName] = useState("");
  // const [userEmail, setUserEmail] = useState("");
  // const [userPhoneNumber, setUserPhoneNumber] = useState("");
  // const [userMedication, setUserMedication] = useState("");

  //updated for all values in one object
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

  //one handle change for all the values in a dyncamic nature
  const handleUserChange = (e) => {
    // e.preventDefault();
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  // here is the older way I did
  // const handleUserNameChange = (event) => {
  //   setUserName(event.target.value);
  // };

  // const handleEmailChange = (event) => {
  //   setUserEmail(event.target.value);
  // };

  // const handlephoneChange = (event) => {
  //   setUserPhoneNumber(event.target.value);
  // };

  // const handleMedicationChange = (event) => {
  //   setUserMedication(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   fetch("/profiles", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name: userName,
  //       email: userEmail,
  //       phone: userPhoneNumber,
  //       medication: userMedication,
  //       _id: userEmail,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Success:", data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // };

  const handleSubmit = (e) => {
    // e.preventDefault();
    fetch("/profiles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...userInfo,

        name: e.target.name.value,
        // email: e.target.email.value,
        phone: e.target.phone.value,
        medication: e.target.medication.value,
        _id: user.email,
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
      CreateProfile
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

          <button>Create Profile</button>
        </form>
      </div>
    </div>
  );
};

export default withAuthenticationRequired(CreateProfilePage, {
  // Show a message while the user waits to be redirected to the login page.
  onRedirecting: () => <div>Redirecting you to the login page...</div>,
});
