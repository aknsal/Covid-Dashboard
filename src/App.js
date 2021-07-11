import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import React, { useState } from "react";
import { useHistory } from "react-router";
import HomePage from "./pages/homepage/homepage";
import SignIn from "./pages/signIn/signIn";
import Signup from "./pages/signup/signup";
import VaccinationSlots from "./pages/vaccinationSlots/vaccinationSlots";
import Layout from "./components/layout";
import { createTheme, Paper, ThemeProvider } from "@material-ui/core";
import "./App.css";
import { react } from "@babel/types";
import socialMediaAuth from "./service/auth";
import logout from "./service/logout";
import { AuthProvider } from "./context/authContext";
import ForgotPassword from "./pages/forgotPassword/forgotPassword";

function App() {
  const [isLoggedin, setisLoggedin] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [socialMediaUser, setSocialMediaUser] = useState({});
  const history = useHistory();

  const darkTheme = createTheme({
    palette: {
      primary: {
        light: "#58a795",
        main: "#6bdbab",
        dark: "#2c544a",
      },
      accent1Color: "#204523",
      type: "dark",
    },
  });

  const lightTheme = createTheme({
    palette: {
      primary: {
        light: "#58a795",
        main: "#386b5f",
        dark: "#2c544a",
      },
      accent1Color: "#649c69",
      type: "light",
    },
  });

  const darkModeSwitchHandler = () => {
    setDarkMode(!darkMode);
  };

  const handleSocialMediaLoginClick = async (provider) => {
    console.log("clicked");
    const res = await socialMediaAuth(provider);
    console.log(res);
    if (res) {
      setisLoggedin(true);
      setSocialMediaUser(res);
    }
  };

  const emailAndPasswordAuthenticated = () => {
    console.log("email And Password Authenticated");
    setisLoggedin(true);
  };

  const handleLogout = async () => {
    logout();
    setisLoggedin(false);
    setSocialMediaUser({});
    console.log("logged Out Social Media");
  };

  const logoutEmailAndPassword = () => {
    setisLoggedin(false);
  };

  console.log("is logged in", isLoggedin);

  return (
    <AuthProvider>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Paper>
          <Router>
            <div className="App">
              <Layout
                isLoggedin={isLoggedin}
                handleLogout={handleLogout}
                logoutEmailAndPassword={logoutEmailAndPassword}
                darkModeSwitchHandler={darkModeSwitchHandler}
                socialMediaUser={socialMediaUser}
              >
                <Switch>
                  <Route exact path="/">
                    <HomePage
                      darkMode={darkMode}
                      socialMediaUser={socialMediaUser}
                    />
                  </Route>
                  <Route path="/signin">
                    <SignIn
                      handleSocialMediaLoginClick={handleSocialMediaLoginClick}
                      emailAndPasswordAuthenticated={
                        emailAndPasswordAuthenticated
                      }
                      darkMode={darkMode}
                    />
                  </Route>
                  <Route path="/signup">
                    <Signup darkMode={darkMode} />
                  </Route>
                  <Route path="/forgotpassword">
                    <ForgotPassword darkMode={darkMode} />
                  </Route>
                  <Route path="/vaccinationslots">
                    <VaccinationSlots darkMode={darkMode} />
                  </Route>
                </Switch>
              </Layout>
            </div>
          </Router>
        </Paper>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
