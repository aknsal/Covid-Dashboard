import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/homepage/homepage";
import SignIn from "./pages/signIn/signIn";
import Layout from "./components/layout";
import { createTheme, ThemeProvider } from "@material-ui/core";
import "./App.css";

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
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Layout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/signin">
                <SignIn />
              </Route>
            </Switch>
          </Layout>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
