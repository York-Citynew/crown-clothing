import { useState } from "react"
import { createAuthUserWithEmailAndPassword , createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
    const defaultFormData = {
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
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
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (formData.password === formData.confirmPassword) {
            try {
                const {user} = await createAuthUserWithEmailAndPassword(formData.email, formData.password)
                const userDocRef = createUserDocumentFromAuth(user, formData.name)
            }
            catch (error) {
                console.log("there was an error: " + error)
            }
        }
        setFormData(
            defaultFormData
        )
    }
    return (
        <div>
            <h1>Sign in with email</h1>
            <form onSubmit={handleSubmit}>
                <label>name</label>
                <input required type="text" name="name" onChange={handleChange} value={formData.name}/>
                <label>email</label>
                <input required type="email" name="email" onChange={handleChange} value={formData.email}/>
                <label>password</label>
                <input required type="password" name="password" onChange={handleChange} value={formData.password}/>
                <label>confirmrPassword</label>
                <input required type="password" name="confirmPassword" onChange={handleChange} value={formData.confirmPassword}/>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}