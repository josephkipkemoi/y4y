import { Link } from "react-router-dom"
import Logo from "../logo.png"
import "./header.css"


const HeaderComponent = () => {
    return (
        <div className="main-header d-sm-flex align-items-center">
            <header className="d-flex align-items-center shadow-sm">
                <img src={Logo} alt="logo"/>
                <h1>Youth for Youth</h1>
            </header>
            <div className="sub-header d-flex ">
                <Link to="/" className="nav-link m-3 fw-bold">Home</Link>
                <Link to="/about-us" className="nav-link m-3 fw-bold">About Us</Link>
                <Link to="/join-us" className="nav-link m-3 fw-bold">Join Us</Link>
            </div>
        </div>
    )
}

export default HeaderComponent