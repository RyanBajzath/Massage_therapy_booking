import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";
import FetchProfilePage from "./FetchProfilePage";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function HomePage() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <HomePageDiv>
      <div>
        <Title>RuRu's Massage Therapy </Title>
      </div>
      <FactsContainer>
        <h2>Did you know?</h2>
        <iframe
          src="https://giphy.com/embed/ybYZ9eHtPKRWCPHFTW"
          width="480"
          height="480"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
        <p>
          <a
            size
            href="https://giphy.com/gifs/TheCheekyPanda-cartoon-panda-idea-ybYZ9eHtPKRWCPHFTW"
          >
            via GIPHY
          </a>
        </p>
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
      </FactsContainer>
    </HomePageDiv>
  );
}
const HomePageDiv = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  border-bottom: black solid 3px;
`;
const FactsContainer = styled.div`
  /* width: 30vw; */
  /* display: flex; */

  flex-direction: column;
`;

export default HomePage;
