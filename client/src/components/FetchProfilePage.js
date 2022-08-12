import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { withAuthenticationRequired } from "@auth0/auth0-react";

const FetchProfilepage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [userInfo, setUserInfo] = useState({});

  // console.log(user.email);

  useEffect(() => {
    fetch(`/profiles/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // console.log(userInfo);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <div>
          <p>name: {userInfo.name}</p>
          <p>Medication: {userInfo.medication}</p>
          <p>Phone: {userInfo.phone}</p>
          <p>email(ID): {userInfo._id} </p>
          <p>Appointment: {userInfo.appointment} </p>
          <p>{userInfo.head === true && "Tension in head"}</p>
          <p>{userInfo.shoulders === true && "Tension in shoulders"}</p>
          <p>{userInfo.arms === true && "Tension in arms"}</p>
          <p>{userInfo.upperback === true && "Tension in upperback"}</p>
          <p>{userInfo.loweback === true && "Tension in loweback"}</p>
        </div>
      </div>
    )
  );
};

export default withAuthenticationRequired(FetchProfilepage, {
  // Show a message while the user waits to be redirected to the login page.
  onRedirecting: () => <div>Redirecting you to the login page...</div>,
});
