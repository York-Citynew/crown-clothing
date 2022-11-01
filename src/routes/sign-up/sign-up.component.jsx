//importing signin and docmethod
import { signInWithGooglePopup , createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import { SignUpForm } from "../../components/sign-up-form/sign-up-form.component"
const SignUp = ()=> {
    // sign in and create user doc`
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup()
        const userDocRef  = createUserDocumentFromAuth(user)
    }
    return (
        <div>
            <h1>Sign in page</h1>
            <button onClick={logGoogleUser}>Sign in with google popup</button>
            <SignUpForm />
        </div>
    )
} 
export default SignUp