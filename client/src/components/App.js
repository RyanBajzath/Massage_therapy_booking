import React from "react";
import Signinpage from "./Signinpage";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProfilePage from "./ProfilePage";
import HomePage from "./HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/signin">
            <Signinpage />
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
