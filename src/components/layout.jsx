import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Grid,
  Switch,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth } from "../context/authContext";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => {
  return {
    toolbar: theme.mixins.toolbar,
  };
});

export default function Layout({
  children,
  isLoggedin,
  handleLogout,
  logoutEmailAndPassWord,
  darkModeSwitchHandler,
  darkMode,
}) {
  const classes = useStyles();
  const history = useHistory();
  const { currentUser, logout } = useAuth();

  async function handleLogoutEmailAndPassWord() {
    try {
      await logout();
      logoutEmailAndPassWord();
      history.push("/signin");
      console.log("Logged Out Successfully");
    } catch (err) {
      console.log("Failed to Log Out", err);
      console.log(currentUser.email);
    }
  }

  return (
    <div>
      <AppBar style={{ backgroundColor: "#386b5f" }}>
        <Toolbar>
          <Typography variant="h4">CoviC</Typography>
          <Switch checked={darkMode} onChange={darkModeSwitchHandler} />

          <Grid container justifyContent="flex-end" alignItems="center">
            <Grid item>
              <Button color="inherit" href="/">
                Home
              </Button>
            </Grid>
            <Grid item>
              <Button href="/vaccinationslots" color="inherit">
                Find Vaccination Centre
              </Button>
            </Grid>
            <Grid item>
              <Button color="inherit">FAQ's</Button>
            </Grid>

            <Grid item>
              {isLoggedin ? (
                <Button
                  color="inherit"
                  onClick={
                    currentUser ? handleLogoutEmailAndPassWord : handleLogout
                  }
                >
                  Logout
                </Button>
              ) : (
                <Button color="inherit" href="/signin">
                  Login
                </Button>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar}></div>
      <div>{children}</div>
    </div>
  );
}
