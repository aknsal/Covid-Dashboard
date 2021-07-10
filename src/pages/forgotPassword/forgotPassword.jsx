import ForgotPassword from "../../components/forgotPasswordCard.jsx/forgotPasswordCard";
import "./forgotPassword.css";

function SignIn({
  handleSocialMediaLoginClick,
  emailAndPasswordAuthenticated,
}) {
  return (
    <ForgotPassword
      handleSocialMediaLoginClick={handleSocialMediaLoginClick}
      emailAndPasswordAuthenticated={emailAndPasswordAuthenticated}
    />
  );
}

export default ForgotPassword;
