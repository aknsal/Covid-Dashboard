import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/homepage/homepage";
import SignIn from "./pages/signIn/signIn";
import Layout from "./components/layout";
import "./App.css";

function App() {
  return (
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
  );
}

export default App;
