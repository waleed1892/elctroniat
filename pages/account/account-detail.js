import Header from "../../components/Header";
import StickyNavbar from "../../components/StickyNavbar";
import Sidebar from "../../components/account/sidebar";
import Footer from "../../components/Footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleRight, faInfoCircle} from "@fortawesome/free-solid-svg-icons";


const Orders = () => {
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
                    <div className="w-10/12 bg-gray-100">
                        <form className="px-6 my-6 space-y-6">
                            <div className="grid grid-cols-2 gap-x-6">
                                <div>
                                    <label className="mb-2 text-sm font-semibold flex" for="firstname">First name <div
                                        className="px-2 text-red-600">*</div></label>
                                    <input className="border border-gray-300  py-2 w-full rounded" type="text"
                                           name="firstname" id="firstname"/>
                                </div>
                                <div>
                                    <label className="mb-2 text-sm font-semibold flex" For="lastname">Last name <div
                                        className="px-2 text-red-600">*</div></label>
                                    <input className="border border-gray-300  py-2 w-full rounded" type="text"
                                           name="lastname" id="lastname"/>
                                </div>
                            </div>
                            <div>
                                <label className="mb-2 text-sm font-semibold flex " htmlFor="firstname">Display Name <div
                                    className="px-2 text-red-600">*</div></label>
                                <input className="border border-gray-300  py-2 rounded w-full" type="text"
                                       name="displayname" id="displayname"/>
                                <p className="italic text-sm">This will be how your name will be displayed in the account section and in
                                    reviews</p>
                            </div>
                            <div>
                                <label className="mb-2 text-sm font-semibold flex  " htmlFor="firstname">Email address <div
                                    className="px-2 text-red-600">*</div></label>
                                <input className="border border-gray-300 py-2 rounded w-full" type="text"
                                       name="Email address" id="Email address"/>
                            </div>
                            <div className="font-semibold py-2">Password change</div>
                            <div>
                                <label className="mb-2 text-sm block" htmlFor="firstname">Current password (leave blank to leave
                                    unchanged)</label>
                                <input className="border border-gray-300 py-2 rounded w-full" type="text"
                                       name="Email address" id="Email address"/>
                            </div>
                            <div>
                                <label className="mb-2 text-sm block" htmlFor="firstname">New password (leave blank to leave
                                    unchanged)</label>
                                <input className="border border-gray-300 py-2 rounded w-full" type="text"
                                       name="Email address" id="Email address"/>
                            </div>
                            <div>
                                <label className="mb-2 text-sm block" htmlFor="firstname">Confirm new password</label>
                                <input className="border border-gray-300 py-2 rounded w-full" type="text"
                                       name="Email address" id="Email address"/>
                            </div>
                            <button
                                className='uppercase bg-primary text-white md:font-bold md:py-1 md:px-5 md:rounded-sm md:shadow-md md:mb-3'>Save
                                changes
                            </button>
                        </form>

                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Orders