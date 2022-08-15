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
        <RecommendedTitleDiv>
          <StyledTitles>Basic Information</StyledTitles>
        </RecommendedTitleDiv>
        <BasicInfoDiv>
          <div>
            <p>|name: {userInfo.name} |</p>
            <p>|phone: {userInfo.phone}|</p>
          </div>
          <div>
            <p>|birthday: {userInfo.birthday}|</p>

            <p>|occupation: {userInfo.occupation}|</p>
          </div>
          <div>
            <p>|emergencyContact: {userInfo.emergencyContact}|</p>

            <p>|address: {userInfo.address}|</p>
          </div>

          <div>
            <p>|medication: {userInfo.medication}|</p>
            <p>|otherPhysicalActivity: {userInfo.otherPhysicalActivity}|</p>
          </div>
          <div>
            <p>|avoidAreas: {userInfo.avoidAreas}|</p>
            <p>|goals: {userInfo.goals}|</p>
          </div>
        </BasicInfoDiv>
        <RecommendedTitleDiv>
          <StyledTitles>Tension location</StyledTitles>
        </RecommendedTitleDiv>
        <TensionLocationDiv>
          {userInfo.head === true && "| head | "}
          {userInfo.neck === true && "| neck | "}
          {userInfo.leftShoulder === true && "| leftShoulder | "}
          {userInfo.RightShoulder === true && "| RightShoulder | "}
          {userInfo.leftArm === true && "| leftArm | "}
          {userInfo.rightArm === true && " | rightArm | "}
          {userInfo.upperback === true && "| upperback | "}
          {userInfo.loweback === true && "| loweback | "}
          {userInfo.leftLeg === true && "| leftLeg | "}
          {userInfo.rightLeg === true && "| rightLeg | "}
        </TensionLocationDiv>
        <RecommendedTitleDiv>
          <StyledTitles>Health issues</StyledTitles>
        </RecommendedTitleDiv>
        <HealthIssuesDiv>
          {userInfo.circulatory === true && " |circulatory system |"}
          {userInfo.digestive === true && " |digestive system |"}
          {userInfo.skin === true && " | skin |"}
          {userInfo.urinary === true && "| urinary system |"}
          {userInfo.lymphatic === true && " | lymphatic system |"}
          {userInfo.nervouse === true && "| nervouse system |"}
          {userInfo.muscular === true && " | muscular system |"}
          {userInfo.skeletal === true && " | keletal system |"}
          {userInfo.ebdocrine === true && "| ebdocrine system |"}
          {userInfo.respiratory === true && " | respiratory system |"}
        </HealthIssuesDiv>
        <RecommendedTitleDiv>
          <StyledTitles>Next appointment</StyledTitles>
        </RecommendedTitleDiv>
        <NextAppointmentDiv>
          <p>{userInfo.appointment}</p>
        </NextAppointmentDiv>
        <RecommendedTitleDiv>
          <StyledTitles>
            Recommended stretches
            <PandaImg src={require("../images/panda.png")} />
          </StyledTitles>
        </RecommendedTitleDiv>

        <RecommendedDiv>
          <div>
            {userInfo.neck && (
              <StretchImg src={require("../images/neckStretch.png")} />
            )}
          </div>
          <div>
            {userInfo.leftShoulder && (
              <StretchImg src={require("../images/shoulderStretch.png")} />
            )}
          </div>
          <div>
            {userInfo.upperback && (
              <StretchImg src={require("../images/back.png")} />
            )}
          </div>
          <div>
            {userInfo.loweback && (
              <StretchImg src={require("../images/lowerBackStretch.png")} />
            )}
          </div>
          <div>
            {userInfo.leftLeg && (
              <StretchImg src={require("../images/legStretch.png")} />
            )}
          </div>
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
  height: 90vh;
  border-right: black solid 4px;
  border-left: black solid 4px;
  border-bottom: black solid 4px;
`;

const StyledTitles = styled.h2`
  display: flex;
  justify-content: center;
  border-bottom: 3px gray solid;
`;

const BasicInfoDiv = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  gap: 30px;
  /* font-weight: bold; */
  font-size: 20px;
`;

const TensionLocationDiv = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
`;

const HealthIssuesDiv = styled.div`
  display: flex;
  justify-content: center;

  font-size: 20px;
`;

const NextAppointmentDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const PandaImg = styled.img`
  height: 100px;
  width: 100px;
  margin-top: -50px;
`;

const RecommendedTitleDiv = styled.div`
  display: flex;
  /* align-content: center; */
  justify-content: center;
  align-items: center;
`;

const RecommendedDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const StretchImg = styled.img`
  /* height: 200px; */
  width: 20vw;
  /* margin-left: -50px; */
`;

export default withAuthenticationRequired(FetchProfilepage, {
  // Show a message while the user waits to be redirected to the login page.
  onRedirecting: () => <div>Redirecting you to the login page...</div>,
});
