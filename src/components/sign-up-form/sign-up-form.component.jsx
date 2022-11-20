import { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { SignUpContainer } from "./sign-up-form.styles.jsx";
const defaultFormData = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export const SignUpForm = () => {
  const [formData, setFormData] = useState(defaultFormData);
  const handleChange = (event) => {
    setFormData(() => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.password === formData.confirmPassword) {
      try {
        const { user } = await createAuthUserWithEmailAndPassword(
          formData.email,
          formData.password
        );
        await createUserDocumentFromAuth(user, formData.name);
        setFormData(defaultFormData);
      } catch (error) {
        console.log("there was an error: " + error);
      }
    }
  };
  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with email</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='name'
          type='text'
          required
          onChange={handleChange}
          name='name'
          value={formData.name}
        />
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
        <FormInput
          label='confirm password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={formData.confirmPassword}
        />
        <Button type='submit'>Sign up</Button>
      </form>
    </SignUpContainer>
  );
};
