import Logo from "../logo.png"
import "./main.css"

const MainComponent = () => {
    return (
        <article className="d-sm-flex align-items-center justify-content-around container">
            <div className="w-100 text-center mt-5">
                <h1 className="mb-4">Become a Team Member</h1>
                <p className="mt-4">
                    Welcome to Youth for Youth,

                    We are a vibrant community of young individuals dedicated to empowering one another and making a positive impact in our world. Our mission is to provide a safe space for creativity, collaboration, and personal growth. Whether you’re looking to make new friends, explore new interests, or engage in meaningful projects, you’ll find a place here with us. Join us in our journey to inspire change, celebrate diversity, and cultivate leadership skills that will last a lifetime. Together, we can create a brighter future!

                    Get involved today and be a part of something amazing!
                </p>
                <button className="btn btn-primary btn-lg shadow-sm rounded-5 p-2 w-25">Join Us</button>
            </div>
            <div className="d-sm-flex flex-column align-items-center w-100">
                <img src={Logo} className="mt-5" alt="logo"/>
                <h4><i>Connecting Ideas</i></h4>
            </div>
        </article>
    )
}

export default MainComponent