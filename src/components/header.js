import { Link } from "react-router-dom"
import Logo from "../logo.png"
import "./header.css"


const HeaderComponent = () => {
    return (
        <div className="main-header d-sm-flex align-items-center">
            <header className="d-flex align-items-center shadow-sm">
                <img src={Logo} className="img-fluid" alt="logo"/>
                <h1>Youth for Youth</h1>
            </header>
            <div className="nav sub-header d-flex ">
                <Link to="/" className="nav-link m-3 fw-bold text-dark">Home</Link>
                <Link to="/events" className="nav-link m-3 fw-bold text-dark">Events</Link>
                <Link to="/about-us" className="nav-link m-3 fw-bold text-dark">About Us</Link>
                <Link to="/join-us" className="nav-link m-3 fw-bold text-dark">Join Us</Link>
                <Link to="/donate" className="nav-link m-3 fw-bold text-danger">Donate</Link>
            </div>
        </div>
    )
}

export default HeaderComponent