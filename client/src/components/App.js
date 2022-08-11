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

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage />
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

          <Route exact path="/profile">
            <ProfilePage />
          </Route>
          <Route path="">404: Oops!</Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
