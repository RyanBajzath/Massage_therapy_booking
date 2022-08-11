import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const FetchProfilepage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [userInfo, setUserInfo] = useState({});

  console.log(user.email);

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
        </div>
      </div>
    )
  );
};

export default FetchProfilepage;
