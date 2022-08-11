import React, { useContext, useState } from "react";

const CreateProfilePage = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [userMedication, setUserMedication] = useState("");

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
    console.log(userName);
  };

  const handleEmailChange = (event) => {
    setUserEmail(event.target.value);
  };

  const handlephoneChange = (event) => {
    setUserPhoneNumber(event.target.value);
  };

  const handleMedicationChange = (event) => {
    setUserMedication(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:8000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userName,
        email: userEmail,
        phone: userPhoneNumber,
        medication: userMedication,
        _id: userEmail,
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
            onChange={handleUserNameChange}
            placeholder="Name here"
            name="name"
            type="text"
          />
          <input
            onChange={handleEmailChange}
            placeholder="Email"
            name="email"
            type="email"
          />
          <input
            onChange={handlephoneChange}
            placeholder="phone Number"
            name="phone number"
            type="number"
          />
          <input
            onChange={handleMedicationChange}
            placeholder="Medication"
            name="Medication"
            type="text"
          />
          <button>Create Profile</button>
        </form>
      </div>
    </div>
  );
};

export default CreateProfilePage;
