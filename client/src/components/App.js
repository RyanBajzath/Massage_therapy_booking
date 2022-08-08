import React from "react";
import HomePage from "./HomePage";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProfilePage from "./ProfilePage";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/Profile">
            <ProfilePage />
          </Route>
          <Route path="">404: Oops!</Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
