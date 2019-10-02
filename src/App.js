import React from "react";
import "./App.css";
import LoginPage from "./components/Login&Register/LoginPage";
import { Switch, Route } from "react-router-dom";
import Register from "./components/Login&Register/RegisterPage";

function App() {
  return (
    <>
      <Switch>
        <Route
          path="/login"
          exact
          component={() => (
            <div className="login-main">
              <LoginPage />
            </div>
          )}
        />
        <Route
          path="/register"
          exact
          component={() => (
            <div className="login-main">
              <Register />
            </div>
          )}
        />
      </Switch>
    </>
  );
}

export default App;
