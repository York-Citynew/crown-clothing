import { useState } from "react"

import { signInWithGooglePopup , createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils"
import FormInput from "../form-input/form-input.component"
import Button from "../button/button.component"

import "./sign-in-form.styles.scss"
    const defaultFormData = {
        email:"",
        password:""
    }
export const SignInForm = ()=> {
    const [formData, setFormData] = useState(
        defaultFormData
    )
    const handleChange = (event) => {
        setFormData(()=>(
            {  
                ...formData,
                [event.target.name] : event.target.value         
            }
        ))
    }
    const signInWithGoogle = async () => {
    //    const {user} = 
       await signInWithGooglePopup()
        // createUserDocumentFromAuth(user)
    }
    const handleSubmit = async (event) => {
        event.preventDefault() 
            try {
                // const {user} = 
                await signInAuthUserWithEmailAndPassword(formData.email, formData.password)
                setFormData(
                    defaultFormData
                )
            }
            catch (error) {
                console.log("there was an error: " + error)
            }
    }
    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with email</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />
                <FormInput
                    label="password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={formData.password}
                />
                <div className="buttons-container">
                    <Button type="submit">Sign in</Button>
                    <Button buttonType={"google"} type="button" onClick={signInWithGoogle}>Sign in with google</Button>
                </div>
            </form>
        </div>
    )
}