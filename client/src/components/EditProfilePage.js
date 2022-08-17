import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import DeleteUsePage from "./DeleteUsePage";

const EditProfilePage = () => {
  const { user } = useAuth0();
  const [userInfo, setUserInfo] = useState({
    name: "",
    // email: "",
    phone: "",
    birthday: "",
    occupation: "",
    emergencyContact: "",
    address: "",
    medication: "",
    otherPhysicalActivity: "",
    head: false,
    neck: false,
    leftShoulder: false,
    RightShoulder: false,
    leftArm: false,
    rightArm: false,
    upperback: false,
    loweback: false,
    leftLeg: false,
    rightLeg: false,
    circulatory: false,
    digestive: false,
    skin: false,
    urinary: false,
    lymphatic: false,
    nervouse: false,
    muscular: false,
    skeletal: false,
    ebdocrine: false,
    respiratory: false,
    avoidAreas: "",
    name: "",
    appointment: "none yet",
  });

  const handleUserChange = (e) => {
    // e.preventDefault();
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

        _id: user.email,
        name: e.target.name.value,
        phone: e.target.phone.value,
        birthday: e.target.birthday.value,
        occupation: e.target.occupation.value,
        emergencyContact: e.target.emergencyContact.value,
        address: e.target.address.value,
        medication: e.target.medication.value,
        otherPhysicalActivity: e.target.otherPhysicalActivity.value,
        avoidAreas: e.target.avoidAreas.value,

        // email: e.target.email.value,

        head: e.target.head.checked,
        neck: e.target.neck.checked,
        leftShoulder: e.target.leftShoulder.checked,
        RightShoulder: e.target.RightShoulder.checked,
        leftArm: e.target.leftArm.checked,
        rightArm: e.target.rightArm.checked,
        upperback: e.target.upperback.checked,
        loweback: e.target.loweback.checked,
        leftLeg: e.target.leftLeg.checked,
        rightLeg: e.target.rightLeg.checked,
        circulatory: e.target.circulatory.checked,
        digestive: e.target.digestive.checked,
        skin: e.target.skin.checked,
        urinary: e.target.urinary.checked,
        lymphatic: e.target.lymphatic.checked,
        nervouse: e.target.nervouse.checked,
        muscular: e.target.muscular.checked,
        skeletal: e.target.skeletal.checked,
        ebdocrine: e.target.ebdocrine.checked,
        respiratory: e.target.respiratory.checked,

        appointment: "none",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        data.status === 200 &&
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Profile Updated",
            footer: '<a href="/fetchprofilepage">View Profile</a>',
          });
        data.status === 404 &&
          Swal.fire({
            icon: "error",
            title: "Failure",
            text: "Profile Needs to be created",
            footer: '<a href="/createprofilepage">Go to Create Profile</a>',
          });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <CreateProfileContainer>
      <form onSubmit={handleSubmit}>
        <StyledTitle>Basic Info</StyledTitle>
        <BasicInfoDiv>
          {/* <BasicInfoDivTop> */}
          {/* <span>Name:</span>
           */}
          <LittleBox>
            <label for="name">First name:</label>
            <input
              onChange={handleUserChange}
              placeholder="Name here"
              name="name"
              type="text"
              required
            />
            {/* </div> */}
            {/* <div> */}
            <label for="phone">Phone :</label>
            <input
              onChange={handleUserChange}
              placeholder="Phone number here"
              name="phone"
              type="text"
              required
            />
          </LittleBox>
          <LittleBox>
            <label for="birthday">Birthday :</label>
            <input
              onChange={handleUserChange}
              placeholder="birthday here"
              name="birthday"
              type="text"
              required
            />
            {/* </div>
            <div> */}
            <label for="occupation">Occupation :</label>
            <input
              onChange={handleUserChange}
              placeholder="Occupation here"
              name="occupation"
              type="text"
              required
            />
          </LittleBox>
          {/* </BasicInfoDivTop>
          <BasicInfoDivBottom> */}
          <LittleBox>
            <span>Emergency Contact:</span>
            <input
              onChange={handleUserChange}
              placeholder="Emergency Contact here"
              name="emergencyContact"
              type="text"
              required
            />

            <span>Address:</span>
            <input
              onChange={handleUserChange}
              placeholder="Address Number"
              name="address"
              type="text"
              required
            />
          </LittleBox>
          <LittleBox>
            <span>Medication</span>
            <input
              onChange={handleUserChange}
              placeholder="Medication"
              name="medication"
              type="text"
              required
            />

            <span>Any other physical activity?:</span>
            <input
              onChange={handleUserChange}
              placeholder="other physical activity"
              name="otherPhysicalActivity"
              type="text"
              required
            />
          </LittleBox>
          {/* </BasicInfoDivBottom> */}
        </BasicInfoDiv>
        <StyledTitle>Where do you have tension?</StyledTitle>
        <TensionDiv>
          <LittleBox>
            <div>
              <span>Head</span>
              <input
                type="checkbox"
                name="head"
                value="tension"
                onChange={handleUserChange}
              />
            </div>
            <div>
              <span>Neck</span>
              <input
                type="checkbox"
                name="neck"
                value="tension"
                onChange={handleUserChange}
              />
            </div>
          </LittleBox>
          <LittleBox>
            <div>
              <span>Left shoulder</span>
              <input
                type="checkbox"
                name="leftShoulder"
                value="tension"
                onChange={handleUserChange}
              />
            </div>
            <div>
              <span>Right shoulder</span>
              <input
                type="checkbox"
                name="RightShoulder"
                value="tension"
                onChange={handleUserChange}
              />
            </div>
          </LittleBox>
          <LittleBox>
            <div>
              <span>Left arm</span>
              <input
                type="checkbox"
                name="leftArm"
                value="tension"
                onChange={handleUserChange}
              />
            </div>
            <div>
              <span>Right arm</span>
              <input
                type="checkbox"
                name="rightArm"
                value="tension"
                onChange={handleUserChange}
              />{" "}
            </div>{" "}
          </LittleBox>
          <LittleBox>
            <div>
              <span>Upperback</span>
              <input
                type="checkbox"
                name="upperback"
                value="tension"
                onChange={handleUserChange}
              />{" "}
            </div>{" "}
            <div>
              <span>Lower Back</span>
              <input
                type="checkbox"
                name="loweback"
                value="tension"
                onChange={handleUserChange}
              />{" "}
            </div>{" "}
          </LittleBox>
          <LittleBox>
            <div>
              <span>Left Leg</span>
              <input
                type="checkbox"
                name="leftLeg"
                value="tension"
                onChange={handleUserChange}
              />{" "}
            </div>{" "}
            <div>
              <span>Right Leg</span>
              <input
                type="checkbox"
                name="rightLeg"
                value="tension"
                onChange={handleUserChange}
              />
            </div>
          </LittleBox>
        </TensionDiv>
        <StyledTitle>Select those that apply</StyledTitle>
        <HealthIssuesDiv>
          <LittleBox>
            <div>
              <span>Circulatory issues</span>
              <input
                type="checkbox"
                name="circulatory"
                value="tension"
                onChange={handleUserChange}
              />
            </div>
            <div>
              <span>Digestive Issues</span>
              <input
                type="checkbox"
                name="digestive"
                value="tension"
                onChange={handleUserChange}
              />
            </div>
          </LittleBox>

          <LittleBox>
            <div>
              <span>Skin Condition</span>
              <input
                type="checkbox"
                name="skin"
                value="tension"
                onChange={handleUserChange}
              />
            </div>
            <div>
              <span>Urinary system issues</span>
              <input
                type="checkbox"
                name="urinary"
                value="tension"
                onChange={handleUserChange}
              />{" "}
            </div>
          </LittleBox>

          <LittleBox>
            <div>
              <span>Lymphatic system issues</span>
              <input
                type="checkbox"
                name="lymphatic"
                value="tension"
                onChange={handleUserChange}
              />
            </div>
            <div>
              <span>Nervouse system issues</span>
              <input
                type="checkbox"
                name="nervouse"
                value="tension"
                onChange={handleUserChange}
              />
            </div>
          </LittleBox>

          <LittleBox>
            <div>
              <span>Muscular system isues</span>
              <input
                type="checkbox"
                name="muscular"
                value="tension"
                onChange={handleUserChange}
              />
            </div>
            <div>
              <span>Skeletal system issues</span>
              <input
                type="checkbox"
                name="skeletal"
                value="tension"
                onChange={handleUserChange}
              />
            </div>
          </LittleBox>
          <LittleBox>
            <div>
              <span>Ebdocrine system issues</span>
              <input
                type="checkbox"
                name="ebdocrine"
                value="tension"
                onChange={handleUserChange}
              />
            </div>
            <div>
              <span>Respiratory system issues</span>
              <input
                type="checkbox"
                name="respiratory"
                value="tension"
                onChange={handleUserChange}
              />
            </div>
          </LittleBox>
        </HealthIssuesDiv>
        <StyledTitle>Massage Session information</StyledTitle>
        <SessioninfoDiv>
          <div>
            <span>Please list any areas you wish us to avoid:</span>
            <input
              onChange={handleUserChange}
              placeholder="Avoid areas"
              name="avoidAreas"
              type="text"
              required
            />
          </div>
          <div>
            <span>Session Goals:</span>
            <input
              onChange={handleUserChange}
              placeholder="goals here"
              name="goals"
              type="text"
              required
            />
          </div>
        </SessioninfoDiv>
        <ButtonDiv>
          <Button>Update Profile</Button>
          <PandaMilk src="https://media.giphy.com/media/1PXZZyQwpdfzYkmS3R/giphy.gif" />
        </ButtonDiv>
      </form>
      <StyledNavLink to="/deleteprofilepage">
        <IconName>Delete profile</IconName>
      </StyledNavLink>
    </CreateProfileContainer>
  );
};

