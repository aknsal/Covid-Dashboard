import React, { useState } from "react";
import { useHistory } from "react-router";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Copyright from "../copyright/copyright";
import "./signupCard.css";
import { useAuth } from "../../context/authContext";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    paddingTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",

    alignItems: "center",
  },
  container: {
    backgroundColor: "#eef7f4",
    borderRadius: "1rem",
    paddingBottom: theme.spacing(3),
  },
  form: {
    width: "90%",
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignupCard({ darkMode }) {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [passwordMathchError, setPasswordMatchError] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { signup } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    if (email === "") {
      setEmailError(true);
    }

    if (email !== "") {
      setEmailError(false);
    }

    if (password === "") {
      setPasswordError(true);
    }

    if (password !== "") {
      setPasswordError(false);
    }

    if (confirmPassword === "") {
      setConfirmPasswordError(true);
    }

    if (confirmPassword !== "") {
      setConfirmPasswordError(false);
    }

    if (password !== confirmPassword) {
      setPasswordMatchError(true);
    } else {
      setPasswordMatchError(false);
    }

    if (email && password && confirmPassword) {
      console.log(email, password, confirmPassword);
    }

    try {
      setLoading(true);
      await signup(email, password);
      history.push("/");
    } catch (error) {
      console.log("Failed to create an account");
    }
    setLoading(false);
  }

  let signupBackgroundColor = "";

  if (darkMode) {
    signupBackgroundColor = "#2b302e";
    console.log("DarkMode True");
  } else {
    signupBackgroundColor = "#ebfff6";
    console.log("DarkMode False");
  }

  return (
    <div className="signup-card">
      <div>
        <Container
          style={{ backgroundColor: signupBackgroundColor }}
          maxWidth="xs"
          className={classes.container}
        >
          <CssBaseline />
          <div className={classes.paper}>
            <Typography variant="h4">Sign Up</Typography>

            {passwordMathchError && (
              <Alert severity="error">Passwords do not Match</Alert>
            )}
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                required
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                error={passwordError}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="current-password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={confirmPasswordError}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                variant="contained"
                type="submit"
                fullWidth
                color="primary"
                className={classes.submit}
                disabled={loading}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="center">
                <Grid item>
                  <Link href="/signin" variant="body2">
                    Login
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
        <Box mt={8}>
          <Copyright />
        </Box>
      </div>
    </div>
  );
}
