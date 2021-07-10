import { Grid, Container } from "@material-ui/core";
import SigninCard from "../../components/signinCard/signinCard";
import "./signIn.css";

function SignIn({ handleSocialMediaLoginClick }) {
  return (
    <SigninCard handleSocialMediaLoginClick={handleSocialMediaLoginClick} />
  );
}

export default SignIn;
