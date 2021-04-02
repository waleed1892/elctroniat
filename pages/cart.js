import Header from "../components/Header";
import StickyNavbar from "../components/StickyNavbar";
import Footer from "../components/Footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faChevronDown} from "@fortawesome/free-solid-svg-icons";


const checkout = () => {
    return (
        <div>
            <Header></Header>
            <StickyNavbar></StickyNavbar>
            <div className="border border-gray-300 md:mx-24 md:my-4  shadow-md ">
                <div className="grid grid-cols-3 gap-x-4">
                   <div className="col-span-2 md:p-6 flex flex-col space-y-4">
                    <div className=" mb-4 ml-2 md:p-6 ">
                        <div className="text-3xl font-extrabold md:pb-4">Cart</div>
                        <div className="text-lg font-extrabold pb-2">Your cart (6 items)</div>
                        <div className="border-b border-gray-400 pb-4">
                        <div className="grid grid-cols-3 gap-x-4 text-sm ml-4">
                            <div className="col-span-2 space-y-4">PRODUCT</div>
                            <div>TOTAL</div>
                        </div>
                        </div>
                        <div className="grid grid-cols-3 gap-x-4 pt-2">
                           <div><img className="h-12 w-12 object-contain"
                                     src="https://elctroniat.com/wp-content/uploads/2019/03/lg_v35_thinq_1-450x450.jpg"
                                     alt=""></img></div>
                            <div className="">
                                <a className="text-primary" href="#">LG V35 ThinQ™</a>
                                <div>AED599.99</div>
                                <div>This is example of Multiple vendor Product Hub. If you use Vendor plugin, it will…
                                </div>
                                <div className="h-10 w-32">
                                    <label htmlFor="custom-input-number"
                                           className="w-full text-gray-700 text-sm font-semibold">
                                    </label>
                                    <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1 border">
                                        <button data-action="decrement"
                                                className=" bg-white text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                            <span className="m-auto text-2xl font-thin">−</span>
                                        </button>
                                        <input type="number"
                                               className="outline-none focus:outline-none text-center w-full bg-white font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                                               name="custom-input-number" value="0"></input>
                                        <button data-action="increment"
                                                className="bg-white text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                            <span className="m-auto text-2xl font-thin">+</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div>AED2,399.96</div>
                        </div>
                    </div>
                   </div>
                </div>
                </div>
                <Footer></Footer>
            </div>
            )
            }

            export default checkout