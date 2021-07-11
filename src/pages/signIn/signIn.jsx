import SigninCard from "../../components/signinCard/signinCard";
import "./signIn.css";

function SignIn({
  handleSocialMediaLoginClick,
  emailAndPasswordAuthenticated,
  darkMode,
}) {
  return (
    <SigninCard
      handleSocialMediaLoginClick={handleSocialMediaLoginClick}
      emailAndPasswordAuthenticated={emailAndPasswordAuthenticated}
      darkMode={darkMode}
    />
  );
}

export default SignIn;
