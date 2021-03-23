import Header from "../../components/Header";
import StickyNavbar from "../../components/StickyNavbar";
import Sidebar from "../../components/account/sidebar";
import Footer from "../../components/Footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleRight, faInfoCircle} from "@fortawesome/free-solid-svg-icons";


const Inquiries = () => {
    return (
        <div>
            <Header></Header>
            <StickyNavbar></StickyNavbar>
            <div className="border border-gray-300 md:mx-24 md:my-4 md:p-6 shadow-md">
                <h1 className="text-black text-4xl font-bold md:mb-6">Followings</h1>
                <div className="md:flex md:space-x-6">
                    <div className="md:w-2/12">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="w-10/12 bg-gray-50 border border-gray-200 self-start px-4 pt-6 pb-12">
                        <table className="table-auto  text-left w-full border-collapse border border-gray-300 bg-gray-100">
                            <thead>
                            <tr className="">
                                <th className="py-4 px-6 bg-grey-lightest font-bold  text-sm text-grey-dark border border-grey-light w-1/4 ">Query</th>
                                <th className="py-4 px-6 bg-grey-lightest font-bold  text-sm text-grey-dark border border-grey-light w-1/4">Product</th>
                                <th className="py-4 px-6 bg-grey-lightest font-bold  text-sm text-grey-dark border border-grey-light w-1/4">Store</th>
                                <th className="py-4 px-6 bg-grey-lightest font-bold  text-sm text-grey-dark border border-grey-light w-1/4">Additional Info</th>
                                <th className="py-4 px-6 bg-grey-lightest font-bold  text-sm text-grey-dark border border-grey-light w-1/4">Actions</th>
                            </tr>
                            </thead>
                            <tbody className="bg-white">
                            <tr className="bg-white">
                                <td colSpan={4} className="py-4 px-6 border font-semibold ">You do not have any enquiry yet!</td>
                                <td className=""></td>

                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    )
}

export default Inquiries