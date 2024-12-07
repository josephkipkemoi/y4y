import { Link } from "react-router-dom"
import HeaderComponent from "../components/header"
import Footer from "../components/footer"

const About = () => {
    return (
        <div>
            <HeaderComponent/>
            <Members/>
            <Footer/>
        </div>
    )
}

const Members = () => {
    return (
        <div className="container mb-4">
            <h1 className="mt-3">
                About Us
            </h1>
           <p>
            Welcome to our Youth Empowerment Platform, a vibrant community where young people come together to create opportunities, develop skills, and foster positive change. Our platform was founded by three dynamic youth groups — <Link to="/members/tegemeo">Tegemeo Youth Group</Link> , <Link to="/members/amua">Amua Youth Group</Link>, <Link to="/members/maendeleo">Maendeleo Youth Group</Link> and like-minded youth — with the aim of empowering the next generation through meaningful engagement, inclusivity, learning, and community-building.
           </p>
            <h2>
                Our Mission
            </h2>
            <p>
            We are driven by the belief that every young person has the potential to lead, innovate, and inspire. Our mission is to provide a space where youth can access resources, collaborate on projects, and develop the skills needed to thrive in today’s world. We aim to:

            <ul>
                <li>
                    Empower young people through skills development, mentorship, and career opportunities.
                </li>
                <li>
                    Connect youth with like-minded individuals and local community leaders.
                </li>
                <li>
                    Inspire growth through leadership training, social projects, and creative initiatives.
                </li>
            </ul>
            </p>

            <h2>
            Our Pioneers
            </h2>
            <p>
                Our platform’s foundation is built upon the dedication and vision of Tegemeo Youth Group, Amua Youth Group, and Maendeleo Youth Group. These groups recognized the need for a unified platform that would bring together the energy and creativity of young people across different communities. Their commitment to fostering positive change is what drives our ongoing efforts to uplift and empower youth.
            </p>

            <h2>
             Our Community
            </h2>
            <p>
                In addition to our youth groups, we are proud to collaborate with Women from the Community, who play a pivotal role in mentoring and guiding our members. These women bring a wealth of experience, wisdom, and leadership, helping to create a well-rounded, supportive environment for both young men and women. Their participation ensures that we address the unique challenges faced by youth and women in our community.
            </p>

            <h2>
                Join Us
            </h2>
            <p>
            We welcome new applicants who are eager to learn, grow, and contribute to our shared vision. Whether you’re a young person looking for opportunities, a community leader wanting to make an impact, or someone passionate about making a difference, our platform offers a place for you.

            </p>

            Together, we are shaping a brighter future for ourselves and our communities!
        </div>
    )
}
export default About