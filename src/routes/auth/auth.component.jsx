import { SignUpForm } from "../../components/sign-up-form/sign-up-form.component";
import { SignInForm } from "../../components/sign-in-form/sign-in-form.component";
import { AuthenticationContainer } from "./auth.styles.jsx";
const Auth = () => {
  return (
    <AuthenticationContainer>
      <SignUpForm />
      <SignInForm />
    </AuthenticationContainer>
  );
};
export default Auth;
