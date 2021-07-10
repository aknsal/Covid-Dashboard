import React, { useState } from "react";
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
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Copyright from "../copyright/copyright";
import "./signinCard.css";

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
    margin: theme.spacing(1, 0, 2),
  },
}));

export default function SigninCard() {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "") {
      setEmailError(true);
    }

    if (password === "") {
      setPasswordError(true);
    }

    if (email && password) {
      console.log(email, password);
    }
  };

  return (
    <div className="signin-card">
      <Container maxWidth="xs" className={classes.container}>
        <CssBaseline />
        <div className={classes.paper}>
          <Typography variant="h4">Sign in</Typography>
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
            >
              Sign In
            </Button>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  Register Now!
                </Link>
              </Grid>
            </Grid>
          </form>
          <div className="content">
            <p className="or">or</p>
            <Typography>Login Using</Typography>
          </div>

          <Grid container justifyContent="space-around">
            <Grid item>
              <a href="#" class="fa fa-facebook"></a>
            </Grid>
            <Grid item>
              <a href="#" class="fa fa-twitter"></a>
            </Grid>
            <Grid item>
              <a href="#" class="fa fa-google"></a>
            </Grid>
          </Grid>
        </div>
      </Container>
      <Box mt={8}>
        <Copyright />
      </Box>
    </div>
  );
}
