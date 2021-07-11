import ForgotPassword from "../../components/forgotPasswordCard.jsx/forgotPasswordCard";
import "./forgotPassword.css";

function SignIn({
  handleSocialMediaLoginClick,
  emailAndPasswordAuthenticated,
  darkMode,
}) {
  return (
    <ForgotPassword
      handleSocialMediaLoginClick={handleSocialMediaLoginClick}
      emailAndPasswordAuthenticated={emailAndPasswordAuthenticated}
      darkMode={darkMode}
    />
  );
}

export default ForgotPassword;
