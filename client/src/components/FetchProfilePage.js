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
          <p>phone: {userInfo.phone}</p>
          <p>birthday: {userInfo.birthday}</p>
          <p>occupation: {userInfo.occupation}</p>
          <p>emergencyContact: {userInfo.emergencyContact}</p>
          <p>address: {userInfo.address}</p>
          <p>medication: {userInfo.medication}</p>
          <p>otherPhysicalActivity: {userInfo.otherPhysicalActivity}</p>
          <p>avoidAreas: {userInfo.avoidAreas}</p>
          <p>goals: {userInfo.goals}</p>
          <p>{userInfo.head === true && "Tension in head"}</p>
          <p>{userInfo.neck === true && "Tension in neck"}</p>
          <p>{userInfo.leftShoulder === true && "Tension in leftShoulder"}</p>
          <p>{userInfo.RightShoulder === true && "Tension in RightShoulder"}</p>
          <p>{userInfo.leftArm === true && "Tension in leftArm"}</p>
          <p>{userInfo.rightArm === true && "Tension in rightArm"}</p>
          <p>{userInfo.upperback === true && "Tension in upperback"}</p>
          <p>{userInfo.loweback === true && "Tension in loweback"}</p>
          <p>{userInfo.leftLeg === true && "Tension in leftLeg"}</p>
          <p>{userInfo.rightLeg === true && "Tension in rightLeg"}</p>
          <p>
            {userInfo.circulatory === true && "Issue with circulatory system"}
          </p>
          <p>{userInfo.digestive === true && "Issue with digestive system"}</p>
          <p>{userInfo.skin === true && "Issue with skin"}</p>
          <p>{userInfo.urinary === true && "Issue with urinary system"}</p>
          <p>{userInfo.lymphatic === true && "Issue with lymphatic system"}</p>
          <p>{userInfo.nervouse === true && "Issue with nervouse system"}</p>
          <p>{userInfo.muscular === true && "Issue with muscular system"}</p>
          <p>{userInfo.skeletal === true && "Issue with skeletal system"}</p>
          <p>{userInfo.ebdocrine === true && "Issue with ebdocrine system"}</p>
          <p>
            {userInfo.respiratory === true && "Issue with respiratory system"}
          </p>
          <p>Next Appoitment: {userInfo.appointment}</p>
        </div>
      </div>
    )
  );
};

export default withAuthenticationRequired(FetchProfilepage, {
  // Show a message while the user waits to be redirected to the login page.
  onRedirecting: () => <div>Redirecting you to the login page...</div>,
});
