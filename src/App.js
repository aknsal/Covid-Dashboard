import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import React, { useState } from "react";
import HomePage from "./pages/homepage/homepage";
import SignIn from "./pages/signIn/signIn";
import Layout from "./components/layout";
import { createTheme, ThemeProvider } from "@material-ui/core";
import "./App.css";
import { react } from "@babel/types";
import socialMediaAuth from "./service/auth";
import logout from "./service/logout";

const theme = createTheme({
  palette: {
    primary: {
      light: "#58a795",
      main: "#386b5f",
      dark: "#2c544a",
    },
  },
});

function App() {
  const [isLoggedin, setisLoggedin] = useState(false);
  const handleSocialMediaLoginClick = async (provider) => {
    console.log("clicked");
    const res = await socialMediaAuth(provider);
    console.log(res);
    if (res) {
      setisLoggedin(true);
    }
  };
  const handleLogout = async () => {
    logout();
    setisLoggedin(false);
    console.log("logged Out");
  };
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Layout isLoggedin={isLoggedin} handleLogout={handleLogout}>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/signin">
                <SignIn
                  handleSocialMediaLoginClick={handleSocialMediaLoginClick}
                />
              </Route>
            </Switch>
          </Layout>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
