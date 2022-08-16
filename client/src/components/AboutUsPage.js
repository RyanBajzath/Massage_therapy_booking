import React from "react";
import styled from "styled-components";

const AboutUsPage = () => {
  return (
    <AboutUsContainer>
      <TitleDiv>
        <LeftDiv>
          <Title>Ruru's Massage Therapy</Title>
          <AboutUsDiv>
            <h2>Phone Number: 438-234-8306</h2>

            <h2>Address: 4866 René-Lévesque Blvd </h2>
          </AboutUsDiv>
        </LeftDiv>
        <rightDiv>
          <PandaMilk src="https://media.giphy.com/media/8XOaUWWGR8QU5Oc6J1/giphy.gif" />
        </rightDiv>
      </TitleDiv>
    </AboutUsContainer>
  );
};

const AboutUsContainer = styled.div`
  /* flex-direction: column; */
  background-color: mistyrose;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  border-right: black solid 4px;
  border-left: black solid 4px;
  border-bottom: black solid 4px;
`;
const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid black;
  width: 50vw;
  padding: 15px;
`;
const LeftDiv = styled.div``;
const rightDiv = styled.div``;
const PandaMilk = styled.img`
  height: 30vh;
`;
const Title = styled.h1`
  border-bottom: 3px solid lightgray;
`;

const AboutUsDiv = styled.div`
  margin-top: 1vh;
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: flex-end; */
`;

export default AboutUsPage;
