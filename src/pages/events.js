import Footer from "../components/footer"
import HeaderComponent from "../components/header"
import Poster from "../poster.jpg"

const Events = () => {
    return (
        <>
            <HeaderComponent/>
            <EventsComponent/>
            <Footer/>
        </>
    )
}

const EventsComponent = () => {
    return (
        <div className="container p-3">
            <h1 className="card card-header bg-dark text-white border-0">Group Events</h1>
            <hr/>
            <div className="card">
                <div className="card card-header bg-dark text-white border-0">
                    <h3>SOUTHLANDS YOUTH FOR YOUTH UNITY CUP</h3>
                </div>
                <div className="card card-body border-0">
                    <div className="text-center">
                        <img src={Poster} alt="youthforyouthleague" className="img-fluid w-100 rounded-3"/>
                    </div>
                    <hr/>
                    <div>
                        <p>
                        We, <b>Youth for Youth</b> , from Southlands Mugumoini, welcome residents of Southlands Kijiji to our Football tournament that is to start this coming weekend 7th December to 15th December, Our main agenda is to foster unity and discipline amongst the youth of Mugumoini ward. Welcome one, Welcome All!
                        </p>
                        <p>Fixture Dates: <b>7th December, 8th December, 14th December & 15th December</b></p>
                        <p>Venue: <b>Ngei Primary School</b> </p>
                    </div>
                </div>
                <div className="card card-footer d-flex flex-row">
                    <div>
                     <button className="btn btn-danger m-2">View Details</button>
                    </div>
                    <div>
                        <button className="btn btn-primary m-2">Sponsor Event</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Events