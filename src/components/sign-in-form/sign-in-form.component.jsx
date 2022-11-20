import { useState } from "react";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { ButtonsContainer, SignUpContainer } from "./sign-in-form.styles.jsx";
const defaultFormData = {
  email: "",
  password: "",
};
export const SignInForm = () => {
  const [formData, setFormData] = useState(defaultFormData);
  const handleChange = (event) => {
    setFormData(() => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  };
  const signInWithGoogle = async () => {
    //    const {user} =
    await signInWithGooglePopup();
    // createUserDocumentFromAuth(user)
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // const {user} =
      await signInAuthUserWithEmailAndPassword(
        formData.email,
        formData.password
      );
      setFormData(defaultFormData);
    } catch (error) {
      console.log("there was an error: " + error);
    }
  };
  return (
    <SignUpContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with email</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={formData.email}
        />
        <FormInput
          label='password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={formData.password}
        />
        <ButtonsContainer>
          <Button type='submit'>Sign in</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type='button'
            onClick={signInWithGoogle}
          >
            Sign in with google
          </Button>
        </ButtonsContainer>
      </form>
    </SignUpContainer>
  );
};
