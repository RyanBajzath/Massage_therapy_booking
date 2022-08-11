import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const EditProfilePage = () => {
  const { user } = useAuth0();
  const [userInfo, setUserInfo] = useState({
    name: "",
    // email: "",
    phone: "",
    medication: "",
  });

  const handleUserChange = (e) => {
    e.preventDefault();
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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

export default EditProfilePage;
