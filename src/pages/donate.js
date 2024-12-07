import Footer from "../components/footer"
import HeaderComponent from "../components/header"

const Donate = () => {
  return (
    <>
       <HeaderComponent/>
       <DonateComponent/>
       <Footer/>
    </>
 
  )
}

const DonateComponent = () => {
    return (
        <div className="container p-3">
            <h3>Contact Secretariat on how you can assist us</h3>
            <p>Mobile Number: 0728-532-000</p>
        </div>
    )
}
export default Donate