import Header from "../../components/Header";
import StickyNavbar from "../../components/StickyNavbar";
import Sidebar from "../../components/account/sidebar";
import Footer from "../../components/Footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleRight, faInfoCircle} from "@fortawesome/free-solid-svg-icons";


const Addresses = () => {
    return (
        <div>
            <Header></Header>
            <StickyNavbar></StickyNavbar>
            <div className="border border-gray-300 md:mx-24 md:my-4 md:p-6 shadow-md">
                <h1 className="text-black text-4xl font-bold md:mb-6">Addresses</h1>
                <div className="md:flex md:space-x-6">
                    <div className="md:w-2/12">
                        <Sidebar></Sidebar>
                    </div>
                   <div className="w-10/12 bg-gray-100 self-start p-4 font-medium">
                       <div>The following addresses will be used on the checkout page by default.
                       </div>
                       <div className="grid-cols-4 flex justify-between  my-10">
                           <div className="font-bold text-lg">
                               Billing address
                           </div>
                           <div>
                               <a className="md:text-primary font-medium  "
                                  href="https://www.w3schools.com">Add</a>
                           </div>
                           <div className="font-bold text-lg">
                               Shipping address
                           </div>
                           <div>
                               <a className="md:text-primary font-medium  "
                                  href="https://www.w3schools.com">Add</a>
                           </div>
                       </div>
                       <div className="grid-cols-2 flex justify-between font-medium">
                           <div>
                               You have not set up this type of address yet.
                           </div>
                           <div className="">
                               You have not set up this type of address yet.
                           </div>
                       </div>
                   </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Addresses