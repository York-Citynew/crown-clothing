import { Fragment, useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import {ReactComponent as CrownLogo} from "../../assets/crown.svg"
import { UserContext } from "../../contexts/user.context"
import { userSignOut } from "../../utils/firebase/firebase.utils"
import "./navigation.styles.scss"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"
import { DropdownContext } from "../../contexts/dropdown.context"

const Navigation = ()=> {
    const { currentUser } = useContext(UserContext)
    const {dropdown} = useContext(DropdownContext)
    const signOutHandler = async () => {
        await userSignOut()
    }
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/"><CrownLogo className="logo"/></Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">SHOP</Link>
                    {currentUser?
                        <span onClick={signOutHandler}>
                            SIGN OUT
                        </span>
                        : <Link className="nav-link" to="/auth">SIGN IN</Link>}
                <CartIcon />
                </div>
                {dropdown && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
    )
}
export default Navigation