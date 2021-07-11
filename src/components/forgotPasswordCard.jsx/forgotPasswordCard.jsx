import "./forgotPasswordCard.css";
import React, { useState } from "react";
import { useHistory } from "react-router";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Alert from "@material-ui/lab/Alert";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Copyright from "../copyright/copyright";
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
    margin: theme.spacing(4, 0, 4),
  },
}));

export default function ForgotPasswordCard() {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [resetPasswordError, setResetPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const history = useHistory();
  const { resetPassword } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    if (email === "") {
      setEmailError(true);
    }

    if (email !== "") {
      setEmailError(false);
    }

    if (email) {
      console.log(email);
    }

    try {
      setMessage("");
      setResetPasswordError("");
      setLoading(true);
      await resetPassword(email);
      setMessage("Check your inbox for further instructions");
    } catch (error) {
      setResetPasswordError("Request Failed");
      console.log(error);
    }
    setLoading(false);
  }

  return (
    <div className="forgot-password-card">
      <Container maxWidth="xs" className={classes.container}>
        <CssBaseline />
        <div className={classes.paper}>
          <Typography variant="h4">Reset PassWord</Typography>
          {resetPasswordError && (
            <Alert severity="error">{resetPasswordError}</Alert>
          )}
          {message && <Alert severity="success">{message}</Alert>}
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              required
              onChange={(e) => setEmail(e.target.value)}
              error={emailError}
            />

            <Button
              variant="contained"
              type="submit"
              margin="normal"
              fullWidth
              color="primary"
              className={classes.submit}
              disabled={loading}
            >
              Submit
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Back To Login
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
  );
}