const CreateProfileContainer = styled.div`
  display: flex;
  /* align-content: center; */
  /* flex-direction: column; */
  background-color: mistyrose;
  height: 90vh;
  border-right: black solid 4px;
  border-left: black solid 4px;
  border-bottom: black solid 4px;
`;

const StyledTitle = styled.h2`
  display: flex;
  border-bottom: 3px gray solid;
  margin: 2vh;
`;

const BasicInfoDiv = styled.div`
  /* margin-left: 2vw; */
  width: 90vw;
  font-size: 20px;
  display: flex;
  justify-content: space-around;
  /* margin-right: 2vw; */
`;

const BasicInfoDivTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BasicInfoDivBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TensionDiv = styled.div`
  margin-left: 2vw;
  display: flex;
  width: 90vw;
  font-size: 20px;
`;

const TensionDivTop = styled.div`
  display: flex;
  justify-content: space-around;
`;

const TensionDivBottom = styled.div`
  display: flex;
  justify-content: space-around;
`;

const HealthIssuesDiv = styled.div`
  margin-left: 2vw;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-evenly;
  width: 90vw;
  font-size: 20px;
`;

const HealthIssuesDivTop = styled.div`
  display: flex;
  justify-content: space-around;
`;

const HealthIssuesDivBottom = styled.div`
  display: flex;
  justify-content: space-around;
`;

