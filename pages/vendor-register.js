import StickyNavbar from "../components/StickyNavbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const VendorRegister = () => {
    return (
        <div>
            <Header/>
            <StickyNavbar/>
            <div className='border border-gray-300 md:my-4 md:p-6 shadow-md w-1/2 mx-auto'>
                <h1 className="text-black text-4xl text-center font-bold md:mb-6">Vendor Registration</h1>
                <form action="">
                    <div className='mb-4'>
                        <label className='md:text-sm md:block' htmlFor="">Email <span
                            className='text-secondary md:text-lg'>*</span></label>
                        <input type="text"
                               className='rounded-sm outline-none border border-gray-300 duration-300 focus:border-gray-500 md:w-full md:py-1.5 md:px-2 md:mt-2 md:mb-2'/>
                        <div className='flex items-center justify-center'>
                            <input type="text"
                                   className='rounded-sm outline-none border border-gray-300 duration-300 focus:border-gray-500 md:py-1.5 md:px-2 w-3/12'/>
                            <button
                                className='uppercase bg-primary ml-2 text-sm text-white md:font-bold md:py-1 md:px-5 md:rounded-sm md:shadow-md'>Re-send Code
                            </button>
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label className='md:text-sm md:block' htmlFor="">Password <span
                            className='text-secondary md:text-lg'>*</span></label>
                        <input type="password"
                               className='rounded-sm outline-none border border-gray-300 duration-300 focus:border-gray-500 md:w-full md:py-1.5 md:px-2 md:mt-2'/>
                    </div>
                    <div className='mb-4'>
                        <label className='md:text-sm md:block' htmlFor="">Confirm Password <span
                            className='text-secondary md:text-lg'>*</span></label>
                        <input type="password"
                               className='rounded-sm outline-none border border-gray-300 duration-300 focus:border-gray-500 md:w-full md:py-1.5 md:px-2 md:mt-2'/>
                    </div>
                    <div className='text-right'>
                        <button
                            className='uppercase bg-primary text-white md:font-bold md:py-1 md:px-5 md:rounded-sm md:shadow-md md:mb-3'>Register
                        </button>
                    </div>
                </form>
            </div>
            <Footer/>
        </div>
    )
}

export default VendorRegister