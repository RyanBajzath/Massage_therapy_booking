import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const CreateProfilePage = () => {
  const { user } = useAuth0();
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
  });

  //one handle change for all the values in a dyncamic nature
  const handleUserChange = (e) => {
    e.preventDefault();
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
    e.preventDefault();
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
          />
          <input
            onChange={handleUserChange}
            placeholder="Medication"
            name="medication"
            type="text"
          />
          <button>Create Profile</button>
        </form>
      </div>
    </div>
  );
};

export default CreateProfilePage;
