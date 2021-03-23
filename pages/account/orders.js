import Header from "../../components/Header";
import StickyNavbar from "../../components/StickyNavbar";
import Sidebar from "../../components/account/sidebar";
import Footer from "../../components/Footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleRight, faInfoCircle} from "@fortawesome/free-solid-svg-icons";


const orders = () => {
    return (
        <div>
            <Header></Header>
            <StickyNavbar></StickyNavbar>
            <div className="border border-gray-300 md:mx-24 md:my-4 md:p-6 shadow-md">
                <h1 className="text-black text-4xl font-bold md:mb-6">Orders</h1>
                <div className="md:flex md:space-x-6">
                    <div className="md:w-2/12">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="md:w-10/12">
                        <div className="bg-gray-50 px-4 pt-6 pb-12 border border-gray-200 border-opacity-70 ">

                            <div className="bg-white p-3 flex justify-between items-center">
                                <div className="flex items-center">
                                    <FontAwesomeIcon className='text-blue-500 text-2xl'
                                                     icon={faInfoCircle}/>
                                    <div className="text-primary font-medium ml-4"> No orders have been made yet</div>
                                </div>
                                <button className="rounded shadow bg-gray-100 font-bold p-2 text-sm">BROWSE PRODUCTS</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default orders