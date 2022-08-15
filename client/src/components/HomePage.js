import React, { useEffect, useState } from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";
import FetchProfilePage from "./FetchProfilePage";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import axios from "axios"; // axios

function HomePage() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [joke, setJoke] = useState("");

  // fetch the joke
  useEffect(() => {
    axios
      .get(
        "https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist,explicit&type=single"
      )
      .then((res) => {
        setJoke(res.data.joke);
      });
  }, []);

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <HomePageDiv>
      <p>{joke}</p>
      <LogoDiv>
        <Logo src={require("../images/logo.png")} />
      </LogoDiv>
      <FactsContainer>
        <FactsTop>
          <FactsTitle>Did you know?</FactsTitle>
          <DidYouKnowPanda src="https://media.giphy.com/media/ybYZ9eHtPKRWCPHFTW/giphy.gif" />
        </FactsTop>
        <FactsBottom>
          <h3>
            “Massage is to the human body what a tune-up is to a car” -Chicago
            Tribune
          </h3>
          <h3>
            A 60-minute massage is equivalent to getting 7-8 hours of sleep to
            your body.
          </h3>
          <h3>Massage may help you live long.</h3>
          <h3>Lessen depression and anxiety</h3>
          <h3>
            Pump oxygen and nutrients into tissues and vital organs, improving
            circulation
          </h3>
        </FactsBottom>
      </FactsContainer>
    </HomePageDiv>
  );
}

const HomePageDiv = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;

  align-items: center;
  background-color: mistyrose;
  height: 90vh;
  border-right: black solid 4px;
  border-left: black solid 4px;
  border-bottom: black solid 4px;
`;

const LogoDiv = styled.div`
  /* height: 150px; */
  margin-top: 1vh;
`;

const Logo = styled.img`
  left: 13px;
  width: 30vw;
  outline: black solid 2px;
`;
const FactsContainer = styled.div`
  flex-direction: column;
`;

const FactsTop = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */

  transform: rotate(10deg);

  height: 30vh;
`;

const FactsTitle = styled.div`
  display: flex;
  position: relative;
  background: sandybrown;
  color: #000000;
  font-family: Impact;
  font-size: 34px;
  justify-content: center;
  align-items: center;
  /* line-height: 119px; */
  /* text-align: center; */
  width: 250px;
  height: 80px;
  border-radius: 10px;
  border: 3px black solid;
`;

const DidYouKnowPanda = styled.img`
  height: 20vw;
`;
const FactsBottom = styled.div`
  font-size: 20px;
`;

export default HomePage;
