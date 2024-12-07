import { Link } from "react-router-dom"
import Logo from "../logo.png"
import "./main.css"

const MainComponent = () => {
    return (
        <article className="container">
            <div className="w-100 text-center mt-2 membership">
                <h1 className="mb-2 mt-3">Become a Group Member</h1>
                <p className="mt-2">
                    Welcome to Youth for Youth,

                    We are a vibrant community of young individuals dedicated to empowering one another and making a positive impact in our world. Our mission is to provide a safe space for creativity, collaboration, and personal growth. Whether you’re looking to make new friends, explore new interests, or engage in meaningful projects, you’ll find a place here with us. Join us in our journey to inspire change, celebrate diversity, and cultivate leadership skills that will last a lifetime. Together, we can create a brighter future!

                    Get involved today and be a part of something amazing!
                </p>
                <Link to="/join-us" className="shadow-sm">Join Us</Link>
            </div>
            <div className="w-100 logo mt-5">
                <img src={Logo} className="img-fluid" alt="logo"/>
                <h4><i><b>Connecting Ideas</b></i></h4>
            </div>
        </article>
    )
}

export default MainComponent