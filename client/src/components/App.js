import React from "react";

import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProfilePage from "./ProfilePage";
import HomePage from "./HomePage";
import SchedulePage from "./SchedulePage";
import CreateProfilePage from "./CreateProfilePage";
import EditProfilePage from "./EditProfilePage";
import FetchProfilepage from "./FetchProfilePage";
import DeleteUsePage from "./DeleteUsePage";
import NavBar from "./NavBar";
import GlobalStyles from "../GlobalStyles";
import AboutUsPage from "./AboutUsPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyles />
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/aboutuspage">
              <AboutUsPage />
            </Route>

            <Route exact path="/deleteprofilepage">
              <DeleteUsePage />
            </Route>
            <Route exact path="/createprofilepage">
              <CreateProfilePage />
            </Route>
            <Route exact path="/editprofilepage">
              <EditProfilePage />
            </Route>
            <Route exact path="/fetchprofilepage">
              <FetchProfilepage />
            </Route>
            <Route exact path="/scheduleappointment">
              <SchedulePage />
            </Route>

            <Route exact path="/profile">
              <ProfilePage />
            </Route>
            <Route path="">404: Oops!</Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
