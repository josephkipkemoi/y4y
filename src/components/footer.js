import Logo from "../logo.png"
import "./footer.css"

const Footer = () => {
    return (
        <footer className="text-center p-4 bg-dark text-light">
         <img src={Logo} alt="logo" className="bg-white rounded-circle" /> Youth for Youth | 2024
        </footer>
    )
}

export default Footer