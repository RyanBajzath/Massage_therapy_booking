import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import styled from "styled-components";

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
      <ProfileInfoDiv>
        <h2>Basic Information</h2>
        <BasicInfoDiv>
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
        </BasicInfoDiv>
        <h2>Tension location</h2>
        <TensionLocationDiv>
          <p>{userInfo.head === true && "head"}</p>
          <p>{userInfo.neck === true && "neck"}</p>
          <p>{userInfo.leftShoulder === true && "leftShoulder"}</p>
          <p>{userInfo.RightShoulder === true && "RightShoulder"}</p>
          <p>{userInfo.leftArm === true && "leftArm"}</p>
          <p>{userInfo.rightArm === true && "rightArm"}</p>
          <p>{userInfo.upperback === true && "upperback"}</p>
          <p>{userInfo.loweback === true && "loweback"}</p>
          <p>{userInfo.leftLeg === true && "leftLeg"}</p>
          <p>{userInfo.rightLeg === true && "rightLeg"}</p>
        </TensionLocationDiv>
        <h2>Health issues</h2>
        <HealthIssuesDiv>
          <p>{userInfo.circulatory === true && "circulatory system"}</p>
          <p>{userInfo.digestive === true && "digestive system"}</p>
          <p>{userInfo.skin === true && "skin"}</p>
          <p>{userInfo.urinary === true && "urinary system"}</p>
          <p>{userInfo.lymphatic === true && "lymphatic system"}</p>
          <p>{userInfo.nervouse === true && "nervouse system"}</p>
          <p>{userInfo.muscular === true && "muscular system"}</p>
          <p>{userInfo.skeletal === true && "skeletal system"}</p>
          <p>{userInfo.ebdocrine === true && "ebdocrine system"}</p>
          <p>{userInfo.respiratory === true && "respiratory system"}</p>
        </HealthIssuesDiv>
        <div>
          <h2>Next appointment</h2>
          <p>{userInfo.appointment}</p>
        </div>
        <h2>Recommended stretches</h2>

        <RecommendedDiv>
          <PandaImg src={require("../images/panda.png")} />
          <div>
            {userInfo.neck && (
              <StretchImg src={require("../images/neckStretch.png")} />
            )}
          </div>
          <div>
            {userInfo.LeftShoulder && (
              <StretchImg src={require("../images/shoulderStretch.png")} />
            )}
          </div>
          {/* <div>
            {userInfo.RightShoulder && (
              <img src={require("../images/shoulderStretch.png")} />
            )}
          </div> */}
          {/* <div>
            {userInfo.leftArm && (
              <img src={require("../images/neckStretch.png")} />
            )}
          </div>
          <div>
            {userInfo.rightArm && (
              <img src={require("../images/neckStretch.png")} />
            )}
          </div> */}
          <div>
            <p>
              {userInfo.upperback && (
                <StretchImg src={require("../images/back.png")} />
              )}
            </p>
          </div>
          <div>
            <p>
              {userInfo.loweback && (
                <StretchImg src={require("../images/lowerBackStretch.png")} />
              )}
            </p>
          </div>
          <div>
            <p>
              {userInfo.leftLeg && (
                <StretchImg src={require("../images/legStretch.png")} />
              )}
            </p>
          </div>
          {/* <div>
            {userInfo.rightLeg && (
              <img src={require("../images/legStretch.png")} />
            )}
          </div> */}
        </RecommendedDiv>
      </ProfileInfoDiv>
    )
  );
};

const ProfileInfoDiv = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  /* align-items: center; */
  background-color: mistyrose;
  height: 100vh;
  border-right: black solid 4px;
  border-left: black solid 4px;
  border-bottom: black solid 4px;
`;

const BasicInfoDiv = styled.div`
  display: flex;
  gap: 20px;
  /* font-weight: bold; */
  font-size: 20px;
  margin-left: 20px;
`;

const TensionLocationDiv = styled.div`
  display: flex;
  gap: 20px;
  font-size: 20px;
  margin-left: 20px;
`;

const HealthIssuesDiv = styled.div`
  display: flex;
  gap: 20px;
  font-size: 20px;
  margin-left: 20px;
`;

const PandaImg = styled.img`
  height: 150px;
  width: 150px;
`;

const RecommendedDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 20px;
`;
const StretchImg = styled.img`
  /* height: 200px; */
  width: 300px;
  /* margin-left: -50px; */
`;

export default withAuthenticationRequired(FetchProfilepage, {
  // Show a message while the user waits to be redirected to the login page.
  onRedirecting: () => <div>Redirecting you to the login page...</div>,
});
