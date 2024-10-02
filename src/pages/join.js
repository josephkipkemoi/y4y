import HeaderComponent from "../components/header"

const Join = () => {
    return (
        <div>
            <HeaderComponent/>
            <JoinComponent/>
        </div>
    )
}

const JoinComponent = () => {
    return (
        <div className="container">
            <h1 className="mt-3">Join Us</h1>
            <h2>Eligibility</h2>
            <p>
                Membership shall be open to all individuals aged 18 to 35, who are committed to the mission and objectives of the Youth Welfare, regardless of gender, race, ethnicity, religion, or socioeconomic status.
            </p>
            <p>Contact the Group Secretary on Membership Registration 0728-532-000</p>
        </div>
    )
}
export default Join