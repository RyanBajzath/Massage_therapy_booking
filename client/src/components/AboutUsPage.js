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

            <h2>
              Address: Mount Royal City Hall, 90 Av. Roosevelt, Mount Royal,
              Quebec H3R 1Z5
            </h2>
            <Icons>
              <Stylediframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44697.3340785211!2d-73.6896713923242!3d45.55870588742309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc919b0e9107cd3%3A0x2bcc87c29613b17c!2sMount%20Royal%20City%20Hall!5e0!3m2!1sen!2sca!4v1660676427757!5m2!1sen!2sca" />
              <PandaMilk src="https://media.giphy.com/media/8XOaUWWGR8QU5Oc6J1/giphy.gif" />
            </Icons>
          </AboutUsDiv>
        </LeftDiv>
        <rightDiv></rightDiv>
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
  /* width: 50vw; */
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

const Icons = styled.div`
  display: flex;
  justify-content: center;
`;

const Stylediframe = styled.iframe`
  border: 1px black solid;
  height: 30vh;
`;

export default AboutUsPage;
