import SigninCard from "../../components/signinCard/signinCard";
import "./signIn.css";

function SignIn({
  handleSocialMediaLoginClick,
  emailAndPasswordAuthenticated,
}) {
  return (
    <SigninCard
      handleSocialMediaLoginClick={handleSocialMediaLoginClick}
      emailAndPasswordAuthenticated={emailAndPasswordAuthenticated}
    />
  );
}

export default SignIn;
