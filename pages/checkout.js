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
                <div className="text-3xl font-bold mb-4 ml-2 md:p-6">
                    Checkout
                </div>
                <div className="grid grid-cols-3 gap-x-4">
                    <div className='col-span-2 md:p-6 flex flex-col space-y-4'>
                        <div>
                            <div className="text-xl font-bold mb-2">1. Contact information</div>
                            <div className="border-l-2 pl-4 ml-1 pb-6">
                                <p className="pb-6 ml-2">We'll use this email to send you details and updates about your
                                    order.</p>
                                <div className="rounded border border-black px-3 py-1">
                                    <label className="text-sm text-gray-600" htmlFor="emailaddress">Email
                                        address</label>
                                    <input
                                        className="border border-none rounded w-full hover:outline-none focus-within:outline-none"
                                        type="text"
                                        name="Email address" id="Email address"/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="text-xl font-bold mb-2">2. Shipping address</div>
                            <div className="border-l-2 pl-4 ml-1 pb-6">
                                <p className="pb-6 ml-2">Enter the physical address where you want us to deliver your
                                    order.</p>
                                <div className="grid grid-cols-2 gap-x-6 mb-6">
                                    <div className="rounded border border-black px-3 py-1">
                                        <label className="text-sm text-gray-600" htmlFor="firstname">First name</label>
                                        <input
                                            className="border border-none rounded w-full hover:outline-none focus-within:outline-none"
                                            type="text"
                                            name="First name" id="First name"/>
                                    </div>
                                    <div className="rounded border border-black px-3 py-1">
                                        <label className="text-sm text-gray-600" htmlFor="lastname">Last name</label>
                                        <input
                                            className="border border-none rounded w-full hover:outline-none focus-within:outline-none"
                                            type="text"
                                            name="Last name" id="Last name"/>
                                    </div>
                                </div>
                                <div className="rounded border border-black px-3 py-1 mb-6">
                                    <label className="text-sm text-gray-600" htmlFor="address">Address</label>
                                    <input
                                        className="border border-none rounded w-full hover:outline-none focus-within:outline-none"
                                        type="text"
                                        name="Address" id="Address"/>
                                </div>
                                <div className="rounded border border-black px-3 py-1 mb-6">
                                    <label className="text-sm text-gray-600" htmlFor="Apartment">Apartment, suite, etc.
                                        (optional)</label>
                                    <input
                                        className="border border-none rounded w-full hover:outline-none focus-within:outline-none"
                                        type="text"
                                        name="Apartment" id="Apartment"/>
                                </div>
                                <div className="grid grid-cols-2 gap-x-6 mb-6">
                                    <div className="rounded border border-black px-3 py-1">
                                        <label className="text-sm text-gray-600"
                                               htmlFor="Country">Country/Region</label>
                                        <input
                                            className="border border-none rounded w-full hover:outline-none focus-within:outline-none"
                                            type="text"
                                            name="Country" id="Country"/>
                                    </div>
                                    <div className="rounded border border-black px-3 py-1">
                                        <label className="text-sm text-gray-600" htmlFor="City">City</label>
                                        <input
                                            className="border border-none rounded w-full hover:outline-none focus-within:outline-none"
                                            type="text"
                                            name="City" id="City"/>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-x-6 mb-6'>
                                    <div className="rounded border border-black px-3 py-1">
                                        <label className="text-sm text-gray-600" htmlFor="state">State/County (optional)
                                        </label>
                                        <input
                                            className="border border-none rounded w-full hover:outline-none focus-within:outline-none"
                                            type="text"
                                            name="state" id="sate"/>
                                    </div>
                                </div>
                                <div className="rounded border border-black px-3 py-1 mb-6">
                                    <label className="text-sm text-gray-600" htmlFor="state">Phone
                                    </label>
                                    <input
                                        className="border border-none rounded w-full hover:outline-none focus-within:outline-none"
                                        type="text"
                                        name="state" id="sate"/>
                                </div>
                                <div className="flex flex-col">
                                    <div>
                                        <label className="inline-flex items-center mt-3">
                                            <input
                                                className="form-checkbox h-5 w-5 text-gray-600"
                                                type="checkbox"
                                                name="state" id="sate"/>
                                            <span className="ml-4">Use same address for billing</span>
                                        </label>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div>
                            <div className="text-xl font-bold mb-2">3. Shipping options</div>
                            <div className="border-l-2 pl-4 ml-1 pb-6">
                                <div className="flex justify-between">
                                    <div className="pb-6 ml-2">Flat rate</div>
                                    <div>AED0.00</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="text-xl font-bold mb-2">4. Payment method</div>
                            <div className="border-l-2 pl-4 ml-1 pb-6">
                                <div className=" border border-gray-300 md:p-6">
                                    <div className="font-bold mb-3">Cash on delivery</div>
                                    <div>Pay with cash upon delivery.</div>
                                </div>
                            </div>
                        </div>
                        <div className="border-b-2 pb-4 flex flex-col">
                            <div>
                                <label className="inline-flex items-center mt-3">
                                    <input
                                        className="form-checkbox h-5 w-5 text-gray-600"
                                        type="checkbox"
                                        name="state" id="sate"/>
                                    <span className="ml-4 ">Add a note to your order</span>
                                </label>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className='flex items-center'>
                                <FontAwesomeIcon icon={faArrowLeft}/>
                                <div className="font-semibold ml-2">
                                    Return to Cart
                                </div>
                            </div>
                            <div>
                                <button
                                    className='border border-gray-600 bg-black text-sm text-white font-bold md:font-bold md:py-1 md:px-5 md:rounded-sm md:shadow-md md:mb-3 '>
                                    <div className="px-28 py-3">Place order</div>
                                </button>

                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-4 px-4 border-t-2">
                        <div>
                            <div className=" text-lg font-bold pb-4 grid grid-col-2 ">
                                <div>Order summary</div>
                                <div> <FontAwesomeIcon icon={faChevronDown}/> </div>
                            </div>
                            <div className="border-b-2 pb-4">
                                <div className="grid grid-cols-3 ">
                                    <div className="pl-6"><img className="h-12 w-12 object-contain"
                                                               src="https://elctroniat.com/wp-content/uploads/2019/03/lg_v35_thinq_1-450x450.jpg"
                                                               alt=""></img>
                                    </div>
                                    <div className="text-sm font-semibold lex flex-col space-y-2">
                                        <div>LG V35 ThinQ™</div>
                                        <div>AED599.99</div>
                                        <div>This is example of Multiple vendor Product Hub. If you use Vendor plugin,
                                            it
                                            will…
                                        </div>
                                    </div>
                                    <div className=" text-sm font-semibold ">AED2,399.96
                                    </div>
                                </div>
                            </div>
                            <div className="border-b-2 pb-4 pt-4">
                                <div className="grid grid-cols-3 ">
                                    <div className="pl-6">
                                        <span className="" aria-hidden="true">1</span>
                                        <img className="h-12 w-12 object-contain"
                                             src="https://elctroniat.com/wp-content/uploads/2019/03/rockchip_rk3229_1-450x450.jpeg" alt=""></img></div>
                                    <div className="text-sm font-semibold lex flex-col space-y-2">
                                        <div>Zimtown Android 6.0 TV Box</div>
                                        <div>ARockchip RK3229 Quad Core</div>
                                        <div>AED29.99
                                        </div>
                                        <div>It balances your PH so your body isn’t so acidic, it becomes more alkaline.
                                            It…
                                        </div>
                                    </div>
                                    <div className="text-sm font-semibold ">AED29.99
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>Subtotal</div>
                            <div className="font-semibold">AED2,429.95</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>Shipping</div>
                            <div className="font-semibold">AED0.00</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>Coupon Code?</div>
                            <div className="text-sm">
                                <FontAwesomeIcon icon={faChevronDown}/>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-lg font-bold">Total</div>
                            <div className="text-lg font-bold">AED2,429.95</div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default checkout