const SessioninfoDiv = styled.div`
  /* margin-left: 2vw; */
  width: 90vw;
  font-size: 20px;
  display: flex;
  justify-content: space-around;
`;
const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -30px;

  align-items: center;
`;

const Button = styled.button`
  /* text-decoration: none; */
  border-radius: 18px;
  font-size: 40px;
  border: 3px black solid;
  background-color: RGB(149, 125, 173);
  max-height: 10vh;

  &:active {
    transform: translateY(4px);
  }
  &:hover {
    transform: scale(1.05);
  }
`;

const PandaMilk = styled.img`
  height: 30vh;
`;

const LittleBox = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 20vw;
`;

const StyledNavLink = styled(NavLink)`
  display: inline-block;
  position: absolute;
  text-decoration: none;
  color: black;
  font-weight: bold;
  /* padding: 15px; */
  margin-left: 45vw;
  bottom: 5vh;

  &:hover {
    cursor: pointer;
    outline: solid black 3px;
  }
`;

const IconName = styled.p`
  color: grey;
  margin-left: 0.25vw;
  /* font-size: 20px; */
`;

export default withAuthenticationRequired(EditProfilePage, {
  // Show a message while the user waits to be redirected to the login page.
  onRedirecting: () => <div>Redirecting you to the login page...</div>,
});
