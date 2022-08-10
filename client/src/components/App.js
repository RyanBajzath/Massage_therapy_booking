import React from "react";

import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProfilePage from "./ProfilePage";
import HomePage from "./HomePage";
import SchedulePage from "./SchedulePage";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <SchedulePage exact path="/schedule">
            <HomePage />
          </SchedulePage>

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
