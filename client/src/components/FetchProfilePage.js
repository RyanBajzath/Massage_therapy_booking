import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import styled from "styled-components";
import moment from "moment";
import { NavLink } from "react-router-dom";
import { FiUsers } from "react-icons/fi";

const FetchProfilepage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [userInfo, setUserInfo] = useState({});
  let date = "nothing";

  if (userInfo.appointment) {
    date = moment(userInfo.appointment).format("  MMMM Do YYYY ");
  }

  useEffect(() => {
    fetch(`/profiles/${user.sub}`)
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(userInfo);

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
          <p>{date}</p>
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
            {userInfo.RightShoulder && (
              <StretchImg
                style={{ transform: "scaleX(-1)" }}
                src={require("../images/shoulderStretch.png")}
              />
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
          <div>
            {userInfo.rightLeg && (
              <StretchImg
                style={{ transform: "scaleX(-1)" }}
                src={require("../images/legStretch.png")}
              />
            )}
          </div>
        </RecommendedDiv>
        <StyledNavLink to="/editprofilepage">
          <FiUsers size="3vw" />
          <IconName>Update profile</IconName>
        </StyledNavLink>
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
  margin-bottom: 15px;
  margin-top: 15px;
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
  width: 25vw;
  /* margin-left: -50px; */
`;
const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  width: fit-content;
  position: absolute;
  /* right: 1vw; */

  text-decoration: none;
  color: black;
  left: 4px;
  font-weight: bold;
  padding: 20px;
  color: black;
  outline: solid black 3px;
  background-color: rgb(255, 253, 217);
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    /* outline: solid black 5px; */
  }
`;
const IconName = styled.p`
  color: grey;
  margin-left: 0.25vw;

  /* font-size: 20px; */
`;
export default withAuthenticationRequired(FetchProfilepage, {
  // Show a message while the user waits to be redirected to the login page.
  onRedirecting: () => <div>Redirecting you to the login page...</div>,
});
